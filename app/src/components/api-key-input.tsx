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
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-xs text-white/60">
        <Key className="h-3 w-3" />
        <span>API Key</span>
      </div>
      
      <div className="relative">
        <Input
          type={showKey ? "text" : "password"}
          placeholder="sk-..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-32 h-7 text-xs pr-7"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-7 w-7 text-white/40 hover:text-white"
          onClick={() => setShowKey(!showKey)}
        >
          {showKey ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
        </Button>
      </div>
      
      <Button variant="glass" size="sm" onClick={handleSave} disabled={!apiKey.trim()} className="h-7 text-xs px-2">
        Save
      </Button>
      
      {isStored && (
        <div className="text-xs text-green-400 flex items-center gap-1">
          <div className="h-1.5 w-1.5 bg-green-400 rounded-full" />
        </div>
      )}
    </div>
  )
}