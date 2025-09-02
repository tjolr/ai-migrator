"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Key, Eye, EyeOff } from "lucide-react"

export function ApiKeyInput() {
  const [apiKey, setApiKey] = useState("")
  const [showKey, setShowKey] = useState(false)
  const [isStored, setIsStored] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("openai-api-key")
    if (stored) {
      setApiKey(stored)
      setIsStored(true)
    }
  }, [])

  const handleSave = () => {
    if (apiKey.trim()) {
      localStorage.setItem("openai-api-key", apiKey.trim())
      setIsStored(true)
    }
  }

  const handleClear = () => {
    localStorage.removeItem("openai-api-key")
    setApiKey("")
    setIsStored(false)
  }

  return (
    <div className="glass-card p-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-white/80">
          <Key className="h-4 w-4" />
          <span>OpenAI API Key</span>
        </div>
        
        <div className="flex-1 flex items-center gap-2">
          <div className="relative flex-1 max-w-md">
            <Input
              type={showKey ? "text" : "password"}
              placeholder="sk-..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="pr-10"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-10 w-10 text-white/60 hover:text-white"
              onClick={() => setShowKey(!showKey)}
            >
              {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          
          <Button variant="glass" size="sm" onClick={handleSave} disabled={!apiKey.trim()}>
            Save
          </Button>
          
          {isStored && (
            <Button variant="outline" size="sm" onClick={handleClear}>
              Clear
            </Button>
          )}
        </div>
        
        {isStored && (
          <div className="text-xs text-green-400 flex items-center gap-1">
            <div className="h-2 w-2 bg-green-400 rounded-full" />
            Stored
          </div>
        )}
      </div>
    </div>
  )
}