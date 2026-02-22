export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 overflow-hidden">
      {/* Large background index number */}
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[22vw] leading-none text-mist select-none pointer-events-none"
        aria-hidden="true"
      >
        01
      </span>

      {/* Thin horizontal rule — animated */}
      <div className="max-w-6xl mx-auto w-full mb-16">
        <div className="w-full h-px bg-mist animate-line-grow" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-y-12 items-end">
        {/* Main headline */}
        <div className="md:col-span-8">
          <p className="font-mono text-xs tracking-widest2 text-stone uppercase mb-6 animate-fade-up delay-100">
            Freiberuflicher Entwickler &amp; Berater
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-ink animate-fade-up delay-200">
            Maßge&shy;schneiderte<br />
            Web&shy;lösungen,<br />
            <span className="italic text-stone">die funktionieren.</span>
          </h1>
        </div>

        {/* Side descriptor */}
        <div className="md:col-span-4 md:pl-8 animate-fade-up delay-400">
          <p className="font-sans text-base text-stone leading-relaxed max-w-sm">
            Ich entwickle individuelle Weblösungen mit TYPO3, Laravel und Next.js — und berate Sie in den Bereichen UI/UX und Software-Architektur.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <a
              href="#leistungen"
              className="font-sans text-sm text-ink link-underline"
            >
              Leistungen entdecken
            </a>
            <span className="text-mist">—</span>
            <a
              href="#kontakt"
              className="font-sans text-sm bg-ink text-paper px-5 py-2.5 hover:bg-accent transition-colors duration-200"
            >
              Kontakt →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="max-w-6xl mx-auto w-full mt-20 animate-fade-up delay-600">
        <div className="w-full h-px bg-mist mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: '10+', label: 'Jahre Erfahrung' },
            { n: '40+', label: 'Projekte realisiert' },
            { n: '3', label: 'CMS & Frameworks' },
            { n: 'DE', label: 'Standort' },
          ].map(stat => (
            <div key={stat.n}>
              <p className="font-display text-3xl text-ink">{stat.n}</p>
              <p className="font-mono text-xs text-stone mt-1 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
