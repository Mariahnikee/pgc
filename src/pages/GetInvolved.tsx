import PageHero from '../components/PageHero'
import SplitIntro from '../components/SplitIntro'
import GroupCard, { groupPhotos } from '../components/GroupCard'
import { Container, Eyebrow, SectionHeading } from '../components/ui'

// TODO(PGC): the design repeats two sample teams with lorem-ipsum intro copy. Replace with the real serve teams,
// their photos and descriptions once PGC provides them.
const sampleTeams = [
  {
    title: 'Ushers',
    body: 'A space for the women of PGC to grow in faith, sisterhood and purpose together.',
    photo: groupPhotos.sistahs,
  },
  {
    title: 'Brotherhood',
    body: 'Men of PGC building each other up in faith, discipline and purpose.',
    photo: groupPhotos.brotherhood,
  },
]
const teams = Array.from({ length: 5 }, () => sampleTeams).flat()

export default function GetInvolved() {
  return (
    <>
      <PageHero src="/images/about-hero-flags.jpg" alt="PGC flags outside the church" imageClass="object-[50%_35%]" />

      <SplitIntro
        eyebrow="Serve with us"
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices euismod."
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices euismod. Praesent ornare purus vel
          lorem porta, aliquam venenatis enim sodales. Ut finibus id turpis ac pretium.
        </p>
        <p>
          Phasellus ut vulputate sapien, ut luctus nisl. Suspendisse sagittis leo nulla, eu pulvinar odio aliquet eu.
          Phasellus a molestie nulla. Integer viverra lobortis semper. Suspendisse vel eros semper, molestie eros in,
          volutpat justo. Ut est tortor, auctor at varius sed, tincidunt finibus leo. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Fusce mattis quam metus, sit amet mattis massa sollicitudin ut. Proin sed purus sit
          amet enim gravida dapibus. Pellentesque accumsan erat et metus venenatis fermentum. Nulla et urna, fringilla
          vitae pellentesque eu, dictum non justo. Aliquam augue est, feugiat ac egestas et, porttitor vitae elit.
        </p>
      </SplitIntro>

      <section className="pt-[72px] pb-[96px] md:pt-[180px] md:pb-[130px]">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-0">
            <div>
              <Eyebrow className="md:text-cream/60">Get involved</Eyebrow>
              <SectionHeading>Find your people.</SectionHeading>
            </div>
            <p className="max-w-[255px] text-[10px] leading-[1.6] text-muted-dark md:mb-1">
              Connect groups meet you where you are — real conversations, real accountability.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-[24px] md:mt-[47px] md:grid-cols-2 md:gap-x-[18px] md:gap-y-[92px]">
            {teams.map((t, i) => (
              <GroupCard key={i} {...t} tag="Serve" cta="Join Team" href="/contact" />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
