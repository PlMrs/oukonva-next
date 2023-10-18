import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './Header'
import { Footer } from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Oukonva",
  description: "L'application de recherche de voyages",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
