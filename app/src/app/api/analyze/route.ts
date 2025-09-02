import { NextRequest, NextResponse } from 'next/server'
import { AIAnalyzer } from '@/lib/ai-analyzer'
import type { PackageUpdate } from '@/lib/analyzer'

export async function POST(request: NextRequest) {
  try {
    const { packageUpdate, apiKey } = await request.json()
    
    if (!packageUpdate) {
      return NextResponse.json({ error: 'Package update data required' }, { status: 400 })
    }

    if (!apiKey) {
      return NextResponse.json({ error: 'OpenAI API key required' }, { status: 400 })
    }

    process.env.OPENAI_API_KEY = apiKey
    const aiAnalyzer = new AIAnalyzer()
    const migrationAnalysis = await aiAnalyzer.analyzePackageUpgrade(packageUpdate as PackageUpdate)
    
    return NextResponse.json({
      success: true,
      migrationAnalysis
    })
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json({ error: 'Failed to analyze package' }, { status: 500 })
  }
}