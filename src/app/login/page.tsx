import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-6">
      <div className="w-full max-w-[360px]">
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white font-semibold tracking-tight">PeekerStats</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white tracking-tight mb-2">Welcome back</h1>
          <p className="text-sm text-zinc-500">Sign in to your workspace</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs text-zinc-500 mb-2">Email address</label>
            <input
              type="email"
              placeholder="you@agency.com"
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none transition-colors duration-200"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs text-zinc-500">Password</label>
              <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot?</a>
            </div>
            <input
              type="password"
              placeholder="••••••••••"
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none transition-colors duration-200"
            />
          </div>

          <Link
            href="/dashboard"
            className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-3 rounded-xl transition-colors duration-200 mt-2"
          >
            Sign in
          </Link>
        </div>

        <p className="text-xs text-zinc-600 text-center mt-8">
          No account?{' '}
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">Start your free trial</a>
        </p>

        <p className="text-[11px] text-zinc-800 text-center mt-12 leading-relaxed">
          By signing in, you agree to our{' '}
          <a href="#" className="text-zinc-700 hover:text-zinc-500 transition-colors">Terms</a>
          {' '}and{' '}
          <a href="#" className="text-zinc-700 hover:text-zinc-500 transition-colors">Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}
