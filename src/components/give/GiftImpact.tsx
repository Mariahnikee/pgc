import { Container, Eyebrow } from '../ui'

const areas = [
  { pillar: 'Follow Christ', text: 'Sunday gatherings, worship production, and discipleship resources.' },
  { pillar: 'Fellowship', text: 'Connect groups, community dinners, and accountability spaces.' },
  { pillar: 'Fulfill Purpose', text: 'Mentorship, career & leadership programming for young adults.' },
]

export default function GiftImpact() {
  return (
    <section className="bg-ink pt-[64px] pb-[72px] md:pt-[95px] md:pb-[91px]">
      <Container>
        <Eyebrow>Where your gift goes</Eyebrow>
        <h2 className="mt-2 max-w-[275px] font-serif text-[20px] md:max-w-[545px] leading-[1.35] text-cream md:mt-3 md:text-[36px] md:leading-[1.08]">
          Giving at PGC isn't overhead — it's poured directly into the four pillars that shape who we are.
        </h2>

        <div className="mt-[32px] grid grid-cols-1 border border-line-dark md:mt-[50px] md:grid-cols-3 md:border-x-0">
          {areas.map((a, i) => (
            <div
              key={a.pillar}
              className={`px-[24px] pt-[32px] pb-[40px] md:px-[26px] md:pt-[34px] md:pb-[34px] ${
                i > 0 ? 'border-t border-line-dark md:border-t-0 md:border-l' : ''
              }`}
            >
              <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-cream/70 md:text-[9px]">{a.pillar}</p>
              <p className="mt-[14px] font-serif text-[14px] italic leading-[1.6] text-cream md:mt-[22px] md:text-[15.5px] md:leading-[1.5]">
                {a.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
