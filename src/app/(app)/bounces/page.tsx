'use client'

import { bounceData, PLATFORMS } from '@/lib/mock-data'
import { PlatformBadge } from '@/components/app/platform-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, Legend, Cell
} from 'recharts'
import { AlertOctagon, AlertTriangle, ShieldAlert } from 'lucide-react'

export default function BouncesPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white">Bounce Analytics</h1>
        <p className="text-sm text-zinc-500 mt-0.5">Categorized bounce intelligence across all platforms</p>
      </div>

      {/* Critical alert */}
      <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
        <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-red-300">3 Reputation Blocks Detected</p>
          <p className="text-xs text-red-400/70 mt-0.5">
            salesedge.io, scalehub.io, and pipelinepro.ai are experiencing reputation-based bounces. These require immediate action — your entire sending tenant may be at risk.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4">
            <p className="text-xs text-zinc-500 mb-1">Total Bounces (30d)</p>
            <p className="text-2xl font-bold text-white">{bounceData.total.toLocaleString()}</p>
            <p className="text-xs text-zinc-500 mt-1">2.1% of all sends</p>
          </CardContent>
        </Card>
        <Card className="bg-red-500/10 border-red-500/20">
          <CardContent className="p-4">
            <p className="text-xs text-red-400/70 mb-1">Reputation Blocks</p>
            <p className="text-2xl font-bold text-red-400">{bounceData.categories.find(c => c.name === 'Reputation Block')?.count}</p>
            <p className="text-xs text-red-400/70 mt-1">10% of bounces · High risk</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4">
            <p className="text-xs text-zinc-500 mb-1">Invalid Address</p>
            <p className="text-2xl font-bold text-white">{bounceData.categories.find(c => c.name === 'Invalid Address')?.count}</p>
            <p className="text-xs text-emerald-500 mt-1">60% of bounces · Normal</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Bounce Categories */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-zinc-300">Bounce Type Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {bounceData.categories.map((cat) => (
              <div key={cat.name} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span className="text-sm text-zinc-300">{cat.name}</span>
                    {cat.risk === 'critical' && <AlertOctagon className="w-3.5 h-3.5 text-red-400" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500">{cat.count}</span>
                    <span className="text-xs text-zinc-400 w-8 text-right">{cat.pct}%</span>
                  </div>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${cat.pct}%`, backgroundColor: cat.color }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Trend */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-zinc-300">Weekly Bounce Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={bounceData.weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: 8, fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="total" stroke="#71717a" strokeWidth={2} dot={false} name="Total Bounces" />
                <Line type="monotone" dataKey="reputation" stroke="#ef4444" strokeWidth={2} dot={false} name="Reputation Blocks" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* By Platform */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-zinc-300">Bounces by Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={bounceData.byPlatform.map(p => ({ ...p, name: PLATFORMS[p.platform]?.short }))}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#71717a' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: 8, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="invalid" stackId="a" fill="#22c55e" name="Invalid" radius={[0, 0, 0, 0]} />
              <Bar dataKey="full" stackId="a" fill="#84cc16" name="Mailbox Full" />
              <Bar dataKey="domain" stackId="a" fill="#eab308" name="Domain Not Found" />
              <Bar dataKey="reputation" stackId="a" fill="#ef4444" name="Reputation Block" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Reputation Block Detail */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-red-400 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Active Reputation Blocks — Action Required
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left p-4 text-xs font-medium text-zinc-500">Domain</th>
                <th className="text-left p-4 text-xs font-medium text-zinc-500">Platform</th>
                <th className="text-left p-4 text-xs font-medium text-zinc-500">Campaign</th>
                <th className="text-right p-4 text-xs font-medium text-zinc-500">Affected Inboxes</th>
                <th className="text-right p-4 text-xs font-medium text-zinc-500">Detected</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {bounceData.reputationBlocks.map((b, i) => (
                <tr key={i} className="hover:bg-zinc-800/30">
                  <td className="p-4 font-mono text-xs text-red-300">{b.domain}</td>
                  <td className="p-4"><PlatformBadge platform={b.platform} size="sm" /></td>
                  <td className="p-4 text-zinc-400 text-xs">{b.campaign}</td>
                  <td className="p-4 text-right text-red-400 font-medium">{b.affectedInboxes}</td>
                  <td className="p-4 text-right text-zinc-500 text-xs">{b.blocked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
