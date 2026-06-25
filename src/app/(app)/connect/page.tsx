'use client'

import { useState } from 'react'
import { PLATFORMS } from '@/lib/mock-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Link2, AlertCircle, Eye, EyeOff, RefreshCw } from 'lucide-react'

const connections = {
  emailbison: { connected: true, key: 'eb_live_••••••••••••3f2a', workspaces: 3, lastSync: '2m ago' },
  instantly: { connected: true, key: 'inst_••••••••••••9c1d', workspaces: 2, lastSync: '5m ago' },
  smartlead: { connected: true, key: 'sl_••••••••••••7e4b', workspaces: 1, lastSync: '3m ago' },
  plusvibe: { connected: false, key: '', workspaces: 0, lastSync: null },
}

export default function ConnectPage() {
  const [showKey, setShowKey] = useState<string | null>(null)
  const [pvKey, setPvKey] = useState('')

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white">Connect Platforms</h1>
        <p className="text-sm text-zinc-500 mt-0.5">Connect your cold email platforms via API key to start syncing data</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {Object.entries(PLATFORMS).map(([key, platform]) => {
          const conn = connections[key as keyof typeof connections]
          return (
            <Card key={key} className={`bg-zinc-900 border-zinc-800 ${conn.connected ? 'border-l-2' : ''}`}
              style={conn.connected ? { borderLeftColor: platform.color } : {}}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                      style={{ backgroundColor: `${platform.color}25`, color: platform.color }}
                    >
                      {platform.short}
                    </div>
                    <div>
                      <CardTitle className="text-sm text-white">{platform.name}</CardTitle>
                      {conn.connected && (
                        <p className="text-[11px] text-zinc-500 mt-0.5">{conn.workspaces} workspaces syncing</p>
                      )}
                    </div>
                  </div>
                  {conn.connected ? (
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      Connected
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <AlertCircle className="w-4 h-4" />
                      Not connected
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {conn.connected ? (
                  <>
                    <div>
                      <label className="text-xs text-zinc-500 mb-1.5 block">API Key</label>
                      <div className="flex items-center gap-2 bg-zinc-800 rounded-md px-3 py-2 border border-zinc-700">
                        <span className="flex-1 text-xs font-mono text-zinc-400">
                          {showKey === key ? 'eb_live_sk_real_key_would_show_here' : conn.key}
                        </span>
                        <button onClick={() => setShowKey(showKey === key ? null : key)} className="text-zinc-600 hover:text-zinc-400 transition-colors">
                          {showKey === key ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] text-zinc-600">Last synced {conn.lastSync}</p>
                      <div className="flex gap-2">
                        <button className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
                          <RefreshCw className="w-3.5 h-3.5" /> Sync now
                        </button>
                        <button className="text-xs text-red-400 hover:text-red-300 transition-colors">Disconnect</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="text-xs text-zinc-500 mb-1.5 block">API Key</label>
                      <input
                        type="text"
                        value={pvKey}
                        onChange={(e) => setPvKey(e.target.value)}
                        placeholder={`Paste your ${platform.name} API key...`}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-xs font-mono text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                        <Link2 className="w-3 h-3" /> Where to find your API key
                      </a>
                      <button
                        className="text-xs font-medium px-3 py-1.5 rounded-md transition-colors"
                        style={{ backgroundColor: platform.color, color: 'white' }}
                      >
                        Connect {platform.name}
                      </button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-zinc-900/50 border-zinc-800 border-dashed">
        <CardContent className="p-6 text-center">
          <p className="text-sm text-zinc-500">More platforms coming soon</p>
          <p className="text-xs text-zinc-600 mt-1">Apollo, Lemlist, Reply.io, Salesloft</p>
        </CardContent>
      </Card>
    </div>
  )
}
