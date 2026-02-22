export default function About() {
  const values = [
    {
      title: 'Präzision',
      body: 'Ich liefere sauberen, wartbaren Code und durchdachte Architektur — kein Flickwerk, keine technischen Schulden.',
    },
    {
      title: 'Transparenz',
      body: 'Klare Kommunikation, realistische Zeitpläne und volle Kostenkontrolle von Anfang an.',
    },
    {
      title: 'Langfristigkeit',
      body: 'Ich baue Lösungen, die in fünf Jahren noch zuverlässig laufen — und stehe Ihnen langfristig als Ansprechpartner zur Verfügung.',
    },
  ]

  return (
    <section id="ueber-uns" className="py-32 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Left col */}
          <div className="md:col-span-5">
            <p className="font-mono text-xs tracking-widest2 text-stone uppercase mb-4">
              Über mich
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-8">
              Technik,<br />
              <span className="italic text-stone">die trägt.</span>
            </h2>
            <div className="w-12 h-px bg-mist" />
            <p className="font-sans text-base text-stone leading-relaxed mt-8">
              Ich bin freiberuflicher Webentwickler und technischer Berater mit Sitz in Deutschland. Mit über 10 Jahren Erfahrung unterstütze ich Unternehmen dabei, individuelle Weblösungen mit TYPO3, Laravel und Next.js zu entwickeln.
            </p>
            <p className="font-sans text-base text-stone leading-relaxed mt-4">
              Neben der Entwicklung berate ich auch in den Bereichen UI/UX und Software-Architektur. Mein Ansatz ist pragmatisch: Ich wähle die Technologie, die zu Ihrer Situation passt — nicht die, die gerade im Trend liegt.
            </p>
          </div>

          {/* Right col — values */}
          <div className="md:col-span-7 space-y-0 divide-y divide-mist">
            {values.map((v, i) => (
              <div key={v.title} className="py-8 grid grid-cols-12 gap-4">
                <div className="col-span-1">
                  <span className="font-mono text-xs text-stone">0{i + 1}</span>
                </div>
                <div className="col-span-11">
                  <h3 className="font-display text-xl text-ink mb-2">{v.title}</h3>
                  <p className="font-sans text-sm text-stone leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
