import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/modules/Header/Header'
import './globals.css'
import Footer from '@/modules/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Мерч от Lad Fashion',
  description: 'Заказать Мерч от компании Lad. По доступной цене с доставкой по всей России. Звоните: + 7 800 000 00 00...',
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
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
