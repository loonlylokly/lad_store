import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/modules/Header/Header';
import Footer from '@/modules/Footer/Footer';
import StoreProvider from '@/store/StoreProvider';
import dynamic from 'next/dynamic';
import './globals.css';

const BtnBasket = dynamic(() => import('@/component/Buttons/BtnBasket/BtnBasket'), { ssr: false })

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
      <StoreProvider>
        <body className={inter.className}>
          <Header />
          <main className="main">
            {children}
          </main>
          <Footer />
          <BtnBasket /> 
        </body>
      </StoreProvider>
    </html>
  )
}
