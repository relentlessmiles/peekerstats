import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-semibold">PeekerStats</span>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
          <h1 className="text-xl font-semibold text-white mb-1">Welcome back</h1>
          <p className="text-sm text-zinc-500 mb-6">Sign in to your account</p>

          <div className="space-y-4">
            <div>
              <label className="text-xs text-zinc-500 block mb-1.5">Email</label>
              <input
                type="email"
                placeholder="you@agency.com"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2.5 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs text-zinc-500">Password</label>
                <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300">Forgot password?</a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2.5 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <Link href="/dashboard" className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors mt-2">
              Sign In
            </Link>
          </div>

          <p className="text-xs text-zinc-600 text-center mt-6">
            No account?{' '}
            <a href="#" className="text-indigo-400 hover:text-indigo-300">Start free trial</a>
          </p>
        </div>
      </div>
    </div>
  )
}
