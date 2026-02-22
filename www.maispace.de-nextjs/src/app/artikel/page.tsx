import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Artikel — Maispace',
  description: 'Praxisartikel zu TYPO3, Laravel, Next.js, UI/UX und Software-Architektur.',
  alternates: { canonical: 'https://maispace-demo.vercel.app/artikel' },
  openGraph: {
    title: 'Artikel — Maispace',
    description: 'Praxisartikel zu TYPO3, Laravel, Next.js, UI/UX und Software-Architektur.',
    url: 'https://maispace-demo.vercel.app/artikel',
  },
}

export default function ArtikelPage() {
  const articles = getAllArticles()

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-paper pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest2 text-stone uppercase mb-4">
            Artikel
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-ink leading-tight mb-16">
            Gedanken aus<br />
            <span className="italic text-stone">der Praxis.</span>
          </h1>

          <div className="divide-y divide-mist">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/artikel/${article.slug}`}
                className="group py-8 grid md:grid-cols-12 gap-4 items-baseline block hover:bg-paper/50 transition-colors"
              >
                <div className="md:col-span-2">
                  <time
                    dateTime={article.date}
                    className="font-mono text-xs text-stone"
                  >
                    {new Date(article.date).toLocaleDateString('de-DE', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </time>
                </div>
                <div className="md:col-span-7">
                  <h2 className="font-display text-2xl text-ink group-hover:text-accent transition-colors duration-200 mb-2">
                    {article.title}
                  </h2>
                  <p className="font-sans text-sm text-stone leading-relaxed">
                    {article.description}
                  </p>
                </div>
                <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-stone border border-mist px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
