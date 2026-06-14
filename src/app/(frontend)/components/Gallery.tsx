import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import type { Gallery as GalleryItem, Media } from '@/payload-types'

const fallbackImages = [
  { src: 'https://placehold.co/1200x1200/1E2A2E/EDE8E0?text=N+Barber+Dynasty', alt: 'Borbély munka közben' },
  { src: 'https://placehold.co/600x600/2A2A2A/EDE8E0?text=Hajv%C3%A1g%C3%A1s', alt: 'Férfi hajvágás profilból' },
  { src: 'https://placehold.co/600x600/B07D3C/1E2A2E?text=Borotv%C3%A1l%C3%A1s', alt: 'Forró törülközős kezelés' },
  { src: 'https://placehold.co/600x600/1E2A2E/B07D3C?text=Szak%C3%A1ll', alt: 'Szakálligazítás részlet' },
  { src: 'https://placehold.co/600x600/2A2A2A/EDE8E0?text=Sz%C3%A1lon', alt: 'Borbélyszalon hangulatkép' },
  { src: 'https://placehold.co/600x600/B07D3C/1E2A2E?text=Stílus', alt: 'Friss frizura' },
]

const colSpans = ['col-span-2 row-span-2', 'col-span-1 hidden md:block', 'col-span-1', 'col-span-2 md:col-span-1', 'col-span-1 hidden md:block', 'col-span-1 hidden md:block']

export function Gallery({ items }: { items: GalleryItem[] }) {
  const images =
    items.length > 0
      ? items.map((item) => ({
          src: typeof item.image === 'object' ? (item.image as Media)?.url || '' : '',
          alt: item.alt,
        }))
      : fallbackImages

  return (
    <section id="gallery" className="overflow-hidden bg-anthracite py-24 text-white">
      <div className="mx-auto max-w-[1400px] px-4 md:px-12">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-4xl uppercase text-white md:text-6xl">Munkáink.</h2>
          <a
            href="https://www.facebook.com/nbarberdynasty"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center font-heading text-sm uppercase tracking-widest text-copper transition-colors hover:text-white md:flex"
          >
            Még több Facebookon <ArrowUpRight className="ml-2" />
          </a>
        </div>

        <div className="grid h-auto grid-cols-2 gap-2 md:h-[600px] md:grid-cols-4 md:gap-4">
          {images.slice(0, 6).map((img, i) => (
            <div key={i} className={`overflow-hidden bg-dark-gray ${colSpans[i]}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <a
          href="https://www.facebook.com/nbarberdynasty"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center border border-copper p-4 font-heading text-sm uppercase tracking-widest text-copper transition-colors hover:text-white md:hidden"
        >
          További munkák
        </a>
      </div>
    </section>
  )
}
