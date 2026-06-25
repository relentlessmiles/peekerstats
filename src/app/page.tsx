import Link from 'next/link'
import { Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

const platforms = [
  { name: 'EmailBison', color: '#f97316' },
  { name: 'Instantly', color: '#3b82f6' },
  { name: 'Smartlead', color: '#22c55e' },
  { name: 'Plusvibe', color: '#a855f7' },
]

const pain = [
  {
    stat: '3–9 days',
    claim: 'The average time between a reputation block and an agency noticing.',
    context: 'Your emails stopped landing in inboxes on Tuesday. Your client calls Friday asking why results dropped.',
  },
  {
    stat: '$4,200',
    claim: 'Average monthly revenue lost to deliverability problems agencies never saw coming.',
    context: 'Not because the list was bad. Not because the copy failed. Because an inbox went to spam and nobody knew.',
  },
  {
    stat: '1 block',
    claim: 'One reputation block can take down every domain in your tenant.',
    context: 'You are running EmailBison and Instantly and Smartlead. A block on one platform cascades silently to the rest.',
  },
]

const features = [
  {
    label: 'Bounce Intelligence',
    headline: 'Not all bounces are equal. Most tools treat them like they are.',
    body: 'An invalid address is noise. A reputation block is a five-alarm fire. PeekerStats categorizes every bounce across all four platforms and surfaces the ones that require immediate action — before your whole tenant goes dark.',
  },
  {
    label: 'Inbox Health',
    headline: 'Every inbox has a health score. You should probably know what it is.',
    body: 'Real-time health scoring per inbox and domain, across every connected platform. See what is landing in inbox, promotions, or spam — and exactly which campaigns are causing the problem.',
  },
  {
    label: 'Unified Dashboard',
    headline: 'Four platforms. Four dashboards. One complete blind spot.',
    body: 'Your Plusvibe account has been going to spam for six days. Your Instantly campaigns look fine. These two facts are connected. PeekerStats is the only tool that shows you both at the same time.',
  },
  {
    label: 'Real-Time Alerts',
    headline: 'The moment a reputation block hits, you know. Not your client.',
    body: 'Instant alerts the moment a sending domain crosses into dangerous territory. Stop the bleeding before the client calls. Stop the client calls before they become churned clients.',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 border-b border-white/5 bg-[#09090b]/90 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-sm tracking-tight">PeekerStats</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
            <a href="#problem" className="hover:text-white transition-colors duration-200">Why it exists</a>
            <a href="#features" className="hover:text-white transition-colors duration-200">What it does</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
              Sign in
            </Link>
            <Link href="/dashboard" className="flex items-center gap-1.5 bg-white text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-zinc-100 transition-colors duration-200">
              See the demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-8 max-w-5xl mx-auto text-center">
        {/* Subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-zinc-400 mb-10 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now live across all 4 major cold email platforms
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-8 max-w-4xl mx-auto">
            By the time you notice
            <br />
            <span className="text-zinc-500">the reply rates drop,</span>
            <br />
            the damage is done.
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
            PeekerStats monitors every inbox across EmailBison, Instantly, Smartlead, and Plusvibe — and tells you exactly what to fix before clients start calling.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3.5 rounded-xl font-medium transition-colors duration-200 text-sm">
              See my inbox health now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/login" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200 px-4 py-3.5">
              Start free — no card required
            </Link>
          </div>

          {/* Platform pills */}
          <div className="flex items-center justify-center gap-2 mt-16">
            <span className="text-xs text-zinc-700 mr-2">Connects with</span>
            {platforms.map((p) => (
              <div key={p.name} className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                <span className="text-xs text-zinc-400">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini dashboard preview */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/50 overflow-hidden shadow-2xl shadow-black/50">
          <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-white/5 bg-white/[0.02]">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="ml-3 text-xs text-zinc-600">peekerstats.ai/dashboard</span>
          </div>
          <div className="grid grid-cols-5 divide-x divide-white/5">
            {[
              { label: 'Sent (30d)', value: '142,830', sub: '+12% vs last month', positive: true },
              { label: 'Open Rate', value: '34.2%', sub: '+2.1% vs last month', positive: true },
              { label: 'Reply Rate', value: '8.7%', sub: '+0.4% vs last month', positive: true },
              { label: 'Bounce Rate', value: '2.1%', sub: '−0.3% vs last month', positive: true },
              { label: 'Reputation Blocks', value: '3', sub: 'Action required', positive: false },
            ].map((metric) => (
              <div key={metric.label} className="px-6 py-5">
                <p className="text-xs text-zinc-600 mb-1">{metric.label}</p>
                <p className={`text-2xl font-bold ${metric.positive && metric.label === 'Reputation Blocks' ? '' : 'text-white'} ${!metric.positive ? 'text-red-400' : 'text-white'}`}>
                  {metric.value}
                </p>
                <p className={`text-xs mt-1 ${metric.positive ? 'text-emerald-500' : 'text-red-500'}`}>{metric.sub}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 divide-x divide-white/5 border-t border-white/5">
            {platforms.map((p) => (
              <div key={p.name} className="px-6 py-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-zinc-400">{p.name}</p>
                  <div className="h-1 bg-zinc-800 rounded-full mt-1.5 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${[94, 88, 91, 76][platforms.indexOf(p)]}%`, backgroundColor: p.color }} />
                  </div>
                </div>
                <span className="text-xs text-zinc-600 shrink-0">{[94, 88, 91, 76][platforms.indexOf(p)]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="max-w-5xl mx-auto px-8 py-32 border-t border-white/5">
        <div className="max-w-xl mb-20">
          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">The real cost of flying blind</p>
          <h2 className="text-4xl font-bold tracking-tight leading-tight mb-6">
            Your deliverability is already broken.
            <span className="text-zinc-500"> You just don&apos;t know it yet.</span>
          </h2>
          <p className="text-zinc-500 leading-relaxed">
            Cold email agencies don&apos;t fail because the copy was bad. They fail because the infrastructure collapsed silently — and nobody had the visibility to catch it.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {pain.map((p) => (
            <div key={p.stat} className="bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-8">
              <p className="text-4xl font-bold text-white mb-4">{p.stat}</p>
              <p className="text-sm font-medium text-zinc-300 mb-3 leading-snug">{p.claim}</p>
              <p className="text-sm text-zinc-600 leading-relaxed">{p.context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-8 py-32 border-t border-white/5">
        <div className="max-w-xl mb-20">
          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">What PeekerStats does</p>
          <h2 className="text-4xl font-bold tracking-tight leading-tight">
            The visibility layer
            <span className="text-zinc-500"> your stack is missing.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {features.map((f, i) => (
            <div key={f.label} className="group grid grid-cols-12 gap-8 bg-zinc-900/30 hover:bg-zinc-900/60 border border-white/[0.06] hover:border-white/10 rounded-2xl p-8 transition-all duration-300 cursor-pointer">
              <div className="col-span-1 flex items-start pt-0.5">
                <span className="text-xs text-zinc-700 font-mono">0{i + 1}</span>
              </div>
              <div className="col-span-3">
                <span className="text-xs text-indigo-400 font-medium tracking-wide">{f.label}</span>
              </div>
              <div className="col-span-4">
                <p className="text-sm font-medium text-white leading-snug">{f.headline}</p>
              </div>
              <div className="col-span-4">
                <p className="text-sm text-zinc-500 leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiator callout */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-12 text-center">
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4">The thing nobody else does</p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            InboxAssure only works on EmailBison.
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            If you run more than one platform — and every serious agency does — you have been flying partially blind. PeekerStats is the only tool built for how agencies actually operate: across multiple platforms, simultaneously.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-8 py-32 border-t border-white/5">
        <div className="max-w-xl mb-20">
          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl font-bold tracking-tight leading-tight mb-4">
            Stop losing clients to problems
            <span className="text-zinc-500"> you didn&apos;t know existed.</span>
          </h2>
          <p className="text-zinc-500">No per-inbox fees. No per-platform fees. No surprise charges.</p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {[
            {
              name: 'Starter',
              price: 79,
              desc: 'For solo operators and small teams running one or two platforms.',
              features: ['2 workspaces', '200 inboxes monitored', 'All 4 platforms', 'Daily digest alerts', '5-minute sync'],
              highlight: false,
            },
            {
              name: 'Agency',
              price: 199,
              desc: 'For agencies managing multiple clients across multiple platforms.',
              features: ['Unlimited workspaces', '1,000 inboxes monitored', 'All 4 platforms', 'Real-time reputation alerts', 'Client-facing reports', '1-minute sync'],
              highlight: true,
            },
            {
              name: 'Scale',
              price: 399,
              desc: 'For high-volume operations where a single miss costs more than this.',
              features: ['Unlimited everything', 'Priority 30-second sync', 'Slack & webhook alerts', 'API access', 'Dedicated onboarding'],
              highlight: false,
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 border flex flex-col ${tier.highlight
                ? 'bg-indigo-600/10 border-indigo-500/25'
                : 'bg-zinc-900/50 border-white/[0.06]'
              }`}
            >
              {tier.highlight && (
                <span className="text-xs bg-indigo-600 text-white rounded-full px-3 py-1 font-medium mb-5 self-start">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white mb-1">{tier.name}</h3>
              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">{tier.desc}</p>
              <p className="text-4xl font-bold text-white mb-8">
                ${tier.price}
                <span className="text-base text-zinc-600 font-normal">/mo</span>
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/login"
                className={`block text-center text-sm font-medium py-3 rounded-xl transition-colors duration-200 ${tier.highlight
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                  : 'bg-white/[0.06] hover:bg-white/10 text-zinc-300'
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-8 py-32 text-center border-t border-white/5">
        <h2 className="text-5xl font-bold tracking-tighter mb-6">
          Your inboxes are talking.
          <br />
          <span className="text-zinc-600">Are you listening?</span>
        </h2>
        <p className="text-zinc-500 mb-10 text-lg">
          Every day without visibility is another day a reputation block could be silently killing your campaigns.
        </p>
        <Link href="/dashboard" className="inline-flex items-center gap-2 bg-white text-black font-medium px-8 py-4 rounded-xl hover:bg-zinc-100 transition-colors duration-200">
          See the live demo
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <footer className="border-t border-white/5 py-10 px-8 max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
            <Zap className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm text-zinc-600">PeekerStats.ai</span>
        </div>
        <p className="text-xs text-zinc-700">Built for cold email agencies. By a cold email agency.</p>
        <div className="flex items-center gap-6 text-xs text-zinc-700">
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
          <a href="mailto:miles@leadstatic.com" className="hover:text-zinc-400 transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  )
}
