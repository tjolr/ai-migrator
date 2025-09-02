import fs from 'fs';
import path from 'path';

export interface PackageJsonInfo {
  path: string;
  content: any;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
}

export class PackageScanner {
  async findPackageJsonFiles(rootDir: string): Promise<PackageJsonInfo[]> {
    const packageFiles: PackageJsonInfo[] = [];
    
    const scanDirectory = async (dir: string): Promise<void> => {
      try {
        const entries = await fs.promises.readdir(dir, { withFileTypes: true });
        
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          
          if (entry.isDirectory() && entry.name !== 'node_modules' && !entry.name.startsWith('.')) {
            await scanDirectory(fullPath);
          } else if (entry.isFile() && entry.name === 'package.json') {
            try {
              const content = JSON.parse(await fs.promises.readFile(fullPath, 'utf-8'));
              packageFiles.push({
                path: fullPath,
                content,
                dependencies: content.dependencies || {},
                devDependencies: content.devDependencies || {}
              });
            } catch (error) {
              console.warn(`Failed to parse ${fullPath}:`, error);
            }
          }
        }
      } catch (error) {
        console.warn(`Failed to scan directory ${dir}:`, error);
      }
    };
    
    await scanDirectory(rootDir);
    return packageFiles;
  }
}