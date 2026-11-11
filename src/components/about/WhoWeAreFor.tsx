import { Accent, AboutEyebrow, AboutHeading, Tag } from './shared'

// TODO(PGC): confirm current connect group names and that both are active.
const stats = [
  { value: '18–40', text: 'The age range of our core young-adult community.' },
  { value: '2', text: "Connect groups: Sistah's Connect and Brotherhood." },
  { value: '1', text: 'Mission: to help a generation grow spiritually and boldly follow Christ.' },
]

export default function WhoWeAreFor() {
  return (
    <section className="grid grid-cols-1 bg-ink-2 md:grid-cols-2">
      <div className="px-12 pt-[64px] md:px-[52px] md:pt-[88px] md:pb-[90px]">
        <AboutEyebrow>Who we are for</AboutEyebrow>
        <AboutHeading className="md:text-[28px]">
          For the <Accent>in-between</Accent> years <br className="hidden md:inline" />
          and everything they hold.
        </AboutHeading>
        <div className="mt-5 max-w-[370px] space-y-[16px] text-[11px] leading-[1.9] text-cream/50 md:space-y-[14px] md:text-[10px]">
          <p>
            Whether you’re finding your feet in your career or working through a season of change, there is room to grow
            here. We are very keen on building meaningful friendships and learning more about faith and purpose.
          </p>
          <p>
            Our core community is young adults aged 18–40, but we welcome people who are willing to grow with us in
            Christ. Wherever you are starting from, you can take your next step with a community that values faith,
            honesty, and belonging.
          </p>
        </div>
        <div className="mt-6">
          {/* TODO(PGC): confirm this is the intended reference. */}
          <Tag>Galatians 3:28</Tag>
        </div>
      </div>

      <div className="px-12 pt-[64px] pb-[96px] md:border-l md:border-line-dark md:pt-[52px] md:pr-[50px] md:pb-[52px] md:pl-[53px]">
        {stats.map((s, i) => (
          <div
            key={s.value}
            className={`py-[36px] md:flex md:items-center md:gap-3 md:py-[30px] ${i === 1 ? 'md:border-b md:border-line-dark' : ''}`}
          >
            <p className="shrink-0 font-serif text-[30px] leading-none text-cream md:min-w-[110px] md:text-[36px]">{s.value}</p>
            <p className="mt-4 max-w-[300px] text-[11px] leading-[1.7] text-cream/45 md:mt-0 md:max-w-none md:text-[9.5px]">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
