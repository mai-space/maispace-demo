import { Feed } from 'feed'
import { getAllArticles } from '@/lib/articles'

const SITE_URL = 'https://maispace-demo.vercel.app'

export async function GET() {
  const articles = getAllArticles()

  const feed = new Feed({
    title: 'Maispace — Artikel',
    description: 'Praxisartikel zu TYPO3, Laravel, Next.js, UI/UX und Software-Architektur.',
    id: SITE_URL,
    link: SITE_URL,
    language: 'de',
    feedLinks: {
      rss2: `${SITE_URL}/feed.xml`,
    },
    author: {
      name: 'Maispace',
      email: 'hallo@maispace.de',
      link: SITE_URL,
    },
    copyright: `© ${new Date().getFullYear()} Maispace`,
  })

  for (const article of articles) {
    const url = `${SITE_URL}/artikel/${article.slug}`
    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      date: new Date(article.date),
      category: article.tags.map((t) => ({ name: t })),
    })
  }

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
