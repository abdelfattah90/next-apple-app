import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import Layout from '@/components/Layout'
import './globals.css'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apple',
  description: 'next.js-apple-app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cairo.className}>
        <LanguageProvider>
          <Layout>{children}</Layout>
        </LanguageProvider>
      </body>
    </html>
  )
}
