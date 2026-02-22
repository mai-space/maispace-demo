import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllArticles, getArticleBySlug } from '@/lib/articles'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const articles = getAllArticles()
  const meta = articles.find((a) => a.slug === params.slug)
  if (!meta) return {}
  return {
    title: `${meta.title} — Maispace`,
    description: meta.description,
    alternates: { canonical: `https://maispace-demo.vercel.app/artikel/${meta.slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://maispace-demo.vercel.app/artikel/${meta.slug}`,
      type: 'article',
      publishedTime: meta.date,
      tags: meta.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  }
}

export default async function ArtikelDetailPage({ params }: Props) {
  let article
  try {
    article = await getArticleBySlug(params.slug)
  } catch {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: 'Maispace',
      url: 'https://maispace-demo.vercel.app',
    },
    publisher: {
      '@type': 'Person',
      name: 'Maispace',
      url: 'https://maispace-demo.vercel.app',
    },
  }

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-paper pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Back */}
          <Link
            href="/artikel"
            className="font-mono text-xs text-stone uppercase tracking-wider hover:text-ink transition-colors mb-12 inline-block link-underline"
          >
            ← Alle Artikel
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-stone border border-mist px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-4">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="font-mono text-xs text-stone"
            >
              {new Date(article.date).toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <div className="w-full h-px bg-mist mb-12" />

          {/* Article body */}
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          <div className="w-full h-px bg-mist mt-16 mb-12" />

          {/* CTA */}
          <div className="flex items-center justify-between">
            <Link
              href="/artikel"
              className="font-mono text-xs text-stone uppercase tracking-wider hover:text-ink transition-colors link-underline"
            >
              ← Alle Artikel
            </Link>
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); window.location.href = '/#kontakt' }}
              className="font-sans text-sm bg-ink text-paper px-5 py-2.5 hover:bg-accent transition-colors duration-200"
            >
              Kontakt →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
