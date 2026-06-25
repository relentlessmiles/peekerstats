'use client'

import { useState } from 'react'
import { inboxes, PLATFORMS, overviewStats } from '@/lib/mock-data'
import { PlatformBadge } from '@/components/app/platform-badge'
import { HealthBadge, HealthBar } from '@/components/app/health-badge'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, CheckCircle2, AlertTriangle, XCircle, Inbox } from 'lucide-react'

const placementColor: Record<string, string> = {
  inbox: 'text-emerald-400',
  promotions: 'text-amber-400',
  spam: 'text-red-400',
}

export default function InboxesPage() {
  const [platform, setPlatform] = useState('all')
  const [status, setStatus] = useState('all')

  const filtered = inboxes.filter((i) => {
    if (platform !== 'all' && i.platform !== platform) return false
    if (status !== 'all' && i.status !== status) return false
    return true
  })

  const healthy = inboxes.filter((i) => i.status === 'healthy').length
  const warning = inboxes.filter((i) => i.status === 'warning').length
  const critical = inboxes.filter((i) => i.status === 'critical').length

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white">Inbox Health</h1>
        <p className="text-sm text-zinc-500 mt-0.5">Monitor deliverability across all sending inboxes</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Inboxes', value: inboxes.length, icon: Inbox, color: 'text-zinc-400' },
          { label: 'Healthy', value: healthy, icon: CheckCircle2, color: 'text-emerald-400' },
          { label: 'Warning', value: warning, icon: AlertTriangle, color: 'text-amber-400' },
          { label: 'Critical', value: critical, icon: XCircle, color: 'text-red-400' },
        ].map((s) => (
          <Card key={s.label} className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-4 flex items-center gap-3">
              <s.icon className={`w-8 h-8 ${s.color}`} />
              <div>
                <p className="text-xs text-zinc-500">{s.label}</p>
                <p className="text-2xl font-bold text-white">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search inboxes or domains..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-md pl-9 pr-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <Select value={platform} onValueChange={(v) => setPlatform(v ?? 'all')}>
          <SelectTrigger className="w-44 bg-zinc-900 border-zinc-800 text-zinc-300">
            <SelectValue placeholder="All Platforms" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border-zinc-800">
            <SelectItem value="all">All Platforms</SelectItem>
            {Object.entries(PLATFORMS).map(([k, v]) => (
              <SelectItem key={k} value={k}>{v.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={status} onValueChange={(v) => setStatus(v ?? 'all')}>
          <SelectTrigger className="w-36 bg-zinc-900 border-zinc-800 text-zinc-300">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border-zinc-800">
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="healthy">Healthy</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left p-4 text-xs font-medium text-zinc-500">Inbox</th>
                <th className="text-left p-4 text-xs font-medium text-zinc-500">Domain</th>
                <th className="text-left p-4 text-xs font-medium text-zinc-500">Platform</th>
                <th className="text-left p-4 text-xs font-medium text-zinc-500">Placement</th>
                <th className="text-right p-4 text-xs font-medium text-zinc-500">Daily Sent</th>
                <th className="text-left p-4 text-xs font-medium text-zinc-500 w-40">Health Score</th>
                <th className="text-left p-4 text-xs font-medium text-zinc-500">Status</th>
                <th className="text-right p-4 text-xs font-medium text-zinc-500">Last Checked</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {filtered.map((inbox) => (
                <tr key={inbox.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="p-4 text-zinc-200 font-mono text-xs">{inbox.email}</td>
                  <td className="p-4 text-zinc-400 text-xs">{inbox.domain}</td>
                  <td className="p-4"><PlatformBadge platform={inbox.platform} size="sm" /></td>
                  <td className={`p-4 text-xs font-medium capitalize ${placementColor[inbox.placement] ?? 'text-zinc-400'}`}>
                    {inbox.placement}
                  </td>
                  <td className="p-4 text-right text-zinc-400">{inbox.sent}/day</td>
                  <td className="p-4 w-40"><HealthBar score={inbox.health} /></td>
                  <td className="p-4"><HealthBadge status={inbox.status} /></td>
                  <td className="p-4 text-right text-zinc-600 text-xs">{inbox.lastChecked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
