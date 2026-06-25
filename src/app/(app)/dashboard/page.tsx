'use client'

import { overviewStats, platformStats, weeklyTrend, campaigns, PLATFORMS } from '@/lib/mock-data'
import { PlatformBadge } from '@/components/app/platform-badge'
import { HealthBadge } from '@/components/app/health-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from 'recharts'
import { TrendingUp, Mail, Reply, AlertTriangle, Inbox, ArrowUpRight, RefreshCw, ShieldAlert } from 'lucide-react'

const stats = [
  { label: 'Total Sent', value: overviewStats.totalSent.toLocaleString(), sub: '+12% vs last month', icon: Mail, positive: true },
  { label: 'Open Rate', value: `${overviewStats.openRate}%`, sub: '+2.1% vs last month', icon: TrendingUp, positive: true },
  { label: 'Reply Rate', value: `${overviewStats.replyRate}%`, sub: '+0.4% vs last month', icon: Reply, positive: true },
  { label: 'Bounce Rate', value: `${overviewStats.bounceRate}%`, sub: '−0.3% vs last month', icon: AlertTriangle, positive: true },
  { label: 'Healthy Inboxes', value: overviewStats.healthyInboxes.toString(), sub: `${overviewStats.criticalInboxes} critical`, icon: Inbox, positive: false },
]

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white tracking-tight">Overview</h1>
          <p className="text-sm text-zinc-600 mt-0.5">All platforms · Last 30 days</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
          <RefreshCw className="w-3.5 h-3.5" />
          Synced 2m ago
        </button>
      </div>

      {/* Reputation block alert */}
      <div className="flex items-start gap-3 bg-red-500/[0.08] border border-red-500/20 rounded-xl p-4">
        <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-medium text-red-300">3 reputation blocks require action</p>
          <p className="text-xs text-red-400/60 mt-0.5">salesedge.io · scalehub.io · pipelinepro.ai — all inboxes on these domains are at risk.</p>
        </div>
        <a href="/bounces" className="text-xs text-red-400 hover:text-red-300 transition-colors shrink-0 font-medium">
          View →
        </a>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-5 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-zinc-900/60 border border-white/[0.06] rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-zinc-600">{s.label}</span>
              <s.icon className="w-3.5 h-3.5 text-zinc-700" />
            </div>
            <p className="text-2xl font-bold text-white tracking-tight">{s.value}</p>
            <p className={`text-xs mt-1.5 ${s.positive ? 'text-emerald-500' : 'text-red-400'}`}>{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Weekly Trend */}
        <div className="col-span-2 bg-zinc-900/60 border border-white/[0.06] rounded-xl p-6">
          <p className="text-sm font-medium text-zinc-300 mb-6">Weekly Send Volume</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff06" />
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#52525b' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#52525b' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#131318', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, fontSize: 12 }}
                labelStyle={{ color: '#a1a1aa' }}
              />
              <Legend wrapperStyle={{ fontSize: 11, color: '#71717a' }} />
              <Line type="monotone" dataKey="sent" stroke="#6366f1" strokeWidth={1.5} dot={false} name="Sent" />
              <Line type="monotone" dataKey="opens" stroke="#22c55e" strokeWidth={1.5} dot={false} name="Opens" />
              <Line type="monotone" dataKey="replies" stroke="#f97316" strokeWidth={1.5} dot={false} name="Replies" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Platform Health */}
        <div className="bg-zinc-900/60 border border-white/[0.06] rounded-xl p-6">
          <p className="text-sm font-medium text-zinc-300 mb-6">Platform Health</p>
          <div className="space-y-5">
            {platformStats.map((p) => {
              const pl = PLATFORMS[p.platform]
              const replyRate = ((p.replies / p.sent) * 100).toFixed(1)
              return (
                <div key={p.platform}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: pl.color }} />
                      <span className="text-sm text-zinc-300">{pl.name}</span>
                    </div>
                    <span className="text-xs text-zinc-600">{replyRate}% reply</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${p.healthScore}%`, backgroundColor: pl.color }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-zinc-700 mt-1.5">
                    <span>{p.sent.toLocaleString()} sent</span>
                    <span>Score {p.healthScore}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="bg-zinc-900/60 border border-white/[0.06] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05]">
          <p className="text-sm font-medium text-zinc-300">Active Campaigns</p>
          <a href="/campaigns" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors flex items-center gap-1">
            View all <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.04]">
              {['Campaign', 'Platform', 'Sent', 'Open %', 'Reply %', 'Bounce %', 'Status'].map((h, i) => (
                <th key={h} className={`py-3 text-xs font-medium text-zinc-600 ${i === 0 ? 'pl-6 text-left' : i === 6 ? 'pr-6 text-right' : 'text-right'}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {campaigns.slice(0, 5).map((c, i) => (
              <tr key={c.id} className={`hover:bg-white/[0.02] transition-colors ${i < 4 ? 'border-b border-white/[0.04]' : ''}`}>
                <td className="pl-6 py-3.5 text-zinc-300 text-sm">{c.name}</td>
                <td className="py-3.5 text-right pr-4"><PlatformBadge platform={c.platform} size="sm" /></td>
                <td className="py-3.5 text-right text-zinc-500 text-xs">{c.sent.toLocaleString()}</td>
                <td className="py-3.5 text-right text-zinc-400 text-xs">{c.openRate}%</td>
                <td className="py-3.5 text-right text-emerald-500 text-xs font-medium">{c.replyRate}%</td>
                <td className={`py-3.5 text-right text-xs font-medium ${c.bounceRate > 4 ? 'text-red-400' : 'text-zinc-500'}`}>{c.bounceRate}%</td>
                <td className="py-3.5 pr-6 text-right">
                  <HealthBadge status={c.status === 'active' ? 'healthy' : c.healthScore < 50 ? 'critical' : 'warning'} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
