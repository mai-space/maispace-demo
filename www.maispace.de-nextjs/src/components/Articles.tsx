import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'

export default function Articles() {
  const articles = getAllArticles().slice(0, 3)

  if (articles.length === 0) return null

  return (
    <section id="artikel" className="py-32 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-xs tracking-widest2 text-stone uppercase mb-4">
              Artikel
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
              Gedanken aus<br />
              <span className="italic text-stone">der Praxis.</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <span className="font-display text-8xl text-ink/5 select-none">04</span>
          </div>
        </div>

        {/* Article list */}
        <div className="divide-y divide-mist">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artikel/${article.slug}`}
              className="group py-8 grid md:grid-cols-12 gap-4 items-baseline block"
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
                <h3 className="font-display text-2xl text-ink group-hover:text-accent transition-colors duration-200 mb-2">
                  {article.title}
                </h3>
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

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/artikel"
            className="font-sans text-sm text-stone link-underline hover:text-ink transition-colors"
          >
            Alle Artikel lesen →
          </Link>
        </div>
      </div>
    </section>
  )
}
