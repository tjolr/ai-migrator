import semver from 'semver';
import fetch from 'node-fetch';

export interface PackageUpdate {
  name: string;
  currentVersion: string;
  latestVersion: string;
  updateType: 'major' | 'minor' | 'patch';
  packageJsonPath: string;
  isDev: boolean;
}

export interface AnalysisResult {
  major: PackageUpdate[];
  minor: PackageUpdate[];
  patch: PackageUpdate[];
}

export class PackageAnalyzer {
  private async getLatestVersion(packageName: string): Promise<string | null> {
    try {
      const response = await fetch(`https://registry.npmjs.org/${packageName}/latest`);
      if (!response.ok) return null;
      
      const data = await response.json() as { version: string };
      return data.version;
    } catch (error) {
      console.warn(`Failed to fetch version for ${packageName}:`, error);
      return null;
    }
  }

  private determineUpdateType(current: string, latest: string): 'major' | 'minor' | 'patch' | null {
    const currentClean = semver.coerce(current);
    const latestClean = semver.coerce(latest);
    
    if (!currentClean || !latestClean) return null;
    
    if (semver.major(latestClean) > semver.major(currentClean)) return 'major';
    if (semver.minor(latestClean) > semver.minor(currentClean)) return 'minor';
    if (semver.patch(latestClean) > semver.patch(currentClean)) return 'patch';
    
    return null;
  }

  async analyzePackages(packages: Array<{ name: string; version: string; packageJsonPath: string; isDev: boolean }>): Promise<AnalysisResult> {
    const updates: PackageUpdate[] = [];
    
    for (const pkg of packages) {
      const latestVersion = await this.getLatestVersion(pkg.name);
      if (!latestVersion) continue;
      
      const updateType = this.determineUpdateType(pkg.version, latestVersion);
      if (!updateType) continue;
      
      updates.push({
        name: pkg.name,
        currentVersion: pkg.version,
        latestVersion,
        updateType,
        packageJsonPath: pkg.packageJsonPath,
        isDev: pkg.isDev
      });
    }
    
    return {
      major: updates.filter(u => u.updateType === 'major'),
      minor: updates.filter(u => u.updateType === 'minor'),
      patch: updates.filter(u => u.updateType === 'patch')
    };
  }
}