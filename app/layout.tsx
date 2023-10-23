import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import Layout from '@/components/Layout'
import './globals.css'

const onest = Onest({ subsets: ['latin'] })

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
      <body className={onest.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
