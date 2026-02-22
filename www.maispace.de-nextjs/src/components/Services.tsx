const services = [
  {
    index: '01',
    title: 'Webentwicklung',
    description: 'Performante, moderne Webanwendungen mit Next.js, React und Laravel. Vom MVP bis zur skalierbaren Plattform.',
    tags: ['Next.js', 'React', 'Laravel', 'TypeScript'],
  },
  {
    index: '02',
    title: 'Cloud-Infrastruktur',
    description: 'Aufbau und Betrieb von Server-Infrastruktur auf deutschen Servern. Docker, CI/CD, Monitoring und automatisierte Backups.',
    tags: ['Docker', 'Hetzner', 'CI/CD', 'Monitoring'],
  },
  {
    index: '03',
    title: 'Technische Beratung',
    description: 'Architekturentscheidungen, Technologie-Evaluierung und Roadmap-Planung für Ihr digitales Produkt.',
    tags: ['Architektur', 'Audit', 'Roadmap'],
  },
  {
    index: '04',
    title: 'API & Integrationen',
    description: 'REST- und GraphQL-APIs, Drittanbieter-Integrationen und Daten-Pipelines zwischen Ihren Systemen.',
    tags: ['REST', 'GraphQL', 'Webhooks', 'ETL'],
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="py-32 px-6 bg-ink text-paper">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-xs tracking-widest2 text-stone uppercase mb-4">
              Leistungen
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-tight">
              Was wir<br />
              <span className="italic text-stone">für Sie tun.</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <span className="font-display text-8xl text-white/5 select-none">02</span>
          </div>
        </div>

        {/* Service list */}
        <div className="divide-y divide-white/10">
          {services.map((s, i) => (
            <div
              key={s.index}
              className="group py-8 grid md:grid-cols-12 gap-6 items-start cursor-default"
            >
              <div className="md:col-span-1">
                <span className="font-mono text-xs text-stone">{s.index}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl text-paper group-hover:text-stone transition-colors duration-300">
                  {s.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="font-sans text-sm text-stone leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-2 justify-end">
                {s.tags.map(t => (
                  <span
                    key={t}
                    className="font-mono text-xs text-stone/70 border border-white/10 px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
