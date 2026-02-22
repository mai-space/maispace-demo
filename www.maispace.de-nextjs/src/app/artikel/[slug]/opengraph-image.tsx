import { ImageResponse } from 'next/og'
import { getAllArticles } from '@/lib/articles'

export const alt = 'Artikel — Maispace'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: { slug: string }
}

export default function OgImage({ params }: Props) {
  const articles = getAllArticles()
  const article = articles.find((a) => a.slug === params.slug)

  const title = article?.title ?? 'Maispace'
  const description = article?.description ?? 'Webentwicklung & Beratung'

  return new ImageResponse(
    (
      <div
        style={{
          background: '#fafaf8',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
          fontFamily: 'serif',
        }}
      >
        {/* Top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: '#0f0f0f',
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: 'absolute',
            top: '48px',
            left: '64px',
            fontSize: '20px',
            color: '#0f0f0f',
            fontWeight: 400,
            letterSpacing: '-0.5px',
          }}
        >
          Maispace
        </div>

        {/* Tags */}
        {article && (
          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '16px',
            }}
          >
            {article.tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: '12px',
                  color: '#8a8880',
                  border: '1px solid #ccc9c2',
                  padding: '2px 8px',
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 50 ? '40px' : '52px',
            color: '#0f0f0f',
            fontWeight: 400,
            lineHeight: 1.1,
            maxWidth: '800px',
            marginBottom: '20px',
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '18px',
            color: '#8a8880',
            lineHeight: 1.5,
            maxWidth: '700px',
          }}
        >
          {description}
        </div>
      </div>
    ),
    { ...size },
  )
}
