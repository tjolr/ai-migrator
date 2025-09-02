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
  isUpgrading: boolean
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
  isUpgrading,
  upgradeStatus,
  upgradeMessage,
  migrationData 
}: PackageRowProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="glass-card mb-2 overflow-hidden">
      <Accordion type="single" collapsible value={isExpanded ? "item-1" : ""} onValueChange={(value) => setIsExpanded(!!value)}>
        <AccordionItem value="item-1" className="border-none">
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <Package className="h-5 w-5 text-green-400" />
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

              <div className="flex items-center gap-2">
                <Badge variant={updateType} className="text-xs">{updateType}</Badge>
                
                {migrationData && (
                  <div className="flex items-center gap-1">
                    {riskIcons[migrationData.riskLevel]}
                    <span className={`text-xs font-medium ${riskColors[migrationData.riskLevel]}`}>
                      {migrationData.riskLevel.toUpperCase()}
                    </span>
                  </div>
                )}

                <Button 
                  variant="glass" 
                  size="sm" 
                  onClick={onUpgrade}
                  disabled={isUpgrading || upgradeStatus === 'success'}
                  className="min-w-[70px] h-7 text-xs"
                >
                  {upgradeStatus === 'analyzing' && '🔍 Analyzing'}
                  {upgradeStatus === 'upgrading' && '⬆️ Updating'}
                  {upgradeStatus === 'success' && '✅ Done'}
                  {upgradeStatus === 'error' && '❌ Failed'}
                  {!upgradeStatus && !isUpgrading && 'Upgrade'}
                  {!upgradeStatus && isUpgrading && '...'}
                </Button>

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
            {migrationData ? (
              <div className="px-3 pb-3 space-y-3 border-t border-white/10">
                <div>
                  <h4 className="font-medium text-white mb-2">Summary</h4>
                  <p className="text-sm text-white/80">{migrationData.summary}</p>
                </div>

                {migrationData.breakingChanges.length > 0 && (
                  <div>
                    <h4 className="font-medium text-red-400 mb-2">Breaking Changes</h4>
                    <ul className="space-y-1">
                      {migrationData.breakingChanges.map((change, idx) => (
                        <li key={idx} className="text-sm text-red-300 flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {migrationData.migrationSteps.length > 0 && (
                  <div>
                    <h4 className="font-medium text-blue-400 mb-2">Migration Steps</h4>
                    <ol className="space-y-1">
                      {migrationData.migrationSteps.map((step, idx) => (
                        <li key={idx} className="text-sm text-blue-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ) : (
              <div className="px-3 pb-3 border-t border-white/10">
                <p className="text-xs text-white/50">Click upgrade to see AI-powered migration analysis</p>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}