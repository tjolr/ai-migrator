import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import fetch from 'node-fetch';
import { PackageUpdate } from './analyzer.js';

export interface MigrationAnalysis {
  packageName: string;
  summary: string;
  breakingChanges: string[];
  migrationSteps: string[];
  riskLevel: 'low' | 'medium' | 'high';
}

export class AIAnalyzer {
  private async fetchChangelogInfo(packageName: string, fromVersion: string, toVersion: string): Promise<string> {
    try {
      const response = await fetch(`https://registry.npmjs.org/${packageName}`);
      if (!response.ok) return '';
      
      const data = await response.json() as any;
      const repository = data.repository?.url || '';
      const homepage = data.homepage || '';
      
      const changelogSources = [
        `${repository}/releases`,
        `${repository}/blob/main/CHANGELOG.md`,
        `${repository}/blob/master/CHANGELOG.md`,
        `${homepage}/releases`,
        `${homepage}/changelog`
      ].filter(Boolean);
      
      return `Repository: ${repository}\nHomepage: ${homepage}\nChangelog sources: ${changelogSources.join(', ')}`;
    } catch (error) {
      return `Failed to fetch package info for ${packageName}`;
    }
  }

  async analyzePackageUpgrade(update: PackageUpdate): Promise<MigrationAnalysis> {
    const changelogInfo = await this.fetchChangelogInfo(
      update.name,
      update.currentVersion,
      update.latestVersion
    );

    const prompt = `Analyze the upgrade of npm package "${update.name}" from version ${update.currentVersion} to ${update.latestVersion}.

Package info:
${changelogInfo}

Please provide:
1. A concise summary of the key changes
2. List of breaking changes (if any)
3. Step-by-step migration instructions
4. Risk assessment (low/medium/high)

Focus on practical migration steps developers need to take. If this is a major version bump, pay special attention to breaking changes.`;

    try {
      const { text } = await generateText({
        model: openai('gpt-4o-mini'),
        prompt,
      });

      return this.parseAnalysisResponse(update.name, text);
    } catch (error) {
      console.warn(`AI analysis failed for ${update.name}:`, error);
      return {
        packageName: update.name,
        summary: `Failed to analyze upgrade from ${update.currentVersion} to ${update.latestVersion}`,
        breakingChanges: [],
        migrationSteps: [`Update ${update.name} from ${update.currentVersion} to ${update.latestVersion}`],
        riskLevel: update.updateType === 'major' ? 'high' : update.updateType === 'minor' ? 'medium' : 'low'
      };
    }
  }

  private parseAnalysisResponse(packageName: string, response: string): MigrationAnalysis {
    const lines = response.split('\n').map(line => line.trim()).filter(Boolean);
    
    let summary = '';
    const breakingChanges: string[] = [];
    const migrationSteps: string[] = [];
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';
    
    let currentSection = '';
    
    for (const line of lines) {
      const lowerLine = line.toLowerCase();
      
      if (lowerLine.includes('summary') || lowerLine.includes('changes')) {
        currentSection = 'summary';
        continue;
      } else if (lowerLine.includes('breaking')) {
        currentSection = 'breaking';
        continue;
      } else if (lowerLine.includes('migration') || lowerLine.includes('steps')) {
        currentSection = 'migration';
        continue;
      } else if (lowerLine.includes('risk')) {
        currentSection = 'risk';
        if (lowerLine.includes('high')) riskLevel = 'high';
        else if (lowerLine.includes('low')) riskLevel = 'low';
        else riskLevel = 'medium';
        continue;
      }
      
      if (line.startsWith('-') || line.startsWith('*') || line.match(/^\d+\./)) {
        const cleanLine = line.replace(/^[-*\d.]\s*/, '');
        if (currentSection === 'breaking') {
          breakingChanges.push(cleanLine);
        } else if (currentSection === 'migration') {
          migrationSteps.push(cleanLine);
        }
      } else if (currentSection === 'summary' && line.length > 10) {
        summary = line;
      }
    }
    
    if (!summary) {
      summary = `Upgrade ${packageName} with standard version bump considerations`;
    }
    
    return {
      packageName,
      summary,
      breakingChanges,
      migrationSteps,
      riskLevel
    };
  }
}