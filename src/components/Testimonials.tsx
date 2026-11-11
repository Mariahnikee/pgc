import { testimonies } from '../content/site'
import { Container, Eyebrow, SectionHeading } from './ui'

// Hidden until PGC supplies approved testimonies (see src/content/site.ts).
export default function Testimonials() {
  if (testimonies.length === 0) return null

  return (
    <section className="py-[64px] md:pt-[84px] md:pb-[96px]">
      <Container className="md:max-w-[880px]">
        <Eyebrow className="md:text-cream/60">In their words</Eyebrow>
        <SectionHeading>
          Testimonies from
          <br />
          the PGC community.
        </SectionHeading>

        <div className="mt-10 grid grid-cols-1 border-y border-line-dark md:mt-[38px] md:grid-cols-3">
          {testimonies.map((t, i) => (
            <figure
              key={i}
              className={`px-[30px] py-[44px] md:px-[30px] md:pt-[34px] md:pb-[38px] ${
                i > 0 ? 'border-t border-line-dark md:border-t-0 md:border-l' : ''
              }`}
            >
              <blockquote className="font-serif text-[14px] italic leading-[1.6] text-cream md:text-[15px] md:leading-[1.55]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 font-mono text-[8px] uppercase tracking-[0.18em] text-cream/50">
                — {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
