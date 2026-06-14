import { config as loadEnv } from 'dotenv'
import { getPayload } from 'payload'

loadEnv()

const resetImages = process.argv.includes('--reset-images')

const settings = {
  companyName: 'N Barber Dynasty',
  phones: [
    { name: 'Gábor', phone: '+36 30 246 5594' },
    { name: 'Olivér', phone: '+36 20 410 9151' },
    { name: 'Andrei', phone: '+36 30 823 6167' },
  ],
  address: 'Ady Endre utca 10, Kaposvár',
  openingHours: [
    { days: 'H-P', hours: '09:00 - 19:00' },
    { days: 'Szo', hours: '09:00 - 14:00' },
    { days: 'V', hours: 'Zárva' },
  ],
  facebook: 'https://www.facebook.com/nbarberdynasty',
  mapEmbedUrl: 'https://www.google.com/maps?q=Ady+Endre+utca+10,+Kaposv%C3%A1r&output=embed',
  seo: {
    metaTitle: 'N Barber Dynasty | Klasszikus Borbélyszalon Kaposváron',
    metaDescription:
      'Prémium férfi fodrászat, szakálligazítás és borotválás Kaposvár szívében. Foglalj időpontot Gáborhoz, Olivérhez vagy Andreihez.',
  },
}

const content = {
  hero: {
    badge: 'Kaposvár • Ady Endre utca 10.',
    titleLine1: 'N BARBER',
    titleHighlight: 'DYNASTY.',
    subtitle: 'Klasszikus borbélymunka, modern stílusban. Hozd ki magadból a maximumot.',
    ctaPrimary: 'Időpontfoglalás',
    ctaSecondary: 'Szolgáltatások',
  },
  services: {
    eyebrow: 'Mit nyújtunk?',
    titleLine1: 'Prémium',
    titleLine2: 'Kezelések.',
    description:
      'Nem csak levágjuk a hajad. Egy élményt adunk. Precizitás, forró törülköző, minőségi anyagok.',
  },
  team: {
    eyebrow: 'A Mesterek',
    titleLine1: 'Ismerd meg',
    titleHighlight: 'a Csapatot.',
  },
  gallery: {
    title: 'Munkáink.',
    facebookCtaLabel: 'Még több Facebookon',
    mobileCtaLabel: 'További munkák',
  },
  booking: {
    title: 'Foglalj Időpontot.',
    description:
      'Egységes foglalási rendszerünkön keresztül kiválaszthatod a borbélyodat és a kívánt szolgáltatást. Mi visszaigazoljuk.',
    note: 'A foglalás véglegesítéséhez munkatársunk SMS-ben vagy telefonon megerősíti az időpontot.',
  },
  contact: {
    titleLine1: 'Itt Találsz',
    titleHighlight: 'Minket.',
  },
  footer: {
    copyrightText: 'Minden jog fenntartva © 2026.',
  },
}

const services = [
  {
    name: 'Klasszikus Hajvágás',
    description:
      'Személyre szabott konzultáció, mosás, gépi és ollós vágás, szárítás, prémium formázás.',
    price: '5 500 Ft',
    duration: '45 perc',
    icon: 'scissors',
  },
  {
    name: 'Szakálligazítás',
    description:
      'Formázás géppel és borotvával, forró törülközős pácolás, prémium olajozás és balzsamozás.',
    price: '4 000 Ft',
    duration: '30 perc',
    icon: 'razor',
  },
  {
    name: 'Haj + Szakáll Csomag',
    description:
      'A teljes megújulás. Komplett hajvágás és professzionális szakálligazítás forró törülközővel.',
    price: '8 500 Ft',
    duration: '75 perc',
    icon: 'sparkle',
  },
  {
    name: 'Nyakszirt Borotválás',
    description:
      'A kontúrok letisztítása. Gyors frissítés két vágás között, hogy mindig ápolt maradj.',
    price: '2 500 Ft',
    duration: '15 perc',
    icon: 'razor',
  },
]

const team = [
  {
    name: 'Gábor',
    role: 'Alapító',
    bio: 'Precizitás és klasszikus átmenetek fanatikusa. Nincs olyan forma, amit ne vágna tökéletesre.',
    phone: '+36 30 246 5594',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Olivér',
    role: null,
    bio: 'A modern textúrák és a tökéletes szakállformázás mestere. Minden apró részletre odafigyel.',
    phone: '+36 20 410 9151',
    image: 'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Andrei',
    role: null,
    bio: 'Gyors, határozott, stílusos. Ha a pengeéles kontúrokat és a laza stílust kedveled, hozzá fordulj.',
    phone: '+36 30 823 6167',
    image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=800&auto=format&fit=crop',
  },
]

const gallery = [
  {
    alt: 'Borbély munka közben',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    alt: 'Férfi hajvágás profilból',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop',
  },
  {
    alt: 'Forró törülközős kezelés',
    image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=800&auto=format&fit=crop',
  },
  {
    alt: 'Szakálligazítás részlet',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop',
  },
  {
    alt: 'Borbélyszalon hangulatkép',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
  },
  {
    alt: 'Friss frizura',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=800&auto=format&fit=crop',
  },
]

async function fetchAsFile(url: string, name: string) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.status} ${res.statusText}`)
  }
  const arrayBuffer = await res.arrayBuffer()
  const data = Buffer.from(arrayBuffer)
  return {
    data,
    mimetype: res.headers.get('content-type') || 'image/jpeg',
    name,
    size: data.length,
  }
}

async function deleteWithImage(
  collection: 'team' | 'gallery',
  doc: { id: string | number; image?: unknown },
  payload: Awaited<ReturnType<typeof getPayload>>,
) {
  await payload.delete({ collection, id: doc.id })
  const image = doc.image
  if (image && typeof image === 'object' && 'id' in image) {
    await payload
      .delete({ collection: 'media', id: (image as { id: string | number }).id })
      .catch(() => {})
  } else if (image) {
    await payload.delete({ collection: 'media', id: image as string | number }).catch(() => {})
  }
}

async function seed() {
  const config = (await import('./payload.config')).default
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('Seeding settings...')
  await payload.updateGlobal({ slug: 'settings', data: settings })

  console.log('Seeding content...')
  await payload.updateGlobal({ slug: 'content', data: content })

  console.log('Seeding services...')
  const existingServices = await payload.find({ collection: 'services', limit: 1 })
  if (existingServices.totalDocs === 0) {
    for (const service of services) {
      await payload.create({ collection: 'services', data: service })
    }
  } else {
    console.log('Services already seeded, skipping.')
  }

  console.log('Seeding team...')
  const existingTeam = await payload.find({ collection: 'team', limit: 100 })
  if (resetImages) {
    for (const doc of existingTeam.docs) {
      await deleteWithImage('team', doc, payload)
    }
  }
  if (resetImages || existingTeam.totalDocs === 0) {
    for (let i = 0; i < team.length; i++) {
      const member = team[i]
      const file = await fetchAsFile(member.image, `team-${i + 1}.jpg`)
      const media = await payload.create({
        collection: 'media',
        data: { alt: `${member.name}, borbély` },
        file,
      })
      await payload.create({
        collection: 'team',
        data: {
          name: member.name,
          role: member.role || undefined,
          bio: member.bio,
          phone: member.phone,
          image: media.id,
        },
      })
    }
  } else {
    console.log('Team already seeded, skipping.')
  }

  console.log('Seeding gallery...')
  const existingGallery = await payload.find({ collection: 'gallery', limit: 100 })
  if (resetImages) {
    for (const doc of existingGallery.docs) {
      await deleteWithImage('gallery', doc, payload)
    }
  }
  if (resetImages || existingGallery.totalDocs === 0) {
    for (let i = 0; i < gallery.length; i++) {
      const item = gallery[i]
      const file = await fetchAsFile(item.image, `gallery-${i + 1}.jpg`)
      const media = await payload.create({
        collection: 'media',
        data: { alt: item.alt },
        file,
      })
      await payload.create({
        collection: 'gallery',
        data: {
          image: media.id,
          alt: item.alt,
        },
      })
    }
  } else {
    console.log('Gallery already seeded, skipping.')
  }

  console.log('Seed complete.')
  process.exit(0)
}

await seed().catch((err) => {
  console.error(err)
  process.exitCode = 1
  process.exit(1)
})
