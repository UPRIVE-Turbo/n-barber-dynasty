import { getPayload } from 'payload'
import config from '@/payload.config'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Gallery } from './components/Gallery'
import { BookingForm } from './components/BookingForm'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const [{ docs: services }, { docs: gallery }, settings] = await Promise.all([
    payload.find({ collection: 'services', sort: 'order', limit: 100 }),
    payload.find({ collection: 'gallery', sort: 'order', limit: 100 }),
    payload.findGlobal({ slug: 'settings' }),
  ])

  return (
    <>
      <Header />
      <Hero />
      <Services services={services} />
      <Team />
      <Gallery items={gallery} />
      <BookingForm services={services} />
      <Contact settings={settings} />
      <Footer settings={settings} />
    </>
  )
}
