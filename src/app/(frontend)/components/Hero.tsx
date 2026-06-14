import { ArrowRight, CaretDown } from '@phosphor-icons/react/dist/ssr'
import { HeroBackground } from './HeroBackground'
import { Reveal } from './Reveal'

type HeroContent = {
  badge: string
  titleLine1: string
  titleHighlight: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
}

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-anthracite pb-12 pt-24 md:justify-center">
      <div className="absolute inset-0 z-0">
        <HeroBackground
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2670&auto=format&fit=crop"
          alt="Borbélyszalon belső tér"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto mt-24 w-full max-w-[1400px] px-4 md:mt-0 md:px-12">
        <div className="max-w-3xl">
          <Reveal className="mb-6 inline-block border border-copper/50 border-l-2 border-l-copper px-3 py-1 text-xs font-medium uppercase tracking-widest text-copper">
            {content.badge}
          </Reveal>

          <Reveal as="h1" delay={120} className="mb-8 text-6xl uppercase leading-[0.85] tracking-tighter text-white md:text-8xl lg:text-[10rem]">
            {content.titleLine1}
            <br />
            <span className="text-copper">{content.titleHighlight}</span>
          </Reveal>

          <Reveal as="p" delay={240} className="mb-12 max-w-xl text-lg font-light leading-relaxed text-white/70 md:text-2xl">
            {content.subtitle}
          </Reveal>

          <Reveal delay={360} className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#booking"
              className="btn-shine flex items-center justify-center bg-copper px-8 py-5 font-heading text-xl uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-anthracite active:scale-[0.98]"
            >
              {content.ctaPrimary} <ArrowRight className="ml-3 text-2xl" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center border border-white/20 bg-transparent px-8 py-5 font-heading text-xl uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/5 active:scale-[0.98]"
            >
              {content.ctaSecondary}
            </a>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 animate-bounce flex-col items-center">
        <span className="mb-2 text-xs uppercase tracking-[0.2em] text-copper/70">Görgetés</span>
        <CaretDown className="text-copper" />
      </div>
    </section>
  )
}
