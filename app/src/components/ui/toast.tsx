"use client"

import { useState, useEffect } from 'react'
import { CheckCircle, X } from 'lucide-react'

interface ToastProps {
  message: string
  type?: 'success' | 'error'
  duration?: number
  onClose: () => void
}

export function Toast({ message, type = 'success', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300) // Wait for animation
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div className={`fixed top-20 right-4 z-50 transition-all duration-300 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className={`glass-card p-4 min-w-[300px] border-l-4 ${
        type === 'success' ? 'border-l-green-400' : 'border-l-red-400'
      }`}>
        <div className="flex items-center gap-3">
          {type === 'success' && <CheckCircle className="h-5 w-5 text-green-400" />}
          <span className="text-white text-sm flex-1">{message}</span>
          <button 
            onClick={handleClose}
            className="text-white/50 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}