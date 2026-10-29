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
        Find your <br className="md:hidden" />
        <Accent>place</Accent> <br className="md:hidden" />
        here.
      </AboutHeading>

      <div className="mt-10 grid grid-cols-1 border border-[#24211f] md:mt-[47px] md:grid-cols-[1.1fr_1fr_1fr]">
        <article className="px-[30px] pt-[40px] pb-[40px] md:pt-[42px] md:pb-[46px]">
          <CardLabel>Connect groups</CardLabel>
          <CardTitle>Small groups, real conversation.</CardTitle>
          <CardBody>Two spaces built for honest fellowship, accountability, and friendship beyond Sunday.</CardBody>
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
          <CardLabel>Serve</CardLabel>
          <CardTitle>Join a serve team.</CardTitle>
          <CardBody>Use your gifts — from media and hospitality to worship and outreach — to build something greater.</CardBody>
          <Link to="/get-involved" className={arrowLink}>
            See open teams →
          </Link>
        </article>

        <article className="border-t border-[#24211f] px-[30px] pt-[40px] pb-[40px] md:border-t-0 md:border-l md:pt-[42px]">
          <CardLabel>Support</CardLabel>
          <CardTitle>Prayer &amp; giving.</CardTitle>
          <CardBody>Submit a prayer request or give toward the vision — every seed sown fuels the mission.</CardBody>
          <Link to="/give" className={arrowLink}>
            Give or request prayer →
          </Link>
        </article>
      </div>
    </section>
  )
}
