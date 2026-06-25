import { cn } from '@/lib/utils'

interface HealthBadgeProps {
  status: 'healthy' | 'warning' | 'critical' | string
  score?: number
}

const config = {
  healthy: { label: 'Healthy', className: 'bg-emerald-500/15 text-emerald-400' },
  warning: { label: 'Warning', className: 'bg-amber-500/15 text-amber-400' },
  critical: { label: 'Critical', className: 'bg-red-500/15 text-red-400' },
}

export function HealthBadge({ status, score }: HealthBadgeProps) {
  const c = config[status as keyof typeof config] ?? config.warning
  return (
    <span className={cn('inline-flex items-center gap-1 text-xs font-medium rounded px-2 py-0.5', c.className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {score !== undefined ? `${score}` : c.label}
    </span>
  )
}

export function HealthBar({ score }: { score: number }) {
  const color = score >= 80 ? '#22c55e' : score >= 50 ? '#eab308' : '#ef4444'
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${score}%`, backgroundColor: color }} />
      </div>
      <span className="text-xs text-zinc-400 w-8 text-right">{score}</span>
    </div>
  )
}
