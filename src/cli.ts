#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { PackageScanner } from './scanner.js';
import { PackageAnalyzer } from './analyzer.js';
import { InteractiveUI } from './ui.js';
import { PackageUpdater } from './updater.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name('ai-migrator')
  .description('AI-powered package upgrade tool with intelligent migration guidance')
  .version('1.0.0');

program
  .command('scan')
  .description('Scan for package updates')
  .option('-d, --directory <path>', 'Directory to scan', process.cwd())
  .option('--dry-run', 'Show analysis without making changes')
  .action(async (options) => {
    try {
      await runMigrationAnalysis(options.directory, options.dryRun);
    } catch (error) {
      console.error(chalk.red('Error:'), error);
      process.exit(1);
    }
  });

program
  .command('app')
  .description('Launch web interface')
  .option('-p, --port <number>', 'Port to run on', '7075')
  .action(async (options) => {
    try {
      await runWebApp(options.port);
    } catch (error) {
      console.error(chalk.red('Error:'), error);
      process.exit(1);
    }
  });

async function runMigrationAnalysis(directory: string, dryRun: boolean = false): Promise<void> {
  console.log(chalk.bold('🔍 AI Package Migrator\n'));
  
  const scanner = new PackageScanner();
  const analyzer = new PackageAnalyzer();
  const ui = new InteractiveUI();
  const updater = new PackageUpdater();

  const spinner = ora('Scanning for package.json files...').start();
  const packageFiles = await scanner.findPackageJsonFiles(directory);
  
  if (packageFiles.length === 0) {
    spinner.fail('No package.json files found');
    return;
  }
  
  spinner.succeed(`Found ${packageFiles.length} package.json file(s)`);

  const allPackages = packageFiles.flatMap(file => [
    ...Object.entries(file.dependencies).map(([name, version]) => ({
      name,
      version: version.replace(/^[\^~]/, ''),
      packageJsonPath: file.path,
      isDev: false
    })),
    ...Object.entries(file.devDependencies).map(([name, version]) => ({
      name,
      version: version.replace(/^[\^~]/, ''),
      packageJsonPath: file.path,
      isDev: true
    }))
  ]);

  if (allPackages.length === 0) {
    console.log(chalk.yellow('No dependencies found to analyze.'));
    return;
  }

  const analysisSpinner = ora(`Analyzing ${allPackages.length} packages...`).start();
  const results = await analyzer.analyzePackages(allPackages);
  analysisSpinner.succeed('Analysis complete');

  ui.displayResults(results);

  if (dryRun) {
    console.log(chalk.blue('\n🔍 Dry run mode - no changes will be made'));
    return;
  }

  const selectedPackages = await ui.selectPackages(results);
  const shouldProceed = await ui.confirmUpgrade(selectedPackages);
  
  if (shouldProceed) {
    await updater.updatePackages(selectedPackages);
  } else {
    console.log(chalk.yellow('Operation cancelled.'));
  }
}

async function runWebApp(port: string): Promise<void> {
  console.log(chalk.bold('🚀 Starting AI Migrator Web App\n'));
  
  const appDir = path.join(__dirname, '..', 'app');
  console.log(chalk.blue(`Starting Next.js app on port ${port}...`));
  console.log(chalk.gray(`App directory: ${appDir}`));
  
  const child = spawn('pnpm', ['dev', '--port', port], {
    cwd: appDir,
    stdio: 'inherit',
    shell: true
  });
  
  child.on('error', (error) => {
    console.error(chalk.red('Failed to start web app:'), error);
    process.exit(1);
  });
  
  process.on('SIGINT', () => {
    child.kill('SIGINT');
    process.exit(0);
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  program.parse();
}