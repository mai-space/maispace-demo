export default function Contact() {
  return (
    <section id="kontakt" className="py-32 px-6 bg-ink text-paper overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Background watermark */}
        <span
          className="absolute -right-8 top-1/2 -translate-y-1/2 font-display text-[18vw] leading-none text-white/5 select-none pointer-events-none"
          aria-hidden="true"
        >
          05
        </span>

        <div className="grid md:grid-cols-12 gap-16 items-center relative z-10">
          {/* Left */}
          <div className="md:col-span-6">
            <p className="font-mono text-xs tracking-widest2 text-stone uppercase mb-4">
              Kontakt
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-paper leading-tight mb-8">
              Lassen Sie<br />
              uns reden.
            </h2>
            <p className="font-sans text-base text-stone leading-relaxed max-w-sm">
              Haben Sie ein Projekt im Kopf oder eine Frage zur Beratung? Ich freue mich auf Ihre Nachricht und melde mich innerhalb von 24 Stunden.
            </p>

            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-stone w-20 uppercase tracking-wider">E-Mail</span>
                <a href="mailto:hallo@maispace.de" className="font-sans text-sm text-paper link-underline">
                  hallo@maispace.de
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-stone w-20 uppercase tracking-wider">Web</span>
                <span className="font-sans text-sm text-paper">maispace.de</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-stone w-20 uppercase tracking-wider">Region</span>
                <span className="font-sans text-sm text-paper">Deutschland</span>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="md:col-span-6">
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-stone uppercase tracking-wider block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 text-paper font-sans text-sm px-4 py-3 focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-stone uppercase tracking-wider block mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full bg-white/5 border border-white/10 text-paper font-sans text-sm px-4 py-3 focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-stone uppercase tracking-wider block mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 text-paper font-sans text-sm px-4 py-3 focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-stone uppercase tracking-wider block mb-2">
                  Nachricht
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 text-paper font-sans text-sm px-4 py-3 focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20 resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-paper text-ink font-sans text-sm py-3 hover:bg-accent hover:text-paper transition-colors duration-200 font-medium tracking-wide"
              >
                Nachricht senden →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
