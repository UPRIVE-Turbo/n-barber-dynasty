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

  const [{ docs: services }, { docs: gallery }, { docs: team }, settings, content] =
    await Promise.all([
      payload.find({ collection: 'services', sort: '_order', limit: 100 }),
      payload.find({ collection: 'gallery', sort: '_order', limit: 100 }),
      payload.find({ collection: 'team', sort: '_order', limit: 100 }),
      payload.findGlobal({ slug: 'settings' }),
      payload.findGlobal({ slug: 'content' }),
    ])

  const hero = {
    badge: content.hero?.badge ?? 'Kaposvár • Ady Endre utca 10.',
    titleLine1: content.hero?.titleLine1 ?? 'N BARBER',
    titleHighlight: content.hero?.titleHighlight ?? 'DYNASTY.',
    subtitle:
      content.hero?.subtitle ?? 'Klasszikus borbélymunka, modern stílusban. Hozd ki magadból a maximumot.',
    ctaPrimary: content.hero?.ctaPrimary ?? 'Időpontfoglalás',
    ctaSecondary: content.hero?.ctaSecondary ?? 'Szolgáltatások',
  }

  const servicesContent = {
    eyebrow: content.services?.eyebrow ?? 'Mit nyújtunk?',
    titleLine1: content.services?.titleLine1 ?? 'Prémium',
    titleLine2: content.services?.titleLine2 ?? 'Kezelések.',
    description:
      content.services?.description ??
      'Nem csak levágjuk a hajad. Egy élményt adunk. Precizitás, forró törülköző, minőségi anyagok.',
  }

  const teamContent = {
    eyebrow: content.team?.eyebrow ?? 'A Mesterek',
    titleLine1: content.team?.titleLine1 ?? 'Ismerd meg',
    titleHighlight: content.team?.titleHighlight ?? 'a Csapatot.',
  }

  const galleryContent = {
    title: content.gallery?.title ?? 'Munkáink.',
    facebookCtaLabel: content.gallery?.facebookCtaLabel ?? 'Még több Facebookon',
    mobileCtaLabel: content.gallery?.mobileCtaLabel ?? 'További munkák',
  }

  const bookingContent = {
    title: content.booking?.title ?? 'Foglalj Időpontot.',
    description:
      content.booking?.description ??
      'Egységes foglalási rendszerünkön keresztül kiválaszthatod a borbélyodat és a kívánt szolgáltatást. Mi visszaigazoljuk.',
    note:
      content.booking?.note ??
      'A foglalás véglegesítéséhez munkatársunk SMS-ben vagy telefonon megerősíti az időpontot.',
  }

  const contactContent = {
    titleLine1: content.contact?.titleLine1 ?? 'Itt Találsz',
    titleHighlight: content.contact?.titleHighlight ?? 'Minket.',
  }

  const footerContent = {
    copyrightText: content.footer?.copyrightText ?? 'Minden jog fenntartva © 2026.',
  }

  return (
    <>
      <Header />
      <Hero content={hero} />
      <Services services={services} content={servicesContent} />
      <Team members={team} content={teamContent} />
      <Gallery items={gallery} content={galleryContent} />
      <BookingForm services={services} content={bookingContent} />
      <Contact settings={settings} content={contactContent} />
      <Footer settings={settings} content={footerContent} />
    </>
  )
}

export const dynamic = 'force-dynamic'