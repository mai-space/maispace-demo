import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles')

export interface ArticleMeta {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

export interface Article extends ArticleMeta {
  contentHtml: string
}

function getArticleFilePaths(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.md'))
}

export function getAllArticles(): ArticleMeta[] {
  return getArticleFilePaths()
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const filePath = path.join(ARTICLES_DIR, filename)
      const { data } = matter(fs.readFileSync(filePath, 'utf-8'))
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        tags: (data.tags as string[]) ?? [],
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html, { sanitize: false }).process(content)
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    tags: (data.tags as string[]) ?? [],
    contentHtml: processed.toString(),
  }
}
