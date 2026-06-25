'use client'

import { useState } from 'react'
import { campaigns, PLATFORMS, workspaces } from '@/lib/mock-data'
import { PlatformBadge } from '@/components/app/platform-badge'
import { HealthBadge, HealthBar } from '@/components/app/health-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, TrendingUp, Reply, AlertTriangle, Megaphone } from 'lucide-react'

export default function CampaignsPage() {
  const [platform, setPlatform] = useState('all')
  const [workspace, setWorkspace] = useState('all')

  const filtered = campaigns.filter((c) => {
    if (platform !== 'all' && c.platform !== platform) return false
    if (workspace !== 'all' && c.workspace !== workspace) return false
    return true
  })

  const totals = {
    sent: filtered.reduce((a, c) => a + c.sent, 0),
    replies: filtered.reduce((a, c) => a + c.replies, 0),
    bounces: filtered.reduce((a, c) => a + c.bounces, 0),
    avgReply: filtered.length ? (filtered.reduce((a, c) => a + c.replyRate, 0) / filtered.length).toFixed(1) : '0',
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white">Campaigns</h1>
        <p className="text-sm text-zinc-500 mt-0.5">All campaigns across connected platforms</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Campaigns', value: filtered.length, icon: Megaphone },
          { label: 'Emails Sent', value: totals.sent.toLocaleString(), icon: TrendingUp },
          { label: 'Avg Reply Rate', value: `${totals.avgReply}%`, icon: Reply },
          { label: 'Total Bounces', value: totals.bounces.toLocaleString(), icon: AlertTriangle },
        ].map((s) => (
          <Card key={s.label} className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                <s.icon className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">{s.label}</p>
                <p className="text-lg font-bold text-white">{s.value}</p>
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
            placeholder="Search campaigns..."
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
        <Select value={workspace} onValueChange={(v) => setWorkspace(v ?? 'all')}>
          <SelectTrigger className="w-44 bg-zinc-900 border-zinc-800 text-zinc-300">
            <SelectValue placeholder="All Workspaces" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border-zinc-800">
            <SelectItem value="all">All Workspaces</SelectItem>
            {workspaces.map((w) => (
              <SelectItem key={w.id} value={w.name}>{w.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left p-4 text-xs font-medium text-zinc-500">Campaign</th>
                <th className="text-left p-4 text-xs font-medium text-zinc-500">Platform</th>
                <th className="text-left p-4 text-xs font-medium text-zinc-500">Workspace</th>
                <th className="text-right p-4 text-xs font-medium text-zinc-500">Sent</th>
                <th className="text-right p-4 text-xs font-medium text-zinc-500">Open %</th>
                <th className="text-right p-4 text-xs font-medium text-zinc-500">Reply %</th>
                <th className="text-right p-4 text-xs font-medium text-zinc-500">Bounce %</th>
                <th className="p-4 text-xs font-medium text-zinc-500">Health</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-zinc-800/30 transition-colors cursor-pointer">
                  <td className="p-4">
                    <p className="text-zinc-200 font-medium">{c.name}</p>
                  </td>
                  <td className="p-4"><PlatformBadge platform={c.platform} size="sm" /></td>
                  <td className="p-4 text-zinc-400 text-xs">{c.workspace}</td>
                  <td className="p-4 text-right text-zinc-300">{c.sent.toLocaleString()}</td>
                  <td className="p-4 text-right text-zinc-300">{c.openRate}%</td>
                  <td className="p-4 text-right text-emerald-400 font-medium">{c.replyRate}%</td>
                  <td className={`p-4 text-right font-medium ${c.bounceRate > 4 ? 'text-red-400' : 'text-zinc-300'}`}>
                    {c.bounceRate}%
                  </td>
                  <td className="p-4 w-32">
                    <HealthBar score={c.healthScore} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
