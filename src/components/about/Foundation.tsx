import { pillarRefs } from '../../content/site'
import { Accent, AboutEyebrow, AboutHeading } from './shared'

const pillars = [
  {
    title: 'Follow Christ',
    ref: pillarRefs.followChrist,
    body: 'Jesus is at the center of our faith and life. Through Scripture, prayer, discipleship, and spiritual growth, we seek to follow His example and become more like Him.',
    label: 'Pillar One',
  },
  {
    title: 'Fellowship',
    ref: pillarRefs.fellowship,
    body: 'We were not made to walk alone. We create space for authentic relationships, mutual encouragement, and accountability as we grow together.',
    label: 'Pillar Two',
  },
  {
    title: 'Fulfill Purpose',
    ref: pillarRefs.fulfillPurpose,
    body: 'We encourage each person to recognize and develop their gifts, pursue their calling, and use what God has entrusted to them to serve others.',
    label: 'Pillar Three',
  },
  {
    title: 'Have Fun Doing It',
    ref: pillarRefs.haveFun,
    body: 'We believe Christian community can be joyful, vibrant, and life-giving. We make room for laughter, friendship, celebration, and shared experiences.',
    label: 'Pillar Four',
  },
]

export default function Foundation() {
  return (
    <section className="bg-ink px-12 pt-[64px] pb-[80px] md:pt-[105px] md:pb-[140px]">
      <AboutEyebrow>Our foundation</AboutEyebrow>
      <AboutHeading>
        Four pillars. <br className="md:hidden" />
        <Accent>One purpose.</Accent>
      </AboutHeading>
      <p className="mt-4 max-w-[440px] text-[11px] leading-[1.8] text-cream/50 md:text-[10px]">
        Our four pillars shape how we follow Jesus, care for one another, pursue our God-given purpose, and enjoy life
        together.
      </p>

      <div className="mt-10 grid grid-cols-1 border border-[#1f1d1b] md:mt-[45px] md:grid-cols-4">
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
