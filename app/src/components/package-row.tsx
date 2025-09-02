"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Package, AlertTriangle, CheckCircle, Info } from "lucide-react"

interface PackageRowProps {
  name: string
  currentVersion: string
  latestVersion: string
  updateType: 'major' | 'minor' | 'patch'
  isDev: boolean
  onUpgrade: () => void
  onAnalyze: () => Promise<void>
  isUpgrading: boolean
  isAnalyzing: boolean
  upgradeStatus?: 'analyzing' | 'upgrading' | 'success' | 'error'
  upgradeMessage?: string
  migrationData?: {
    summary: string
    breakingChanges: string[]
    migrationSteps: string[]
    riskLevel: 'low' | 'medium' | 'high'
  }
}

const riskIcons = {
  low: <CheckCircle className="h-4 w-4 text-green-400" />,
  medium: <Info className="h-4 w-4 text-yellow-400" />,
  high: <AlertTriangle className="h-4 w-4 text-red-400" />
}

const riskColors = {
  low: "text-green-400",
  medium: "text-yellow-400", 
  high: "text-red-400"
}

export function PackageRow({ 
  name, 
  currentVersion, 
  latestVersion, 
  updateType, 
  isDev, 
  onUpgrade, 
  onAnalyze,
  isUpgrading,
  isAnalyzing,
  upgradeStatus,
  upgradeMessage,
  migrationData 
}: PackageRowProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const handleAccordionChange = async (value: string) => {
    const isOpening = !!value
    setIsExpanded(isOpening)
    
    if (isOpening && !migrationData && !isAnalyzing) {
      await onAnalyze()
    }
  }

  return (
    <div className="glass-card mb-2 overflow-hidden">
      <Accordion type="single" collapsible value={isExpanded ? "item-1" : ""} onValueChange={handleAccordionChange}>
        <AccordionItem value="item-1" className="border-none">
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <Package className="h-4 w-4 text-green-400" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-white text-sm">{name}</h3>
                    {isDev && <Badge variant="outline" className="text-xs py-0 px-1.5 h-4">dev</Badge>}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span>{currentVersion}</span>
                    <ArrowRight className="h-2.5 w-2.5" />
                    <span>{latestVersion}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge variant={updateType} className="text-xs">{updateType}</Badge>

                <AccordionTrigger className="hover:no-underline p-0 w-6 h-6 rounded-md hover:bg-white/10">
                  <span className="sr-only">Toggle details</span>
                </AccordionTrigger>
              </div>
            </div>
          </div>
          
          {upgradeMessage && (
            <div className="px-3 py-2 border-t border-white/10">
              <div className={`text-xs flex items-center gap-2 ${
                upgradeStatus === 'success' ? 'text-green-400' :
                upgradeStatus === 'error' ? 'text-red-400' :
                'text-blue-400'
              }`}>
                {upgradeStatus === 'analyzing' && <div className="animate-spin h-3 w-3 border border-blue-400 border-t-transparent rounded-full" />}
                {upgradeStatus === 'upgrading' && <div className="animate-pulse h-3 w-3 bg-blue-400 rounded-full" />}
                <span>{upgradeMessage}</span>
              </div>
            </div>
          )}

          <AccordionContent>
            <div className="px-6 py-4 border-t border-white/10">
              {isAnalyzing ? (
                <div className="flex items-center justify-center py-8">
                  <div className="flex items-center gap-3 text-white/60">
                    <div className="animate-spin h-5 w-5 border border-blue-400 border-t-transparent rounded-full" />
                    <span>Analyzing changes with AI...</span>
                  </div>
                </div>
              ) : migrationData ? (
                <div className="space-y-4">
                  {/* Risk Level and Summary */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        {riskIcons[migrationData.riskLevel]}
                        <span className={`text-sm font-medium ${riskColors[migrationData.riskLevel]}`}>
                          {migrationData.riskLevel.toUpperCase()} RISK
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-white mb-2 text-sm">What's New</h4>
                        <p className="text-sm text-white/80">{migrationData.summary}</p>
                      </div>
                    </div>
                    
                    {/* Upgrade Button - Bottom Right */}
                    <Button 
                      variant="glass" 
                      onClick={onUpgrade}
                      disabled={isUpgrading || upgradeStatus === 'success'}
                      className="min-w-[80px] h-8"
                    >
                      {upgradeStatus === 'upgrading' && '⬆️ Updating'}
                      {upgradeStatus === 'success' && '✅ Done'}
                      {upgradeStatus === 'error' && '❌ Failed'}
                      {!upgradeStatus && !isUpgrading && 'Upgrade'}
                      {!upgradeStatus && isUpgrading && 'Upgrading...'}
                    </Button>
                  </div>

                  {/* Breaking Changes - Styled as Dangerous */}
                  {migrationData.breakingChanges.length > 0 && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <h4 className="font-medium text-red-400 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Breaking Changes
                      </h4>
                      <ul className="space-y-1">
                        {migrationData.breakingChanges.map((change, idx) => (
                          <li key={idx} className="text-sm text-red-300 flex items-start gap-2">
                            <span className="text-red-400 mt-1">⚠️</span>
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Migration Steps */}
                  {migrationData.migrationSteps.length > 0 && (
                    <div>
                      <h4 className="font-medium text-blue-400 mb-2 text-sm">Migration Steps</h4>
                      <ol className="space-y-1">
                        {migrationData.migrationSteps.map((step, idx) => (
                          <li key={idx} className="text-sm text-blue-300 flex items-start gap-2">
                            <span className="text-blue-400 mt-1 min-w-[16px]">{idx + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center py-6">
                  <p className="text-sm text-white/50">Expand to see AI-powered migration analysis</p>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}