import { Link } from 'react-router-dom'
import { Accent, AboutEyebrow, AboutHeading } from './shared'

const groups = [
  { name: "Sistah's Connect", who: 'Women' },
  { name: 'Brotherhood', who: 'Men' },
]

function CardLabel({ children }: { children: string }) {
  return <p className="text-[7.5px] font-medium uppercase tracking-[0.16em] text-cream/50">{children}</p>
}

function CardTitle({ children }: { children: string }) {
  return <h3 className="mt-4 font-serif text-[21px] leading-tight text-cream md:text-[18px]">{children}</h3>
}

function CardBody({ children }: { children: string }) {
  return <p className="mt-3 text-[10.5px] leading-[1.8] text-cream/40 md:text-[9px] md:leading-[1.75]">{children}</p>
}

const arrowLink = 'mt-5 inline-block text-[8.5px] font-semibold text-cream transition-colors hover:text-peach'

export default function GetInvolved() {
  return (
    <section id="get-involved" className="bg-ink-2 px-12 pt-[72px] pb-[72px] md:pt-[108px] md:pb-[101px]">
      <AboutEyebrow>Get involved</AboutEyebrow>
      <AboutHeading>
        Find your <Accent>place</Accent> <br className="md:hidden" />
        in the PGC community.
      </AboutHeading>
      <p className="mt-4 max-w-[440px] text-[11px] leading-[1.8] text-cream/50 md:text-[10px]">
        There are different ways to contribute while growing. Start with the area that feels right for you.
      </p>

      <div className="mt-10 grid grid-cols-1 border border-[#24211f] md:mt-[40px] md:grid-cols-[1.1fr_1fr_1fr]">
        <article className="px-[30px] pt-[40px] pb-[40px] md:pt-[42px] md:pb-[46px]">
          <CardLabel>Connect groups</CardLabel>
          <CardTitle>Small groups. Real conversations.</CardTitle>
          <CardBody>
            Build friendships, grow in faith, and find support beyond Sunday through Sistah’s Connect and Brotherhood.
          </CardBody>
          <ul className="mt-4">
            {groups.map((g, i) => (
              <li
                key={g.name}
                className={`flex items-center justify-between py-[9px] text-[8.5px] ${i === 0 ? 'border-b border-[#2a2724]' : ''}`}
              >
                <span className="text-cream/90">{g.name}</span>
                <span className="text-[7px] text-cream/35">{g.who}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="border-t border-[#24211f] px-[30px] pt-[40px] pb-[40px] md:border-t-0 md:border-l md:pt-[42px]">
          <CardLabel>Serving</CardLabel>
          <CardTitle>Put your gifts to work.</CardTitle>
          <CardBody>
            Join hospitality, media, worship, or outreach to support the life and mission of PGC with your gifts.
          </CardBody>
          <Link to="/get-involved" className={arrowLink}>
            Explore Serving Opportunities →
          </Link>
        </article>

        <article className="border-t border-[#24211f] px-[30px] pt-[40px] pb-[40px] md:border-t-0 md:border-l md:pt-[42px]">
          <CardLabel>Prayer and giving</CardLabel>
          <CardTitle>Prayer &amp; giving.</CardTitle>
          <CardBody>
            Take part in the life of the church through prayer and generosity. Share a prayer request or give as an act
            of worship.
          </CardBody>
          <Link to="/give" className={arrowLink}>
            Prayer and Giving →
          </Link>
        </article>
      </div>
    </section>
  )
}
