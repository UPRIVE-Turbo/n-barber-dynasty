import React from 'react'
import { Oswald, Roboto } from 'next/font/google'
import './styles.css'

const oswald = Oswald({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata = {
  title: 'N Barber Dynasty | Klasszikus Borbélyszalon Kaposváron',
  description:
    'Prémium férfi fodrászat, szakálligazítás és borotválás Kaposvár szívében. Foglalj időpontot Gáborhoz, Olivérhez vagy Andreihez.',
  openGraph: {
    title: 'N Barber Dynasty | Klasszikus Borbélyszalon Kaposváron',
    description:
      'Klasszikus borbélymunka, modern stílusban. Foglalj időpontot most Kaposváron, az Ady Endre utca 10. szám alatt.',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="hu" className={`${oswald.variable} ${roboto.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}
