import { config as loadEnv } from 'dotenv'
import { getPayload } from 'payload'

loadEnv()

const services = [
  {
    name: 'Klasszikus Hajvágás',
    description:
      'Személyre szabott konzultáció, mosás, gépi és ollós vágás, szárítás, prémium formázás.',
    price: '5 500 Ft',
    duration: '45 perc',
    icon: 'scissors',
    order: 1,
  },
  {
    name: 'Szakálligazítás',
    description:
      'Formázás géppel és borotvával, forró törülközős pácolás, prémium olajozás és balzsamozás.',
    price: '4 000 Ft',
    duration: '30 perc',
    icon: 'razor',
    order: 2,
  },
  {
    name: 'Haj + Szakáll Csomag',
    description:
      'A teljes megújulás. Komplett hajvágás és professzionális szakálligazítás forró törülközővel.',
    price: '8 500 Ft',
    duration: '75 perc',
    icon: 'sparkle',
    order: 3,
  },
  {
    name: 'Nyakszirt Borotválás',
    description: 'A kontúrok letisztítása. Gyors frissítés két vágás között, hogy mindig ápolt maradj.',
    price: '2 500 Ft',
    duration: '15 perc',
    icon: 'razor',
    order: 4,
  },
]

async function seed() {
  const config = (await import('./payload.config')).default
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('Seeding settings...')
  await payload.updateGlobal({
    slug: 'settings',
    data: {
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
      mapEmbedUrl:
        'https://www.google.com/maps?q=Ady+Endre+utca+10,+Kaposv%C3%A1r&output=embed',
    },
  })

  console.log('Seeding services...')
  const existing = await payload.find({ collection: 'services', limit: 100 })
  for (const doc of existing.docs) {
    await payload.delete({ collection: 'services', id: doc.id })
  }
  for (const service of services) {
    await payload.create({ collection: 'services', data: service })
  }

  console.log('Seed complete.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
