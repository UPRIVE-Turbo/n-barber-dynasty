import { PhoneCall } from '@phosphor-icons/react/dist/ssr'

const team = [
  {
    name: 'Gábor',
    role: 'Alapító',
    bio: 'Precizitás és klasszikus átmenetek fanatikusa. Nincs olyan forma, amit ne vágna tökéletesre.',
    phone: '+36 30 246 5594',
    tel: '+36302465594',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Olivér',
    role: null,
    bio: 'A modern textúrák és a tökéletes szakállformázás mestere. Minden apró részletre odafigyel.',
    phone: '+36 20 410 9151',
    tel: '+36204109151',
    image: 'https://images.unsplash.com/photo-1593728639257-227546efbc32?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Andrei',
    role: null,
    bio: 'Gyors, határozott, stílusos. Ha a pengeéles kontúrokat és a laza stílust kedveled, hozzá fordulj.',
    phone: '+36 30 823 6167',
    tel: '+36308236167',
    image: 'https://images.unsplash.com/photo-1621644023253-ab934509e51c?q=80&w=800&auto=format&fit=crop',
  },
]

export function Team() {
  return (
    <section id="team" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-12">
        <div className="mb-20 text-center md:text-left">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-copper">
            A Mesterek
          </h2>
          <h3 className="text-5xl uppercase leading-none text-anthracite md:text-7xl">
            Ismerd meg
            <br />a <span className="text-copper">Csapatot.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group flex flex-col items-center md:items-start ${i === 1 ? 'lg:mt-16' : ''}`}
            >
              <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden bg-anthracite">
                <img
                  src={member.image}
                  alt={`${member.name}, borbély`}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                {member.role && (
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-anthracite to-transparent p-6 pb-2">
                    <span className="bg-copper px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      {member.role}
                    </span>
                  </div>
                )}
              </div>
              <h4 className="mb-1 text-3xl text-anthracite">{member.name}</h4>
              <p className="mb-4 max-w-[280px] text-center text-sm text-dark-gray/60 md:text-left">
                {member.bio}
              </p>
              <a
                href={`tel:${member.tel}`}
                className="flex items-center font-heading text-lg text-anthracite transition-colors hover:text-copper"
              >
                <PhoneCall weight="fill" className="mr-2 text-copper" /> {member.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
