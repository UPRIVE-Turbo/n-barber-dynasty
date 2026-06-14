import React from 'react'
import { Oswald, Roboto } from 'next/font/google'
import { getPayload } from 'payload'
import config from '@/payload.config'
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

export async function generateMetadata() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const settings = await payload.findGlobal({ slug: 'settings' })

  const title = settings.seo?.metaTitle || 'N Barber Dynasty | Klasszikus Borbélyszalon Kaposváron'
  const description =
    settings.seo?.metaDescription ||
    'Prémium férfi fodrászat, szakálligazítás és borotválás Kaposvár szívében.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: 'hu_HU',
      type: 'website',
    },
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="hu" className={`${oswald.variable} ${roboto.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}
