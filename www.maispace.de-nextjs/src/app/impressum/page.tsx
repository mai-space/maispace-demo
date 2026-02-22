import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum — Maispace',
}

export default function Impressum() {
  return (
    <main className="min-h-screen bg-paper px-6 py-32">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="font-mono text-xs text-stone uppercase tracking-wider hover:text-ink transition-colors mb-12 inline-block link-underline"
        >
          ← Zurück
        </Link>

        <p className="font-mono text-xs tracking-widest2 text-stone uppercase mb-4">
          Rechtliches
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-12">
          Impressum
        </h1>

        <div className="space-y-8 font-sans text-sm text-stone leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-ink mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              {/* TODO: Vollständigen Namen eintragen */}
              <span className="bg-yellow-100 text-yellow-800 px-1">[Vorname Nachname]</span><br />
              {/* TODO: Straße und Hausnummer eintragen */}
              <span className="bg-yellow-100 text-yellow-800 px-1">[Straße Hausnummer]</span><br />
              {/* TODO: PLZ und Stadt eintragen */}
              <span className="bg-yellow-100 text-yellow-800 px-1">[PLZ Stadt]</span>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Kontakt</h2>
            <p>
              {/* TODO: Telefonnummer eintragen oder Zeile entfernen */}
              Telefon: <span className="bg-yellow-100 text-yellow-800 px-1">[+49 XXX XXXXXXX]</span><br />
              E-Mail:{' '}
              <a href="mailto:hallo@maispace.de" className="text-ink link-underline">
                hallo@maispace.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Umsatzsteuer-ID</h2>
            <p>
              {/* TODO: USt-IdNr. eintragen, falls vorhanden — sonst Abschnitt entfernen */}
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <span className="bg-yellow-100 text-yellow-800 px-1">[DE XXXXXXXXX]</span>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Freiberuflicher Webentwickler &amp; Berater<br />
              Zuständige Kammer: entfällt (freier Beruf ohne Kammerpflicht)
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Haftung für Links</h2>
            <p>
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
