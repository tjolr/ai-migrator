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
  const [packageFiles, setPackageFiles] = useState<Array<{ path: string; relativePath: string; displayPath: string; parentFolder: string; packageCount: number }>>([])
  const [upgradeStatus, setUpgradeStatus] = useState<Record<string, 'analyzing' | 'upgrading' | 'success' | 'error'>>({})
  const [upgradeMessages, setUpgradeMessages] = useState<Record<string, string>>({})
  const [analyzingPackages, setAnalyzingPackages] = useState<Set<string>>(new Set())

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

  const analyzePackage = async (packageUpdate: PackageUpdate) => {
    const apiKey = localStorage.getItem("openai-api-key")
    const packageName = packageUpdate.name
    
    if (!apiKey) {
      alert('Please enter your OpenAI API key first')
      return
    }
    
    setAnalyzingPackages(prev => new Set([...prev, packageName]))
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packageUpdate, apiKey })
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Analysis failed')
      }
      
      if (data.migrationAnalysis) {
        setMigrationData(prev => ({
          ...prev,
          [packageName]: data.migrationAnalysis
        }))
      }
    } catch (error) {
      console.error('Failed to analyze:', error)
      alert(`Failed to analyze ${packageName}: ${error}`)
    } finally {
      setAnalyzingPackages(prev => {
        const next = new Set(prev)
        next.delete(packageName)
        return next
      })
    }
  }

  const upgradePackage = async (packageUpdate: PackageUpdate) => {
    const packageName = packageUpdate.name
    
    setUpgradingPackages(prev => new Set([...prev, packageName]))
    setUpgradeStatus(prev => ({ ...prev, [packageName]: 'upgrading' }))
    setUpgradeMessages(prev => ({ ...prev, [packageName]: `Updating ${packageName}...` }))
    
    try {
      const response = await fetch('/api/upgrade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packageUpdate })
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Upgrade failed')
      }
      
      setUpgradeStatus(prev => ({ ...prev, [packageName]: 'success' }))
      setUpgradeMessages(prev => ({ ...prev, [packageName]: `✅ Successfully upgraded ${packageName}` }))
      
      setTimeout(() => {
        setUpgradeStatus(prev => {
          const next = { ...prev }
          delete next[packageName]
          return next
        })
        setUpgradeMessages(prev => {
          const next = { ...prev }
          delete next[packageName]
          return next
        })
      }, 3000)
      
      await scanPackages()
    } catch (error) {
      console.error('Failed to upgrade:', error)
      setUpgradeStatus(prev => ({ ...prev, [packageName]: 'error' }))
      setUpgradeMessages(prev => ({ ...prev, [packageName]: `❌ Failed to upgrade ${packageName}` }))
      
      setTimeout(() => {
        setUpgradeStatus(prev => {
          const next = { ...prev }
          delete next[packageName]
          return next
        })
        setUpgradeMessages(prev => {
          const next = { ...prev }
          delete next[packageName]
          return next
        })
      }, 5000)
    } finally {
      setUpgradingPackages(prev => {
        const next = new Set(prev)
        next.delete(packageName)
        return next
      })
    }
  }

  useEffect(() => {
    scanPackages()
  }, [])

  const totalUpdates = results ? results.major.length + results.minor.length + results.patch.length : 0

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex items-center justify-between gap-4">
            {/* Title Section */}
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-green-400" />
              <h1 className="text-xl font-bold text-white">AI Migrator</h1>
              {packageFiles.length > 0 && (
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {packageFiles.length} file{packageFiles.length !== 1 ? 's' : ''} found
                  </Badge>
                  <div className="text-xs text-white/50 font-mono max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {packageFiles.length === 1 ? (
                      <div className="flex items-center gap-1">
                        <span className="text-white/30">in</span>
                        <span className="text-blue-400">{packageFiles[0].parentFolder}</span>
                        <span className="text-white/30">/</span>
                        <span>package.json</span>
                      </div>
                    ) : (
                      <span>{packageFiles.length} locations</span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Controls Section */}
            <div className="flex items-center gap-4">
              {/* Compact API Key Input */}
              <ApiKeyInput />
              
              <Button 
                variant="glass" 
                size="sm"
                onClick={scanPackages} 
                disabled={isScanning}
                className="flex items-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${isScanning ? 'animate-spin' : ''}`} />
                {isScanning ? 'Scanning...' : 'Refresh'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 p-6">
        <div className="max-w-4xl mx-auto">
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
                    onAnalyze={() => analyzePackage(update)}
                    isUpgrading={upgradingPackages.has(update.name)}
                    isAnalyzing={analyzingPackages.has(update.name)}
                    upgradeStatus={upgradeStatus[update.name]}
                    upgradeMessage={upgradeMessages[update.name]}
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
                    onAnalyze={() => analyzePackage(update)}
                    isUpgrading={upgradingPackages.has(update.name)}
                    isAnalyzing={analyzingPackages.has(update.name)}
                    upgradeStatus={upgradeStatus[update.name]}
                    upgradeMessage={upgradeMessages[update.name]}
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
                    onAnalyze={() => analyzePackage(update)}
                    isUpgrading={upgradingPackages.has(update.name)}
                    isAnalyzing={analyzingPackages.has(update.name)}
                    upgradeStatus={upgradeStatus[update.name]}
                    upgradeMessage={upgradeMessages[update.name]}
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
    </div>
  )
}