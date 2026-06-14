import { PhoneCall } from '@phosphor-icons/react/dist/ssr'
import type { Media, Team as TeamMember } from '@/payload-types'
import { Reveal } from './Reveal'

type TeamContent = {
  eyebrow: string
  titleLine1: string
  titleHighlight: string
}

export function Team({
  members,
  content,
}: {
  members: TeamMember[]
  content: TeamContent
}) {
  return (
    <section id="team" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-12">
        <div className="mb-20 text-center md:text-left">
          <Reveal as="h2" className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-copper">
            {content.eyebrow}
          </Reveal>
          <Reveal as="h3" delay={100} className="text-5xl uppercase leading-none text-anthracite md:text-7xl">
            {content.titleLine1}
            <br />a <span className="text-copper">{content.titleHighlight}</span>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {members.map((member, i) => {
            const image = typeof member.image === 'object' ? (member.image as Media) : null

            return (
              <Reveal
                key={member.id}
                delay={(i % 3) * 120}
                className={`group flex flex-col items-center md:items-start ${i === 1 ? 'lg:mt-16' : ''}`}
              >
                <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden bg-anthracite">
                  {image?.url && (
                    <img
                      src={image.url}
                      alt={member.name}
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  )}
                  {member.role && (
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-anthracite to-transparent p-6 pb-2">
                      <span className="bg-copper px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        {member.role}
                      </span>
                    </div>
                  )}
                </div>
                <h4 className="mb-1 text-3xl text-anthracite">{member.name}</h4>
                {member.bio && (
                  <p className="mb-4 max-w-[280px] text-center text-sm text-dark-gray/60 md:text-left">
                    {member.bio}
                  </p>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="flex items-center font-heading text-lg text-anthracite transition-colors hover:text-copper"
                  >
                    <PhoneCall weight="fill" className="mr-2 text-copper" /> {member.phone}
                  </a>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
