import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-mist px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg text-ink">Maispace</span>

        <p className="font-mono text-xs text-stone text-center">
          © {new Date().getFullYear()} Maispace · Ihr technischer Berater · Deutschland
        </p>

        <div className="flex items-center gap-6">
          <Link href="/impressum" className="font-mono text-xs text-stone hover:text-ink transition-colors link-underline">
            Impressum
          </Link>
          <Link href="/datenschutz" className="font-mono text-xs text-stone hover:text-ink transition-colors link-underline">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  )
}
