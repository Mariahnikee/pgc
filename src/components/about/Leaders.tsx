import { leaders } from '../../content/site'
import { ImageSlot } from '../ui'
import { Accent, AboutEyebrow, AboutHeading } from './shared'

// Hidden until PGC supplies approved names and bios (see src/content/site.ts).
export default function Leaders() {
  if (leaders.length === 0) return null

  return (
    <section className="bg-ink px-[38px] pt-[72px] pb-[80px] md:px-12 md:pt-[120px] md:pb-[138px]">
      <AboutEyebrow>Leadership</AboutEyebrow>
      <AboutHeading>
        Meet our <br className="md:hidden" />
        <Accent>leaders.</Accent>
      </AboutHeading>

      <div className="mt-10 grid grid-cols-1 gap-[30px] md:mt-[47px] md:grid-cols-3 md:gap-[28px]">
        {leaders.map((l) => (
          <article key={l.role} className="border border-[#1f1d1b]">
            <div className="h-[280px] md:h-[240px]">
              <ImageSlot
                src={l.photo}
                alt={`${l.name}, ${l.role}`}
                placeholder="radial-gradient(ellipse at 50% 40%, #6a6d8a 0%, #3c3f5c 55%, #23243a 100%)"
              />
            </div>
            <div className="px-[22px] pt-[22px] pb-[26px]">
              <p className="text-[7.5px] font-semibold uppercase tracking-[0.16em] text-gold-light">{l.role}</p>
              <p className="mt-2 font-serif text-[14px] text-cream">{l.name}</p>
              <p className="mt-2 text-[10.5px] leading-[1.75] text-cream/40 md:text-[9px]">{l.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
