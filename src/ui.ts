import inquirer from 'inquirer';
import chalk from 'chalk';
import { PackageUpdate, AnalysisResult } from './analyzer.js';

export class InteractiveUI {
  displayResults(results: AnalysisResult): void {
    console.log(chalk.bold('\n📦 Package Update Analysis\n'));
    
    this.displayCategory('🔴 Major Updates', results.major);
    this.displayCategory('🟡 Minor Updates', results.minor);
    this.displayCategory('🟢 Patch Updates', results.patch);
  }

  private displayCategory(title: string, updates: PackageUpdate[]): void {
    if (updates.length === 0) return;
    
    console.log(chalk.bold(title));
    updates.forEach(update => {
      const devTag = update.isDev ? chalk.gray('(dev)') : '';
      console.log(`  ${update.name}: ${chalk.red(update.currentVersion)} → ${chalk.green(update.latestVersion)} ${devTag}`);
      console.log(chalk.gray(`    ${update.packageJsonPath}`));
    });
    console.log();
  }

  async selectPackages(results: AnalysisResult): Promise<PackageUpdate[]> {
    const allUpdates = [...results.major, ...results.minor, ...results.patch];
    
    if (allUpdates.length === 0) {
      console.log(chalk.green('✅ All packages are up to date!'));
      return [];
    }

    const choices = allUpdates.map(update => ({
      name: `${update.name}: ${update.currentVersion} → ${update.latestVersion} (${update.updateType})`,
      value: update
    }));

    const { selectedPackage } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedPackage',
        message: 'Select ONE package to upgrade:',
        choices,
        pageSize: 15
      }
    ]);

    return [selectedPackage];
  }

  async confirmUpgrade(packages: PackageUpdate[]): Promise<boolean> {
    if (packages.length === 0) return false;
    
    console.log(chalk.bold('\nSelected package for upgrade:'));
    const pkg = packages[0];
    console.log(`  ${pkg.name}: ${chalk.red(pkg.currentVersion)} → ${chalk.green(pkg.latestVersion)}`);
    
    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Proceed with AI analysis and upgrade?',
        default: true
      }
    ]);
    
    return confirm;
  }
}