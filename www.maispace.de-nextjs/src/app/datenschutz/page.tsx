import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — Maispace',
}

export default function Datenschutz() {
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
          Datenschutz&shy;erklärung
        </h1>

        <div className="space-y-8 font-sans text-sm text-stone leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-ink mb-3">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br /><br />
              {/* TODO: Vollständige Kontaktdaten eintragen */}
              <span className="bg-yellow-100 text-yellow-800 px-1">[Vorname Nachname]</span><br />
              <span className="bg-yellow-100 text-yellow-800 px-1">[Straße Hausnummer, PLZ Stadt]</span><br />
              E-Mail:{' '}
              <a href="mailto:hallo@maispace.de" className="text-ink link-underline">
                hallo@maispace.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Ich erhebe personenbezogene Daten nur, wenn Sie mir diese im Rahmen einer Anfrage über das Kontaktformular oder per E-Mail freiwillig mitteilen. Dabei kann es sich um folgende Daten handeln:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Vor- und Nachname</li>
              <li>E-Mail-Adresse</li>
              <li>Unternehmen (optional)</li>
              <li>Inhalt Ihrer Nachricht</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">3. Zweck der Datenverarbeitung</h2>
            <p>
              Die von Ihnen übermittelten Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme mit Ihnen verwendet. Eine Weitergabe an Dritte findet nicht statt, sofern dies nicht zur Vertragserfüllung erforderlich ist oder Sie ausdrücklich eingewilligt haben.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">4. Rechtsgrundlage</h2>
            <p>
              Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">5. Kontaktformular (Formspree)</h2>
            <p>
              Das Kontaktformular auf dieser Website wird über den Dienst Formspree (Formspree Inc., San Francisco, USA) verarbeitet. Wenn Sie das Formular absenden, werden Ihre Daten an die Server von Formspree übertragen und von dort an meine E-Mail-Adresse weitergeleitet.
            </p>
            <p className="mt-3">
              Weitere Informationen zum Datenschutz bei Formspree finden Sie unter:{' '}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink link-underline"
              >
                formspree.io/legal/privacy-policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">6. Speicherdauer</h2>
            <p>
              Ihre Anfragen werden nur so lange gespeichert, wie es für die Bearbeitung erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben. Danach werden die Daten gelöscht.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">7. Server-Logfiles</h2>
            <p>
              Der Hosting-Anbieter dieser Website erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Browsertyp und -version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">8. Ihre Rechte</h2>
            <p>Sie haben gegenüber mir folgende Rechte:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a href="mailto:hallo@maispace.de" className="text-ink link-underline">
                hallo@maispace.de
              </a>
            </p>
            <p className="mt-3">
              Sie haben zudem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren. Die für Sie zuständige Aufsichtsbehörde richtet sich nach Ihrem Bundesland.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">9. Aktualität dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2025. Durch die Weiterentwicklung der Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
