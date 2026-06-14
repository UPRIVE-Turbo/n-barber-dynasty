import type { Service } from '@/payload-types'

export function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="border-t-8 border-anthracite bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-12">
        <div className="mb-16 flex flex-col justify-between md:mb-24 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-xs font-bold tracking-[0.2em] text-copper">Mit nyújtunk?</h2>
            <h3 className="text-5xl uppercase leading-none text-anthracite md:text-7xl">
              Prémium
              <br />
              Kezelések.
            </h3>
          </div>
          <p className="mt-6 max-w-sm border-l-2 border-copper py-2 pl-6 font-light text-dark-gray/70 md:mt-0">
            Nem csak levágjuk a hajad. Egy élményt adunk. Precizitás, forró törülköző, minőségi
            anyagok.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-24 gap-y-12 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border-b border-anthracite/10 pb-6 transition-colors duration-300 hover:border-copper"
            >
              <div className="mb-2 flex items-baseline justify-between">
                <h4 className="text-2xl uppercase text-anthracite md:text-3xl">{service.name}</h4>
                <span className="font-heading text-2xl text-copper">{service.price}</span>
              </div>
              {service.description && (
                <p className="mb-4 pr-12 text-dark-gray/70">{service.description}</p>
              )}
              {service.duration && (
                <span className="text-xs font-medium uppercase tracking-widest text-anthracite/50">
                  Időtartam: {service.duration}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
