import type { Metadata } from 'next'
// eslint-disable-next-line
import { Barlow_Semi_Condensed } from 'next/font/google'
import './globals.css'
import { ContextProvider } from '@/context/context'

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
})

export const metadata: Metadata = {
  title: 'Rock Paper Scissors Master',
  description: 'Rock Paper Scissors, create with nextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  )
}
