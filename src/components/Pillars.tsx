import { pillarRefs } from '../content/site'
import { Container, Eyebrow, SectionHeading } from './ui'

const pillars = [
  {
    tag: '01 / Follow Christ',
    title: 'Follow Christ',
    body: 'We follow the example of Jesus through Scripture, prayer, discipleship, and a growing life of faith.',
    ref: pillarRefs.followChrist,
  },
  {
    tag: '02 / Fellowship',
    title: 'Fellowship',
    body: 'Faith was never meant to be lived alone. We build godly relationships with one another marked by encouragement, support, and accountability.',
    ref: pillarRefs.fellowship,
  },
  {
    tag: '03 / Fulfill Purpose',
    title: 'Fulfill Purpose',
    body: 'We help one another recognize and develop the gifts and callings of God upon our lives.',
    ref: pillarRefs.fulfillPurpose,
    highlight: true,
  },
  {
    tag: '04 / Have Fun',
    title: 'Have Fun Doing It',
    body: 'We believe following Jesus can be joyful and life-giving. We make room for friendship, celebration, and shared experiences as we grow.',
    ref: pillarRefs.haveFun,
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
            We bring biblical faith into our everyday walk with Christ, our relationships, our calling, and the way we
            live. These four pillars shape how we grow together.
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
