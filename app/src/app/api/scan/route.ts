import { NextRequest, NextResponse } from 'next/server'
import { PackageScanner } from '@/lib/scanner'
import { PackageAnalyzer } from '@/lib/analyzer'

export async function GET(request: NextRequest) {
  try {
    const scanner = new PackageScanner()
    const analyzer = new PackageAnalyzer()
    
    const cwd = process.cwd()
    console.log('Scanning from:', cwd)
    const packageFiles = await scanner.findPackageJsonFiles(cwd)
    
    if (packageFiles.length === 0) {
      return NextResponse.json({ error: 'No package.json files found' }, { status: 404 })
    }

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
    ])

    const results = await analyzer.analyzePackages(allPackages)
    
    return NextResponse.json({
      packageFiles: packageFiles.map(f => ({ path: f.path, packageCount: Object.keys(f.dependencies).length + Object.keys(f.devDependencies).length })),
      results
    })
  } catch (error) {
    console.error('Scan error:', error)
    return NextResponse.json({ error: 'Failed to scan packages' }, { status: 500 })
  }
}