import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seasons of Heartbreak',
  description: 'A profund NFT collection'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" sizes="32x32" href="/logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
