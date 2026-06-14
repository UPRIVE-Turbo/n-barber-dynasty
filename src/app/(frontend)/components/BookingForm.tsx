'use client'

import { useActionState } from 'react'
import { CaretDown, Scissors } from '@phosphor-icons/react/dist/ssr'
import { submitBooking, type BookingFormState } from '../actions'
import type { Service } from '@/payload-types'
import { Reveal } from './Reveal'

const initialState: BookingFormState = { status: 'idle' }

type BookingContent = {
  title: string
  description: string
  note: string
}

export function BookingForm({
  services,
  content,
}: {
  services: Service[]
  content: BookingContent
}) {
  const [state, formAction, pending] = useActionState(submitBooking, initialState)

  return (
    <section id="booking" className="relative bg-cream py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-12">
        <Reveal className="relative border-t-4 border-copper bg-white p-8 shadow-[0_20px_50px_-15px_rgba(30,42,46,0.1)] md:p-16">
          <Scissors className="absolute right-8 top-8 text-6xl text-cream" weight="fill" />

          <div className="mb-12">
            <h2 className="mb-4 text-4xl uppercase text-anthracite md:text-6xl">
              {content.title}
            </h2>
            <p className="text-dark-gray/60">{content.description}</p>
          </div>

          <form action={formAction} className="space-y-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative border-b-2 border-anthracite/20 transition-colors focus-within:border-copper">
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-anthracite/50"
                >
                  Teljes neved
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full appearance-none bg-transparent pb-3 text-anthracite focus:outline-none"
                  placeholder="Pl. Kovács Béla"
                />
              </div>

              <div className="relative border-b-2 border-anthracite/20 transition-colors focus-within:border-copper">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-anthracite/50"
                >
                  Telefonszámod
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="block w-full appearance-none bg-transparent pb-3 text-anthracite focus:outline-none"
                  placeholder="+36 30 123 4567"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="barber"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-anthracite/50"
                >
                  Válassz Borbélyt
                </label>
                <div className="relative">
                  <select
                    id="barber"
                    name="barber"
                    required
                    defaultValue=""
                    className="block w-full cursor-pointer appearance-none border border-anthracite/10 bg-cream px-4 py-4 text-anthracite focus:outline-none focus:ring-1 focus:ring-copper"
                  >
                    <option value="" disabled>
                      Kérjük, válassz...
                    </option>
                    <option value="gabor">Gábor (Alapító, klasszikus stílus)</option>
                    <option value="oliver">Olivér (Modern textúrák)</option>
                    <option value="andrei">Andrei (Egyenes vonalak)</option>
                    <option value="any">Mindegy, aki előbb szabad</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-anthracite">
                    <CaretDown />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-anthracite/50"
                >
                  Szolgáltatás
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="block w-full cursor-pointer appearance-none border border-anthracite/10 bg-cream px-4 py-4 text-anthracite focus:outline-none focus:ring-1 focus:ring-copper"
                  >
                    <option value="" disabled>
                      Kérjük, válassz...
                    </option>
                    {services.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                        {service.duration ? ` (${service.duration})` : ''}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-anthracite">
                    <CaretDown />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="date"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-anthracite/50"
                >
                  Kívánt Dátum
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="block w-full border border-anthracite/10 bg-cream px-4 py-4 text-anthracite focus:outline-none focus:ring-1 focus:ring-copper"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="time"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-anthracite/50"
                >
                  Kívánt Időpont
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  className="block w-full border border-anthracite/10 bg-cream px-4 py-4 text-anthracite focus:outline-none focus:ring-1 focus:ring-copper"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={pending}
              className="btn-shine mt-8 w-full bg-anthracite py-6 font-heading text-xl uppercase tracking-widest text-white shadow-lg transition-colors duration-300 hover:bg-copper disabled:opacity-60"
            >
              {pending ? 'Küldés...' : 'Foglalás Beküldése'}
            </button>

            {state.status === 'success' && (
              <p className="text-center font-medium text-copper">{state.message}</p>
            )}
            {state.status === 'error' && (
              <p className="text-center font-medium text-red-600">{state.message}</p>
            )}

            <p className="mt-4 text-center text-xs text-anthracite/40">{content.note}</p>
          </form>
        </Reveal>

        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-[0.03]">
          <span className="select-none whitespace-nowrap font-heading text-[20rem] font-bold text-dark-gray">
            DYNASTY
          </span>
        </div>
      </div>
    </section>
  )
}
