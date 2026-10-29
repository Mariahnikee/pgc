import { Container, Eyebrow, SectionHeading } from './ui'

const pillars = [
  {
    tag: '01 / Follow Christ',
    title: 'Follow Christ',
    body: 'Spiritually following the pattern Christ laid down through His Word, discipleship, prayer and Bible study.',
    ref: 'Matthew 28:19',
  },
  {
    tag: '02 / Fellowship',
    title: 'Fellowship',
    body: "We don't do life alone. We build authentic relationships that double as support and accountability.",
    ref: 'Hebrews 10:25',
  },
  {
    tag: '03 / Fulfill Purpose',
    title: 'Fulfill Purpose',
    body: 'No one is here by mistake. We help you discover the individual purpose God created you for.',
    ref: 'Jeremiah 1:5',
    highlight: true,
  },
  {
    tag: '04 / Have Fun',
    title: 'Have Fun Doing It',
    body: 'Faith is joyful, vibrant and life-giving — never a burden, always a celebration.',
    ref: 'Psalm 16:11',
  },
]

export default function Pillars() {
  return (
    <section id="pillars" className="bg-cream py-[64px] text-ink md:pt-[97px] md:pb-[90px]">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-0">
          <div>
            <Eyebrow>What we stand on</Eyebrow>
            <SectionHeading>
              Four pillars.
              <br />
              One purpose.
            </SectionHeading>
          </div>
          <p className="max-w-[290px] text-[11px] leading-[1.6] text-muted-light md:mb-1 md:max-w-[255px] md:text-[10px]">
            We integrate biblical principles into career, leadership, finances, relationships and emotional
            wellbeing — faith that's lived, not just believed.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 border border-line-light md:mt-[47px] md:grid-cols-4">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className={`px-[30px] py-[44px] md:px-6 md:pt-[34px] md:pb-[38px] ${
                p.highlight ? 'bg-cream-2' : ''
              } ${i > 0 ? 'border-t border-line-light md:border-t-0 md:border-l' : ''}`}
            >
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-gold">{p.tag}</p>
              <h3 className="mt-[14px] font-serif text-[20px] leading-tight md:text-[17px]">{p.title}</h3>
              <p className="mt-3 text-[11px] leading-[1.75] text-muted-light md:mt-2.5 md:text-[10px]">{p.body}</p>
              <p className="mt-4 font-serif text-[10px] italic text-gold md:text-[9px]">{p.ref}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
