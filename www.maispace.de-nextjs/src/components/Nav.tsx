'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#projekte', label: 'Projekte' },
    { href: '#ueber-uns', label: 'Über uns' },
    { href: '/artikel', label: 'Artikel' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-paper/95 backdrop-blur-sm border-b border-mist' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-xl tracking-tight text-ink">
          Maispace
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              {l.href.startsWith('/') ? (
                <Link
                  href={l.href}
                  className="font-sans text-sm tracking-wide text-stone hover:text-ink transition-colors link-underline"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  className="font-sans text-sm tracking-wide text-stone hover:text-ink transition-colors link-underline"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#kontakt"
            className="font-sans text-sm bg-ink text-paper px-4 py-2 hover:bg-accent transition-colors duration-200"
          >
            Projekt starten →
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          <span className={`block w-5 h-px bg-ink transition-all duration-300 ${open ? 'rotate-45 translate-y-[9px]' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-paper border-t border-mist px-6 py-6 flex flex-col gap-4">
          {links.map(l =>
            l.href.startsWith('/') ? (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-base text-stone hover:text-ink transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-base text-stone hover:text-ink transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            )
          )}
          <a
            href="#kontakt"
            className="font-sans text-sm bg-ink text-paper px-4 py-2 text-center mt-2 hover:bg-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            Projekt starten →
          </a>
        </div>
      </div>
    </header>
  )
}
