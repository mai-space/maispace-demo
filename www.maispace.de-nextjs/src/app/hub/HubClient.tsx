'use client'
import { signOut } from 'next-auth/react'

interface HubUser {
  name?: string | null
  email?: string | null
  image?: string | null
}

// ── Service definitions ─────────────────────────────────────────────────────
const categories = [
  {
    label: 'Deployment',
    color: '#1a3a2a',
    accent: '#4ade80',
    services: [
      { name: 'Dokploy', desc: 'Container & Deployment', url: 'https://deploy.maispace.de', icon: '⬡' },
    ],
  },
  {
    label: 'Sicherheit',
    color: '#1a1a3a',
    accent: '#818cf8',
    services: [
      { name: 'Authentik', desc: 'SSO & Identity', url: 'https://auth.maispace.de', icon: '⬡' },
      { name: 'Vaultwarden', desc: 'Passwort-Manager', url: 'https://vault.maispace.de', icon: '⬡' },
      { name: 'Infisical', desc: 'App Secrets', url: 'https://secrets.maispace.de', icon: '⬡' },
    ],
  },
  {
    label: 'Quellcode & Pakete',
    color: '#2a1a10',
    accent: '#fb923c',
    services: [
      { name: 'GitLab', desc: 'Git & CI/CD', url: 'https://gitlab.maispace.de', icon: '⬡' },
      { name: 'Satis', desc: 'PHP-Pakete', url: 'https://packages.maispace.de', icon: '⬡' },
    ],
  },
  {
    label: 'Monitoring',
    color: '#1a2a2a',
    accent: '#22d3ee',
    services: [
      { name: 'Uptime Kuma', desc: 'Status & Uptime', url: 'https://status.maispace.de', icon: '⬡' },
      { name: 'Grafana', desc: 'Metriken & Logs', url: 'https://grafana.maispace.de', icon: '⬡' },
      { name: 'Sentry', desc: 'Fehler-Tracking', url: 'https://sentry.maispace.de', icon: '⬡' },
    ],
  },
  {
    label: 'Analytics & Wissen',
    color: '#2a1a2a',
    accent: '#e879f9',
    services: [
      { name: 'Matomo', desc: 'Web-Analytics', url: 'https://analytics.maispace.de', icon: '⬡' },
      { name: 'Outline', desc: 'Wissensdatenbank', url: 'https://docs.maispace.de', icon: '⬡' },
    ],
  },
  {
    label: 'Kommunikation',
    color: '#1a2a1a',
    accent: '#86efac',
    services: [
      { name: 'Postal', desc: 'E-Mail Server', url: 'https://mail.maispace.de', icon: '⬡' },
    ],
  },
  {
    label: 'Projekte & Finanzen',
    color: '#2a2a1a',
    accent: '#fde047',
    services: [
      { name: 'Plane', desc: 'Projektmanagement', url: 'https://plane.maispace.de', icon: '⬡' },
      { name: 'Invoice Ninja', desc: 'Rechnungen & Angebote', url: 'https://billing.maispace.de', icon: '⬡' },
    ],
  },
  {
    label: 'Dateien (optional)',
    color: '#1a1e2a',
    accent: '#60a5fa',
    services: [
      { name: 'Nextcloud', desc: 'Dateispeicher', url: 'https://files.maispace.de', icon: '⬡' },
      { name: 'Collabora', desc: 'Dokument-Editor', url: 'https://office.maispace.de', icon: '⬡' },
    ],
  },
]

export default function HubClient({ user }: { user?: HubUser }) {
  const now = new Date()
  const hour = now.getHours()
  const greeting = hour < 12 ? 'Guten Morgen' : hour < 18 ? 'Guten Tag' : 'Guten Abend'
  const firstName = user?.name?.split(' ')[0] ?? 'Team'

  return (
    <div className="min-h-screen bg-ink text-paper" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Top nav */}
      <header className="border-b border-white/10 px-6 h-14 flex items-center justify-between sticky top-0 bg-ink/95 backdrop-blur-sm z-40">
        <div className="flex items-center gap-3">
          <span style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-paper">
            Maispace
          </span>
          <span className="font-mono text-xs text-stone border border-white/10 px-2 py-0.5">
            Hub
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="/"
            className="font-mono text-xs text-stone hover:text-paper transition-colors"
          >
            ← Website
          </a>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-stone hidden sm:block">
              {user?.email}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="font-mono text-xs text-stone hover:text-paper border border-white/10 px-3 py-1.5 hover:border-white/30 transition-colors"
            >
              Abmelden
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Greeting */}
        <div className="mb-12">
          <p className="font-mono text-xs text-stone uppercase tracking-widest2 mb-2">
            {now.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl text-paper">
            {greeting}, {firstName}.
          </h1>
        </div>

        {/* Service grid by category */}
        <div className="space-y-10">
          {categories.map(cat => (
            <div key={cat.label}>
              {/* Category label */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest2 text-stone">
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              {/* Service cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cat.services.map(svc => (
                  <a
                    key={svc.name}
                    href={svc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hub-card group relative border border-white/10 p-4 flex flex-col gap-3"
                    style={{ background: cat.color }}
                  >
                    {/* Accent dot */}
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: cat.accent }}
                    />

                    <div>
                      <p className="font-sans text-sm font-medium text-paper leading-tight">
                        {svc.name}
                      </p>
                      <p className="font-mono text-xs text-stone mt-0.5 leading-tight">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Hover arrow */}
                    <span className="absolute top-3 right-3 font-mono text-xs text-stone/0 group-hover:text-stone/60 transition-colors">
                      ↗
                    </span>

                    {/* URL hint */}
                    <p className="font-mono text-xs text-stone/30 mt-auto truncate">
                      {svc.url.replace('https://', '')}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <p className="font-mono text-xs text-stone/40">
            maispace.de · Intern
          </p>
          <p className="font-mono text-xs text-stone/40">
            {new Date().getFullYear()}
          </p>
        </div>
      </main>
    </div>
  )
}
