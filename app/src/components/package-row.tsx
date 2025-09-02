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
  migrationData 
}: PackageRowProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="glass-card mb-3 overflow-hidden">
      <Accordion type="single" collapsible value={isExpanded ? "item-1" : ""} onValueChange={(value) => setIsExpanded(!!value)}>
        <AccordionItem value="item-1" className="border-none">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <Package className="h-5 w-5 text-cosmic-400" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white">{name}</h3>
                    {isDev && <Badge variant="outline" className="text-xs">dev</Badge>}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span>{currentVersion}</span>
                    <ArrowRight className="h-3 w-3" />
                    <span>{latestVersion}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge variant={updateType}>{updateType}</Badge>
                
                {migrationData && (
                  <div className="flex items-center gap-2">
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
                  disabled={isUpgrading}
                  className="min-w-[80px]"
                >
                  {isUpgrading ? "Upgrading..." : "Upgrade"}
                </Button>

                <AccordionTrigger className="hover:no-underline p-0 w-8 h-8 rounded-md hover:bg-white/10">
                  <span className="sr-only">Toggle details</span>
                </AccordionTrigger>
              </div>
            </div>
          </div>

          <AccordionContent>
            {migrationData ? (
              <div className="px-4 pb-4 space-y-4 border-t border-white/10">
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
              <div className="px-4 pb-4 border-t border-white/10">
                <p className="text-sm text-white/60">Click upgrade to see AI-powered migration analysis</p>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}