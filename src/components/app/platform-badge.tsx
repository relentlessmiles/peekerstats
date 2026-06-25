import { PLATFORMS } from '@/lib/mock-data'

interface PlatformBadgeProps {
  platform: string
  size?: 'sm' | 'md'
}

export function PlatformBadge({ platform, size = 'md' }: PlatformBadgeProps) {
  const p = PLATFORMS[platform]
  if (!p) return null
  return (
    <span
      className={`inline-flex items-center font-semibold rounded ${size === 'sm' ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-1'}`}
      style={{ backgroundColor: `${p.color}18`, color: p.color }}
    >
      {p.short}
    </span>
  )
}

export function PlatformDot({ platform }: { platform: string }) {
  const p = PLATFORMS[platform]
  if (!p) return null
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
      {p.name}
    </span>
  )
}
