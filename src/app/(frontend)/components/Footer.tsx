import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react/dist/ssr'
import type { Setting } from '@/payload-types'

type FooterContent = {
  copyrightText: string
}

export function Footer({
  settings,
  content,
}: {
  settings: Setting
  content: FooterContent
}) {
  return (
    <footer className="border-t border-white/5 bg-[#111A1C] py-12 text-white/50">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between px-4 md:flex-row md:px-12">
        <div className="mb-8 text-center md:mb-0 md:text-left">
          <a href="#" className="mb-4 flex flex-col text-white">
            <span className="font-heading text-xl leading-none tracking-wider">N BARBER</span>
            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-copper">
              Dynasty
            </span>
          </a>
          <p className="text-sm">
            {settings.address} &middot; {content.copyrightText}
          </p>
        </div>

        <div className="flex space-x-6 text-2xl">
          {settings.facebook && (
            <a
              href={settings.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-copper"
              aria-label="Facebook oldal"
            >
              <FacebookLogo weight="fill" />
            </a>
          )}
          {settings.instagram && (
            <a
              href={settings.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-copper"
              aria-label="Instagram oldal"
            >
              <InstagramLogo weight="fill" />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
