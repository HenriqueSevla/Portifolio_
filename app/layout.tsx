import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Olímpia Turismo',
  description: 'Descubra Olímpia: atrações, hospedagens, restaurantes e eventos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen grid grid-rows-[auto,1fr,auto]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
