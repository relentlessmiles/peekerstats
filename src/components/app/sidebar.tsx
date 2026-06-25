'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Megaphone, MailCheck, TrendingDown,
  Plug, Users, Settings, ChevronDown, Bell, Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/campaigns', label: 'Campaigns', icon: Megaphone },
  { href: '/inboxes', label: 'Inbox Health', icon: MailCheck },
  { href: '/bounces', label: 'Bounces', icon: TrendingDown },
  { href: '/workspaces', label: 'Workspaces', icon: Users },
  { href: '/connect', label: 'Connect Platforms', icon: Plug },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const path = usePathname()
  return (
    <aside className="w-60 shrink-0 bg-zinc-900 border-r border-zinc-800 flex flex-col h-screen sticky top-0">
      <div className="px-5 py-4 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">PeekerStats</span>
          <span className="ml-auto text-[10px] bg-indigo-900/50 text-indigo-400 rounded px-1.5 py-0.5 font-medium">BETA</span>
        </div>
      </div>

      <div className="px-3 py-3 border-b border-zinc-800">
        <button className="w-full flex items-center gap-2.5 px-2 py-2 rounded-md hover:bg-zinc-800 transition-colors group">
          <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold shrink-0">A</div>
          <span className="text-zinc-300 text-sm flex-1 text-left truncate">Acme Agency</span>
          <ChevronDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-400" />
        </button>
      </div>

      <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
        {nav.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm transition-colors',
              path === href || path.startsWith(href + '/')
                ? 'bg-indigo-600/15 text-indigo-400 font-medium'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
            )}
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
            {href === '/bounces' && (
              <span className="ml-auto bg-red-500/20 text-red-400 text-[10px] rounded px-1.5 py-0.5 font-medium">3</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="px-3 py-3 border-t border-zinc-800">
        <div className="flex items-center gap-2 px-2">
          <div className="w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-zinc-200 font-medium shrink-0">M</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-zinc-300 truncate">miles@leadstatic.com</p>
            <p className="text-[10px] text-zinc-500">Agency Admin</p>
          </div>
          <button className="relative">
            <Bell className="w-4 h-4 text-zinc-500 hover:text-zinc-300 transition-colors" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>
    </aside>
  )
}
