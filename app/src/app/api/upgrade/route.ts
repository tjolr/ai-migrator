import { NextRequest, NextResponse } from 'next/server'
import { AIAnalyzer } from '@/lib/ai-analyzer'
import { PackageUpdater } from '@/lib/updater'
import type { PackageUpdate } from '@/lib/analyzer'

export async function POST(request: NextRequest) {
  try {
    const { packageUpdate } = await request.json()
    
    if (!packageUpdate) {
      return NextResponse.json({ error: 'Package update data required' }, { status: 400 })
    }

    const updater = new PackageUpdater()
    await updater.updatePackages([packageUpdate as PackageUpdate])
    
    return NextResponse.json({
      success: true,
      message: `Successfully upgraded ${packageUpdate.name}`
    })
  } catch (error) {
    console.error('Upgrade error:', error)
    return NextResponse.json({ error: 'Failed to upgrade package' }, { status: 500 })
  }
}