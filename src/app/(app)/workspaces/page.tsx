'use client'

import { workspaces, PLATFORMS } from '@/lib/mock-data'
import { HealthBadge, HealthBar } from '@/components/app/health-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PlatformBadge } from '@/components/app/platform-badge'
import { Plus, Users, Building2, Inbox } from 'lucide-react'

export default function WorkspacesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">Workspaces</h1>
          <p className="text-sm text-zinc-500 mt-0.5">Manage your client accounts and their platform connections</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          Add Workspace
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total Workspaces', value: workspaces.length, icon: Building2 },
          { label: 'Total Clients', value: workspaces.reduce((a, w) => a + w.clients, 0), icon: Users },
          { label: 'Total Inboxes', value: workspaces.reduce((a, w) => a + w.inboxes, 0), icon: Inbox },
        ].map((s) => (
          <Card key={s.label} className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                <s.icon className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">{s.label}</p>
                <p className="text-xl font-bold text-white">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Workspace Cards */}
      <div className="grid grid-cols-1 gap-3">
        {workspaces.map((w) => (
          <Card key={w.id} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-zinc-300">{w.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium text-white">{w.name}</p>
                    <HealthBadge status={w.status} />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <span>{w.clients} {w.clients === 1 ? 'client' : 'clients'}</span>
                    <span>{w.inboxes} inboxes</span>
                    <div className="flex items-center gap-1">
                      {w.platforms.map((p) => (
                        <PlatformBadge key={p} platform={p} size="sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-32 shrink-0">
                  <p className="text-[10px] text-zinc-600 mb-1">Health Score</p>
                  <HealthBar score={w.healthScore} />
                </div>
                <div className="shrink-0">
                  <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                    Manage →
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
