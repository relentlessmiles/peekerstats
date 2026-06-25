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
  { href: '/bounces', label: 'Bounces', icon: TrendingDown, alert: 3 },
  { href: '/workspaces', label: 'Workspaces', icon: Users },
  { href: '/connect', label: 'Connect', icon: Plug },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const path = usePathname()
  return (
    <aside className="w-56 shrink-0 bg-[#0d0d12] border-r border-white/[0.06] flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="px-5 py-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
            <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">PeekerStats</span>
        </div>
      </div>

      {/* Workspace switcher */}
      <div className="px-3 mb-2">
        <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-white/[0.04] transition-colors group">
          <div className="w-5 h-5 rounded-md bg-indigo-600/80 flex items-center justify-center text-[9px] text-white font-bold shrink-0">A</div>
          <span className="text-zinc-300 text-sm flex-1 text-left truncate">Acme Agency</span>
          <ChevronDown className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
        </button>
      </div>

      <div className="mx-4 h-px bg-white/[0.05] mb-2" />

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto py-1">
        {nav.map(({ href, label, icon: Icon, alert }) => {
          const active = path === href || path.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] transition-all duration-150',
                active
                  ? 'bg-white/[0.07] text-white font-medium'
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.04]'
              )}
            >
              <Icon className={cn('w-4 h-4 shrink-0', active ? 'text-white' : 'text-zinc-600')} />
              {label}
              {alert && (
                <span className="ml-auto bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shrink-0">
                  {alert}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="mx-4 h-px bg-white/[0.05]" />

      {/* User */}
      <div className="px-3 py-4">
        <div className="flex items-center gap-2.5 px-2.5">
          <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[11px] text-zinc-300 font-medium shrink-0">M</div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] text-zinc-400 truncate leading-tight">miles@leadstatic.com</p>
            <p className="text-[10px] text-zinc-700 leading-tight mt-0.5">Agency Admin</p>
          </div>
          <button className="relative shrink-0">
            <Bell className="w-3.5 h-3.5 text-zinc-600 hover:text-zinc-400 transition-colors" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>
    </aside>
  )
}
