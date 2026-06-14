import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import type { Gallery as GalleryItem, Media } from '@/payload-types'
import { Reveal } from './Reveal'

const colSpans = ['col-span-2 row-span-2', 'col-span-1 hidden md:block', 'col-span-1', 'col-span-2 md:col-span-1', 'col-span-1 hidden md:block', 'col-span-1 hidden md:block']

type GalleryContent = {
  title: string
  facebookCtaLabel: string
  mobileCtaLabel: string
}

export function Gallery({
  items,
  content,
}: {
  items: GalleryItem[]
  content: GalleryContent
}) {
  const images = items.map((item) => ({
    src: typeof item.image === 'object' ? (item.image as Media)?.url || '' : '',
    alt: item.alt,
  }))

  return (
    <section id="gallery" className="overflow-hidden bg-anthracite py-24 text-white">
      <div className="mx-auto max-w-[1400px] px-4 md:px-12">
        <div className="mb-12 flex items-end justify-between">
          <Reveal as="h2" className="text-4xl uppercase text-white md:text-6xl">
            {content.title}
          </Reveal>
          <a
            href="https://www.facebook.com/nbarberdynasty"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link hidden items-center font-heading text-sm uppercase tracking-widest text-copper transition-colors hover:text-white md:flex"
          >
            {content.facebookCtaLabel} <ArrowUpRight className="ml-2" />
          </a>
        </div>

        <div className="grid h-auto grid-cols-2 gap-2 md:h-[600px] md:grid-cols-4 md:gap-4">
          {images.slice(0, 6).map((img, i) => (
            <Reveal key={i} delay={(i % 4) * 80} className={`overflow-hidden bg-dark-gray ${colSpans[i]}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>

        <a
          href="https://www.facebook.com/nbarberdynasty"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center border border-copper p-4 font-heading text-sm uppercase tracking-widest text-copper transition-colors hover:text-white md:hidden"
        >
          {content.mobileCtaLabel}
        </a>
      </div>
    </section>
  )
}
