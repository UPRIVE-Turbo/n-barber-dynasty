import { Clock, MapPin, NavigationArrow, Phone } from '@phosphor-icons/react/dist/ssr'
import type { Setting } from '@/payload-types'
import { Reveal } from './Reveal'

type ContactContent = {
  titleLine1: string
  titleHighlight: string
}

export function Contact({
  settings,
  content,
}: {
  settings: Setting
  content: ContactContent
}) {
  const phones = settings.phones || []
  const hours = settings.openingHours || []

  return (
    <section id="contact" className="bg-anthracite text-white">
      <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center p-12 md:p-24">
          <Reveal as="h2" className="mb-12 text-4xl uppercase md:text-5xl">
            {content.titleLine1}
            <br />
            <span className="text-copper">{content.titleHighlight}</span>
          </Reveal>

          <Reveal delay={150} className="space-y-8">
            <div className="flex items-start">
              <MapPin className="mr-6 mt-1 text-3xl text-copper" />
              <div>
                <h4 className="mb-1 text-sm uppercase tracking-widest text-white/50">Címünk</h4>
                <p className="font-heading text-xl tracking-wide">{settings.address}</p>
              </div>
            </div>

            {hours.length > 0 && (
              <div className="flex items-start border-t border-white/10 pt-8">
                <Clock className="mr-6 mt-1 text-3xl text-copper" />
                <div>
                  <h4 className="mb-1 text-sm uppercase tracking-widest text-white/50">
                    Nyitvatartás
                  </h4>
                  {hours.map((h, i) => (
                    <div key={i} className="flex w-48 justify-between text-lg">
                      <span>{h.days}:</span> <span className="font-heading">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {phones.length > 0 && (
              <div className="flex items-start border-t border-white/10 pt-8">
                <Phone className="mr-6 mt-1 text-3xl text-copper" />
                <div>
                  <h4 className="mb-2 text-sm uppercase tracking-widest text-white/50">
                    Közvetlen Vonalak
                  </h4>
                  <ul className="space-y-2 font-heading text-lg">
                    {phones.map((p) => (
                      <li key={p.name}>
                        <span className="inline-block w-16 text-white/50">{p.name}:</span>{' '}
                        <a
                          href={`tel:${p.phone.replace(/\s/g, '')}`}
                          className="transition-colors hover:text-copper"
                        >
                          {p.phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </Reveal>
        </div>

        <Reveal className="relative h-[400px] overflow-hidden bg-[#151D20] lg:h-auto">
          {settings.mapEmbedUrl ? (
            <iframe
              src={settings.mapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Térkép - N Barber Dynasty, Kaposvár"
            />
          ) : (
            <>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                className="h-full w-full object-cover opacity-30 grayscale"
                alt="Kaposvár térkép háttér"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-sm border border-white/20 bg-anthracite/80 p-8 text-center backdrop-blur-sm">
                  <NavigationArrow className="mx-auto mb-4 text-4xl text-copper" weight="fill" />
                  <h4 className="mb-2 font-heading text-2xl">Navigáció</h4>
                  <p className="mb-6 text-sm text-white/60">
                    Az üzlet az Ady Endre utcában, könnyen megközelíthető helyen található.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Kaposvár,Ady+Endre+utca+10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-copper px-6 py-3 font-heading text-copper transition-colors hover:bg-copper hover:text-white"
                  >
                    Útvonaltervezés Google Maps-en
                  </a>
                </div>
              </div>
            </>
          )}
        </Reveal>
      </div>
    </section>
  )
}
