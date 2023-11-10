import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './ui/header'
import Footer from './ui/footer'
import Cursor from './ui/cursor'
import Grain from './ui/grain'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ARROW-studio',
  description: 'Marketing & Design Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
          <Cursor></Cursor>
          {children}
        <Footer></Footer>
        <Grain></Grain>
      </body>
    </html>
  )
}
