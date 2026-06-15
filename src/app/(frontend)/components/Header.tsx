'use client'

import { useState } from 'react'
import { List, X } from '@phosphor-icons/react/dist/ssr'

const links = [
  { href: '#services', label: 'Szolgáltatások' },
  { href: '#team', label: 'Csapat' },
  { href: '#gallery', label: 'Galéria' },
  { href: '#contact', label: 'Kapcsolat' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-anthracite/90 px-6 py-4 backdrop-blur-md md:px-12">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <a href="#" className="group flex flex-col text-white outline-none">
          <span className="font-heading text-2xl leading-none tracking-wider md:text-3xl group-hover:text-copper transition-colors">
            N BARBER
          </span>
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-copper">
            Dynasty
          </span>
        </a>

        <nav className="hidden items-center space-x-8 text-sm font-medium uppercase tracking-widest text-white/80 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link hover:text-copper transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="btn-shine hidden items-center justify-center border border-copper px-6 py-3 font-heading uppercase tracking-wide text-copper transition-all duration-300 hover:bg-copper hover:text-white active:scale-95 md:inline-flex"
        >
          Időpontfoglalás
        </a>

        <button
          onClick={() => setOpen(true)}
          className="text-3xl text-white hover:text-copper md:hidden"
          aria-label="Menü megnyitása"
        >
          <List />
        </button>
      </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-anthracite transition-transform duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 text-3xl text-white hover:text-copper"
          aria-label="Menü bezárása"
        >
          <X />
        </button>
        <nav className="flex flex-col items-center space-y-8 text-center font-heading text-2xl text-white">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-copper transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-8 bg-copper px-8 py-4 text-xl uppercase leading-none text-white"
          >
            Foglalás
          </a>
        </nav>
      </div>
    </>
  )
}
