import { Container, Eyebrow, SectionHeading } from './ui'

const events = [
  { when: 'Every Sunday · 12 noon', title: 'Sunday Gathering', body: 'Right after, there would be an after-service.' },
  { when: 'Every Wednesday · 6:00PM', title: 'Bible Study', body: 'Going deeper into scripture together.', highlight: true },
  { when: 'Every last Friday · 10:00AM', title: 'PGC URI Fellowship', body: 'A space for the women of PGC to grow together.' },
  { when: 'Every last Friday · 11:00PM', title: 'Dwell (Vigil)', body: 'New to serving? Start here.' },
]

function ArrowIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden>
      <path d="M1.5 7.5l6-6M3 1.5h4.5V6" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export default function Events() {
  return (
    <section id="events" className="pt-[64px] md:pt-[97px]">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-0">
          <div>
            <Eyebrow className="md:text-cream/60">This week at PGC</Eyebrow>
            <SectionHeading>
              Everything happening,
              <br />
              in one place.
            </SectionHeading>
          </div>
          <p className="max-w-[290px] text-[11px] leading-[1.6] text-muted-dark md:mb-1 md:max-w-[255px] md:text-[10px]">
            Vital information — services, connect groups and events — always up to date.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 border border-line-dark md:mt-[47px] md:grid-cols-4">
          {events.map((e, i) => (
            <a
              key={e.title}
              href="#events"
              className={`group block px-[30px] py-[36px] transition-colors hover:bg-ink-3 md:px-6 md:pt-[26px] md:pb-[28px] ${
                e.highlight ? 'bg-[#151312]' : ''
              } ${i > 0 ? 'border-t border-line-dark md:border-t-0 md:border-l' : ''}`}
            >
              <div className="flex items-start justify-between gap-2 text-cream/70">
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] md:tracking-[0.08em]">{e.when}</p>
                <ArrowIcon />
              </div>
              <h3 className="mt-[14px] font-serif text-[17px] leading-tight text-cream md:text-[15px]">{e.title}</h3>
              <p className="mt-2 text-[10px] leading-[1.5] text-muted-dark md:text-[9px]">{e.body}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
