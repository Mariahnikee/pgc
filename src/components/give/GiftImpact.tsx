import { Container, Eyebrow } from '../ui'

// TODO(PGC): keep "Fulfill Purpose" only if these programs are active and funded this way.
const areas = [
  { pillar: 'Follow Christ', text: 'Worship gatherings, discipleship, Bible study, and resources that support spiritual growth.' },
  { pillar: 'Fellowship', text: 'Connect groups and community opportunities that help people build meaningful relationships.' },
  {
    pillar: 'Fulfill Purpose',
    text: 'Mentorship and development opportunities that help young adults grow in their gifts and calling.',
  },
  {
    pillar: 'Have Fun Doing It',
    text: 'Shared experiences and community activities that make room for joy, friendship, and belonging.',
  },
]

export default function GiftImpact() {
  return (
    <section className="bg-ink pt-[64px] pb-[72px] md:pt-[95px] md:pb-[91px]">
      <Container>
        <Eyebrow>Where your gift goes</Eyebrow>
        <h2 className="mt-2 max-w-[275px] font-serif text-[20px] leading-[1.35] text-cream md:mt-3 md:max-w-[545px] md:text-[36px] md:leading-[1.08]">
          Your generosity supports the work of PGC.
        </h2>
        <p className="mt-4 max-w-[460px] text-[11px] leading-[1.75] text-cream/50 md:text-[11px]">
          Your giving helps sustain the life and mission of the church. It supports the spaces where we worship, grow in
          Scripture, build community, and encourage young adults to pursue their God-given purpose.
        </p>

        <div className="mt-[32px] grid grid-cols-1 border border-line-dark md:mt-[44px] md:grid-cols-4 md:border-x-0">
          {areas.map((a, i) => (
            <div
              key={a.pillar}
              className={`px-[24px] pt-[32px] pb-[40px] md:px-[22px] md:pt-[34px] md:pb-[34px] ${
                i > 0 ? 'border-t border-line-dark md:border-t-0 md:border-l' : ''
              }`}
            >
              <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-cream/70 md:text-[9px]">{a.pillar}</p>
              <p className="mt-[14px] font-serif text-[14px] italic leading-[1.6] text-cream md:mt-[22px] md:text-[14px] md:leading-[1.5]">
                {a.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
