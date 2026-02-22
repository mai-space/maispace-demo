'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/hub')
    }
  }, [status, router])

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-6">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fafaf8 1px, transparent 1px), linear-gradient(90deg, #fafaf8 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 w-full max-w-sm">
        {/* Logo */}
        <div className="mb-12 text-center">
          <p className="font-display text-3xl text-paper mb-1">Maispace</p>
          <p className="font-mono text-xs text-stone tracking-widest2 uppercase">Interner Bereich</p>
        </div>

        {/* Card */}
        <div className="border border-white/10 p-8">
          <h1 className="font-display text-2xl text-paper mb-2">Willkommen zurück</h1>
          <p className="font-sans text-sm text-stone mb-8 leading-relaxed">
            Melden Sie sich mit Ihrem Maispace-Konto an, um auf den Hub zuzugreifen.
          </p>

          <button
            onClick={() => signIn('authentik', { callbackUrl: '/hub' })}
            className="w-full bg-paper text-ink font-sans text-sm py-3.5 flex items-center justify-center gap-3 hover:bg-accent hover:text-paper transition-colors duration-200 group"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
            Mit Authentik anmelden →
          </button>

          <p className="font-mono text-xs text-stone/40 text-center mt-6">
            SSO via auth.maispace.de
          </p>
        </div>

        {/* Back link */}
        <div className="mt-6 text-center">
          <a href="/" className="font-mono text-xs text-stone hover:text-paper transition-colors link-underline">
            ← Zurück zur Website
          </a>
        </div>
      </div>
    </div>
  )
}
