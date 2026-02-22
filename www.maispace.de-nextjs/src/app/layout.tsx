import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Maispace — Webentwicklung & Beratung',
  description: 'Individuelle Weblösungen mit TYPO3, Laravel und Next.js. Beratung zu UI/UX und Software-Architektur.',
  metadataBase: new URL('https://maispace.de'),
  openGraph: {
    title: 'Maispace — Webentwicklung & Beratung',
    description: 'Individuelle Weblösungen mit TYPO3, Laravel und Next.js. Beratung zu UI/UX und Software-Architektur.',
    url: 'https://maispace.de',
    siteName: 'Maispace',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${dmSerif.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
