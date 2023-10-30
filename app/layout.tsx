import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import ScrollToTop from '@/components/layout/scroll-to-top'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KTik - TikTok Downloader',
  description: 'Download any video, image from TikTok',
  creator: 'Code With Koi',
  keywords: 'tiktok, tiktok downloader, tiktok video downloader, tiktok image downloader, tiktok video download, tiktok image download, tiktok download, tiktok video, tiktok image',
  icons: 'icon.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={'min-h-screen p-8 sm:p-12 md:p-24'}>
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
