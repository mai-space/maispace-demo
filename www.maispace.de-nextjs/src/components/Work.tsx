const projects = [
  {
    index: '01',
    client: 'Einzelhandel GmbH',
    title: 'E-Commerce Plattform',
    description: 'Vollständige Re-Plattformierung eines Onlineshops mit über 50.000 Produkten auf Next.js und einer Laravel-API. Ladezeit von 8s auf unter 1s reduziert.',
    year: '2024',
    tags: ['Next.js', 'Laravel', 'Elasticsearch'],
  },
  {
    index: '02',
    client: 'SaaS Startup',
    title: 'Multi-Tenant Dashboard',
    description: 'Entwicklung einer reaktiven Analyseplattform mit Echtzeit-Daten, rollenbasierter Zugriffskontrolle und White-Label-Fähigkeit für B2B-Kunden.',
    year: '2024',
    tags: ['React', 'WebSockets', 'PostgreSQL'],
  },
  {
    index: '03',
    client: 'Mittelständisches Unternehmen',
    title: 'Cloud-Migration',
    description: 'Migration von Legacy-On-Premise-Infrastruktur zu einer vollständig containerisierten Hetzner-Umgebung mit Zero-Downtime-Deployment und automatisierten Backups.',
    year: '2023',
    tags: ['Docker', 'Hetzner', 'Restic', 'CI/CD'],
  },
]

export default function Work() {
  return (
    <section id="projekte" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-6">
            <p className="font-mono text-xs tracking-widest2 text-stone uppercase mb-4">
              Ausgewählte Projekte
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
              Projekte,<br />
              <span className="italic text-stone">die wirken.</span>
            </h2>
          </div>
          <div className="md:col-span-6 flex items-end">
            <p className="font-sans text-sm text-stone leading-relaxed max-w-sm">
              Eine Auswahl unserer Arbeiten der letzten Jahre. Auf Wunsch stellen wir Ihnen ausführliche Fallstudien zur Verfügung.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-px bg-mist">
          {projects.map(p => (
            <div key={p.index} className="bg-paper p-8 group cursor-default">
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs text-stone">{p.index}</span>
                <span className="font-mono text-xs text-stone">{p.year}</span>
              </div>

              <p className="font-mono text-xs text-stone uppercase tracking-wider mb-3">
                {p.client}
              </p>
              <h3 className="font-display text-2xl text-ink mb-4 group-hover:text-accent transition-colors duration-300">
                {p.title}
              </h3>
              <p className="font-sans text-sm text-stone leading-relaxed mb-6">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-mist">
                {p.tags.map(t => (
                  <span key={t} className="font-mono text-xs text-stone">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#kontakt"
            className="font-sans text-sm text-stone link-underline hover:text-ink transition-colors"
          >
            Alle Projekte auf Anfrage →
          </a>
        </div>
      </div>
    </section>
  )
}
