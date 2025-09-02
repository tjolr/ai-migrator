"use client"

import { useState, useEffect } from "react"
import { ApiKeyInput } from "@/components/api-key-input"
import { PackageRow } from "@/components/package-row"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Package, Sparkles } from "lucide-react"

interface PackageUpdate {
  name: string
  currentVersion: string
  latestVersion: string
  updateType: 'major' | 'minor' | 'patch'
  packageJsonPath: string
  isDev: boolean
}

interface AnalysisResult {
  major: PackageUpdate[]
  minor: PackageUpdate[]
  patch: PackageUpdate[]
}

interface MigrationData {
  summary: string
  breakingChanges: string[]
  migrationSteps: string[]
  riskLevel: 'low' | 'medium' | 'high'
}

export default function Home() {
  const [results, setResults] = useState<AnalysisResult | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [upgradingPackages, setUpgradingPackages] = useState<Set<string>>(new Set())
  const [migrationData, setMigrationData] = useState<Record<string, MigrationData>>({})
  const [packageFiles, setPackageFiles] = useState<Array<{ path: string; packageCount: number }>>([])

  const scanPackages = async () => {
    setIsScanning(true)
    try {
      const response = await fetch('/api/scan')
      const data = await response.json()
      
      if (data.error) {
        console.error('Scan error:', data.error)
        return
      }
      
      setResults(data.results)
      setPackageFiles(data.packageFiles)
    } catch (error) {
      console.error('Failed to scan:', error)
    } finally {
      setIsScanning(false)
    }
  }

  const upgradePackage = async (packageUpdate: PackageUpdate) => {
    const apiKey = localStorage.getItem("openai-api-key")
    setUpgradingPackages(prev => new Set([...prev, packageUpdate.name]))
    
    try {
      const response = await fetch('/api/upgrade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packageUpdate, apiKey })
      })
      
      const data = await response.json()
      
      if (data.migrationAnalysis) {
        setMigrationData(prev => ({
          ...prev,
          [packageUpdate.name]: data.migrationAnalysis
        }))
      }
      
      await scanPackages()
    } catch (error) {
      console.error('Failed to upgrade:', error)
    } finally {
      setUpgradingPackages(prev => {
        const next = new Set(prev)
        next.delete(packageUpdate.name)
        return next
      })
    }
  }

  useEffect(() => {
    scanPackages()
  }, [])

  const totalUpdates = results ? results.major.length + results.minor.length + results.patch.length : 0

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-cosmic-400" />
            <h1 className="text-4xl font-bold text-white">AI Migrator</h1>
          </div>
          <p className="text-white/70">AI-powered package upgrade tool with intelligent migration guidance</p>
        </div>

        <ApiKeyInput />

        <div className="glass-card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Package className="h-6 w-6 text-cosmic-400" />
              <h2 className="text-xl font-semibold text-white">Package Analysis</h2>
              {packageFiles.length > 0 && (
                <Badge variant="outline">
                  {packageFiles.length} file{packageFiles.length !== 1 ? 's' : ''} found
                </Badge>
              )}
            </div>
            
            <Button 
              variant="glass" 
              onClick={scanPackages} 
              disabled={isScanning}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isScanning ? 'animate-spin' : ''}`} />
              {isScanning ? 'Scanning...' : 'Refresh'}
            </Button>
          </div>

          {packageFiles.length > 0 && (
            <div className="mb-4">
              <p className="text-sm text-white/60">Found package.json files:</p>
              <div className="mt-2 space-y-1">
                {packageFiles.map((file, idx) => (
                  <div key={idx} className="text-xs text-white/80 font-mono">
                    {file.path} ({file.packageCount} packages)
                  </div>
                ))}
              </div>
            </div>
          )}

          {totalUpdates > 0 && (
            <div className="text-sm text-white/80 mb-4">
              Found {totalUpdates} package{totalUpdates !== 1 ? 's' : ''} with available updates
            </div>
          )}
        </div>

        {results && (
          <div className="space-y-6">
            {results.major.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                  🔴 Major Updates ({results.major.length})
                </h3>
                {results.major.map((update) => (
                  <PackageRow
                    key={`${update.name}-${update.packageJsonPath}`}
                    {...update}
                    onUpgrade={() => upgradePackage(update)}
                    isUpgrading={upgradingPackages.has(update.name)}
                    migrationData={migrationData[update.name]}
                  />
                ))}
              </div>
            )}

            {results.minor.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                  🟡 Minor Updates ({results.minor.length})
                </h3>
                {results.minor.map((update) => (
                  <PackageRow
                    key={`${update.name}-${update.packageJsonPath}`}
                    {...update}
                    onUpgrade={() => upgradePackage(update)}
                    isUpgrading={upgradingPackages.has(update.name)}
                    migrationData={migrationData[update.name]}
                  />
                ))}
              </div>
            )}

            {results.patch.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                  🟢 Patch Updates ({results.patch.length})
                </h3>
                {results.patch.map((update) => (
                  <PackageRow
                    key={`${update.name}-${update.packageJsonPath}`}
                    {...update}
                    onUpgrade={() => upgradePackage(update)}
                    isUpgrading={upgradingPackages.has(update.name)}
                    migrationData={migrationData[update.name]}
                  />
                ))}
              </div>
            )}

            {totalUpdates === 0 && (
              <div className="glass-card p-8 text-center">
                <Package className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">All packages are up to date!</h3>
                <p className="text-white/60">No updates available at this time.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}