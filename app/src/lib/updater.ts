import fs from 'fs';
import chalk from 'chalk';
import ora from 'ora';
import { PackageUpdate } from './analyzer';
import { AIAnalyzer, MigrationAnalysis } from './ai-analyzer';

export class PackageUpdater {
  private aiAnalyzer = new AIAnalyzer();

  async updatePackages(updates: PackageUpdate[]): Promise<void> {
    if (updates.length === 0) {
      console.log(chalk.yellow('No packages selected for upgrade.'));
      return;
    }

    console.log(chalk.bold('\n🤖 AI Analysis Phase\n'));
    
    const analyses: MigrationAnalysis[] = [];
    
    for (const update of updates) {
      const spinner = ora(`Analyzing ${update.name}...`).start();
      try {
        const analysis = await this.aiAnalyzer.analyzePackageUpgrade(update);
        analyses.push(analysis);
        spinner.succeed(`Analyzed ${update.name}`);
        
        this.displayAnalysis(analysis);
      } catch (error) {
        spinner.fail(`Failed to analyze ${update.name}`);
        console.error(error);
      }
    }

    console.log(chalk.bold('\n📝 Applying Updates\n'));
    
    const updatesByFile = this.groupUpdatesByFile(updates);
    
    for (const [filePath, fileUpdates] of Object.entries(updatesByFile)) {
      await this.updatePackageJsonFile(filePath, fileUpdates);
    }
    
    console.log(chalk.green('\n✅ All updates completed!'));
    console.log(chalk.yellow('\n⚠️  Remember to run your tests and verify the changes work correctly.'));
  }

  private displayAnalysis(analysis: MigrationAnalysis): void {
    const riskColor = analysis.riskLevel === 'high' ? chalk.red : 
                     analysis.riskLevel === 'medium' ? chalk.yellow : chalk.green;
    
    console.log(chalk.bold(`\n📋 ${analysis.packageName}`));
    console.log(`   ${analysis.summary}`);
    console.log(`   Risk: ${riskColor(analysis.riskLevel.toUpperCase())}`);
    
    if (analysis.breakingChanges.length > 0) {
      console.log(chalk.red('   Breaking Changes:'));
      analysis.breakingChanges.forEach(change => {
        console.log(chalk.red(`     • ${change}`));
      });
    }
    
    if (analysis.migrationSteps.length > 0) {
      console.log(chalk.blue('   Migration Steps:'));
      analysis.migrationSteps.forEach(step => {
        console.log(chalk.blue(`     • ${step}`));
      });
    }
  }

  private groupUpdatesByFile(updates: PackageUpdate[]): Record<string, PackageUpdate[]> {
    const grouped: Record<string, PackageUpdate[]> = {};
    
    for (const update of updates) {
      if (!grouped[update.packageJsonPath]) {
        grouped[update.packageJsonPath] = [];
      }
      grouped[update.packageJsonPath].push(update);
    }
    
    return grouped;
  }

  private async updatePackageJsonFile(filePath: string, updates: PackageUpdate[]): Promise<void> {
    try {
      const content = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'));
      
      for (const update of updates) {
        const section = update.isDev ? 'devDependencies' : 'dependencies';
        if (content[section] && content[section][update.name]) {
          const oldVersion = content[section][update.name];
          const prefix = oldVersion.match(/^[\^~]/)?.[0] || '';
          content[section][update.name] = `${prefix}${update.latestVersion}`;
          
          console.log(chalk.green(`✅ Updated ${update.name} in ${filePath}`));
        }
      }
      
      await fs.promises.writeFile(filePath, JSON.stringify(content, null, 2) + '\n');
    } catch (error) {
      console.error(chalk.red(`Failed to update ${filePath}:`), error);
    }
  }
}