import { NextRequest, NextResponse } from 'next/server'
import { AIAnalyzer } from '@/lib/ai-analyzer'
import { PackageUpdater } from '@/lib/updater'
import type { PackageUpdate } from '@/lib/analyzer'

export async function POST(request: NextRequest) {
  try {
    const { packageUpdate, apiKey } = await request.json()
    
    if (!packageUpdate) {
      return NextResponse.json({ error: 'Package update data required' }, { status: 400 })
    }

    let migrationAnalysis = null
    
    if (apiKey) {
      process.env.OPENAI_API_KEY = apiKey
      const aiAnalyzer = new AIAnalyzer()
      migrationAnalysis = await aiAnalyzer.analyzePackageUpgrade(packageUpdate as PackageUpdate)
    }

    const updater = new PackageUpdater()
    await updater.updatePackages([packageUpdate as PackageUpdate])
    
    return NextResponse.json({
      success: true,
      migrationAnalysis
    })
  } catch (error) {
    console.error('Upgrade error:', error)
    return NextResponse.json({ error: 'Failed to upgrade package' }, { status: 500 })
  }
}