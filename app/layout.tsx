import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ThemeProvider } from './providers/ThemeProvider'
import MouseGlow from '@/components/MouseGlow'
import BackgroundGlow from '@/components/BackgroundGlow'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aesthera Limited — Architecture of the Future',
  description: 'We build digital experiences that scale.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${inter.variable} font-body antialiased bg-background text-on-background transition-colors duration-300`}>
        <ThemeProvider>
          <Nav />
          <MouseGlow />
          <BackgroundGlow />
          <main className="relative z-0 min-h-screen pt-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
