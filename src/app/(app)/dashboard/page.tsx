'use client'

import { overviewStats, platformStats, weeklyTrend, campaigns, PLATFORMS } from '@/lib/mock-data'
import { PlatformBadge } from '@/components/app/platform-badge'
import { HealthBadge } from '@/components/app/health-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from 'recharts'
import { TrendingUp, Mail, Reply, AlertTriangle, Inbox, ArrowUpRight, RefreshCw } from 'lucide-react'

const stats = [
  { label: 'Total Sent (30d)', value: overviewStats.totalSent.toLocaleString(), icon: Mail, change: '+12%', up: true },
  { label: 'Open Rate', value: `${overviewStats.openRate}%`, icon: TrendingUp, change: '+2.1%', up: true },
  { label: 'Reply Rate', value: `${overviewStats.replyRate}%`, icon: Reply, change: '+0.4%', up: true },
  { label: 'Bounce Rate', value: `${overviewStats.bounceRate}%`, icon: AlertTriangle, change: '-0.3%', up: true },
  { label: 'Healthy Inboxes', value: `${overviewStats.healthyInboxes}`, icon: Inbox, change: `${overviewStats.criticalInboxes} critical`, up: false },
]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">Dashboard</h1>
          <p className="text-sm text-zinc-500 mt-0.5">All platforms · Last 30 days</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
          <RefreshCw className="w-3.5 h-3.5" />
          Synced 2m ago
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-5 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-zinc-500">{s.label}</span>
                <s.icon className="w-4 h-4 text-zinc-600" />
              </div>
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className={`text-xs mt-1 ${s.up ? 'text-emerald-400' : 'text-red-400'}`}>{s.change} vs last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Weekly Trend */}
        <Card className="col-span-2 bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-zinc-300">Weekly Send Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: 8, fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="sent" stroke="#6366f1" strokeWidth={2} dot={false} name="Sent" />
                <Line type="monotone" dataKey="opens" stroke="#22c55e" strokeWidth={2} dot={false} name="Opens" />
                <Line type="monotone" dataKey="replies" stroke="#f97316" strokeWidth={2} dot={false} name="Replies" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Platform Breakdown */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-zinc-300">Platform Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {platformStats.map((p) => {
              const pl = PLATFORMS[p.platform]
              const replyRate = ((p.replies / p.sent) * 100).toFixed(1)
              return (
                <div key={p.platform} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pl.color }} />
                      <span className="text-sm text-zinc-300">{pl.name}</span>
                    </div>
                    <span className="text-xs text-zinc-500">{replyRate}% reply</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${p.healthScore}%`, backgroundColor: pl.color }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-zinc-600">
                    <span>{p.sent.toLocaleString()} sent</span>
                    <span>Health {p.healthScore}</span>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      {/* Recent Campaigns */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium text-zinc-300">Active Campaigns</CardTitle>
          <a href="/campaigns" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
            View all <ArrowUpRight className="w-3 h-3" />
          </a>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left pb-2 text-xs font-medium text-zinc-500">Campaign</th>
                <th className="text-left pb-2 text-xs font-medium text-zinc-500">Platform</th>
                <th className="text-right pb-2 text-xs font-medium text-zinc-500">Sent</th>
                <th className="text-right pb-2 text-xs font-medium text-zinc-500">Open %</th>
                <th className="text-right pb-2 text-xs font-medium text-zinc-500">Reply %</th>
                <th className="text-right pb-2 text-xs font-medium text-zinc-500">Bounce %</th>
                <th className="text-right pb-2 text-xs font-medium text-zinc-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {campaigns.slice(0, 5).map((c) => (
                <tr key={c.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="py-2.5 text-zinc-200">{c.name}</td>
                  <td className="py-2.5"><PlatformBadge platform={c.platform} size="sm" /></td>
                  <td className="py-2.5 text-right text-zinc-400">{c.sent.toLocaleString()}</td>
                  <td className="py-2.5 text-right text-zinc-300">{c.openRate}%</td>
                  <td className="py-2.5 text-right text-zinc-300">{c.replyRate}%</td>
                  <td className={`py-2.5 text-right ${c.bounceRate > 4 ? 'text-red-400' : 'text-zinc-300'}`}>{c.bounceRate}%</td>
                  <td className="py-2.5 text-right">
                    <HealthBadge status={c.status === 'active' ? 'healthy' : c.healthScore < 50 ? 'critical' : 'warning'} />
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
