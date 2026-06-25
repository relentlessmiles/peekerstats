import Link from 'next/link'
import { Zap, CheckCircle2, ArrowRight, BarChart3, ShieldCheck, Globe, Bell } from 'lucide-react'

const features = [
  { icon: BarChart3, title: 'Unified Analytics', desc: "Campaign performance across EmailBison, Instantly, Smartlead, and Plusvibe in one dashboard." },
  { icon: ShieldCheck, title: 'Bounce Intelligence', desc: "AI-categorized bounces — know instantly if it's a harmless invalid address or a reputation block killing your tenant." },
  { icon: Globe, title: 'Inbox Health Scores', desc: 'Real-time health scoring per inbox and domain. See what is landing in inbox vs spam, by platform.' },
  { icon: Bell, title: 'Real-Time Alerts', desc: 'Get notified the moment a reputation block is detected. Stop sending before the damage spreads.' },
]

const platforms = ['EmailBison', 'Instantly', 'Smartlead', 'Plusvibe']

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-zinc-800/50 px-8 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-sm">PeekerStats</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <Link href="/login" className="hover:text-white transition-colors">Login</Link>
          <Link href="/dashboard" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg transition-colors">
            Try Demo
          </Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-8 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-xs text-indigo-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          Now supporting all 4 major cold email platforms
        </div>
        <h1 className="text-5xl font-bold tracking-tight leading-tight mb-6">
          Cold email analytics that{' '}
          <span className="text-indigo-400">actually spans</span>{' '}
          your whole stack
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          One dashboard for EmailBison, Instantly, Smartlead, and Plusvibe. Unified campaign metrics, inbox health scores, and bounce intelligence — without switching tabs.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            View Demo Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/login" className="text-zinc-400 hover:text-white px-6 py-3 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
            Start Free Trial
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3 mt-12">
          <span className="text-xs text-zinc-600">Works with</span>
          {platforms.map((p) => (
            <span key={p} className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-full">{p}</span>
          ))}
        </div>
      </section>

      <section id="features" className="max-w-5xl mx-auto px-8 py-20 border-t border-zinc-800/50">
        <h2 className="text-2xl font-bold text-center mb-3">Everything InboxAssure does — across all 4 platforms</h2>
        <p className="text-zinc-500 text-center mb-12">InboxAssure only works on EmailBison. PeekerStats works everywhere you do.</p>
        <div className="grid grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="max-w-4xl mx-auto px-8 py-20 border-t border-zinc-800/50">
        <h2 className="text-2xl font-bold text-center mb-3">Simple pricing</h2>
        <p className="text-zinc-500 text-center mb-12">No per-inbox fees. No surprise charges.</p>
        <div className="grid grid-cols-3 gap-6">
          {[
            { name: 'Starter', price: 79, desc: 'Solo operators', features: ['2 workspaces', '200 inboxes', 'All 4 platforms', 'Weekly digests'], highlight: false },
            { name: 'Agency', price: 199, desc: 'Most popular', features: ['Unlimited workspaces', '1,000 inboxes', 'All 4 platforms', 'Real-time alerts', 'Client portal'], highlight: true },
            { name: 'Scale', price: 399, desc: 'High volume agencies', features: ['Unlimited everything', 'Priority sync (1 min)', 'Slack alerts', 'API access', 'Dedicated support'], highlight: false },
          ].map((tier) => (
            <div key={tier.name} className={`rounded-xl p-6 border ${tier.highlight ? 'bg-indigo-600/10 border-indigo-500/30' : 'bg-zinc-900 border-zinc-800'}`}>
              {tier.highlight && (
                <span className="text-[11px] bg-indigo-600 text-white rounded-full px-2.5 py-1 font-medium mb-3 inline-block">Most Popular</span>
              )}
              <h3 className="font-semibold text-white">{tier.name}</h3>
              <p className="text-xs text-zinc-500 mt-0.5 mb-4">{tier.desc}</p>
              <p className="text-3xl font-bold text-white mb-6">${tier.price}<span className="text-sm text-zinc-500 font-normal">/mo</span></p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link href="/login" className={`block text-center text-sm font-medium py-2.5 rounded-lg transition-colors ${tier.highlight ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-800/50 py-8 text-center text-xs text-zinc-600">
        2025 PeekerStats.ai · Built by cold email agencies, for cold email agencies
      </footer>
    </div>
  )
}
