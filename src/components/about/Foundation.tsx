import { Accent, AboutEyebrow, AboutHeading } from './shared'

const pillars = [
  {
    title: 'Follow Christ',
    ref: 'Matt 16:24',
    body: 'We follow the pattern and example Christ laid down through His Word, discipleship, prayer, Bible study, and spiritual maturity.',
    label: 'Pillar One',
  },
  {
    title: 'Fellowship',
    ref: 'Ps 133:1',
    body: 'God never intended for us to walk alone. We build authentic relationships that double as support and accountability.',
    label: 'Pillar Two',
  },
  {
    title: 'Fulfill Purpose',
    ref: 'Jer 1:5',
    body: 'No one is here by mistake. We empower every member to discover the individual purpose God created them for.',
    label: 'Pillar Three',
  },
  {
    title: 'Have Fun',
    ref: 'Ps 16:11',
    body: 'Faith should be joyful, vibrant, and life-giving — never heavy, never boring, always alive.',
    label: 'Pillar Four',
  },
]

export default function Foundation() {
  return (
    <section className="bg-ink px-12 pt-[64px] pb-[80px] md:pt-[105px] md:pb-[140px]">
      <AboutEyebrow>Our foundation</AboutEyebrow>
      <AboutHeading>
        Four pillars, <br className="md:hidden" />
        <Accent>one purpose.</Accent>
      </AboutHeading>

      <div className="mt-10 grid grid-cols-1 border border-[#1f1d1b] md:mt-[53px] md:grid-cols-4">
        {pillars.map((p, i) => (
          <article
            key={p.title}
            className={`px-6 pt-[44px] pb-[52px] md:pt-[30px] md:pb-[34px] ${
              i > 0 ? 'border-t border-[#1f1d1b] md:border-t-0 md:border-l' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <span
                aria-hidden
                className="font-serif text-[56px] leading-none text-transparent [-webkit-text-stroke:1px_var(--color-gold)]"
              >
                F
              </span>
              <span className="text-[7px] text-cream/40">{p.ref}</span>
            </div>
            <h3 className="mt-[14px] font-serif text-[17px] text-cream md:text-[15px]">{p.title}</h3>
            <p className="mt-2 text-[11px] leading-[1.8] text-cream/45 md:text-[9.5px] md:leading-[1.75]">{p.body}</p>
            <p className="mt-4 text-[7.5px] font-semibold uppercase tracking-[0.12em] text-cream/80">{p.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
