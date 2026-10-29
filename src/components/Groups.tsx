import GroupCard, { groupPhotos } from './GroupCard'
import { Container, Eyebrow, ImageSlot, SectionHeading } from './ui'

const groups = [
  {
    title: "Sistah's Connect",
    body: 'A space for the women of PGC to grow in faith, sisterhood and purpose together.',
    photo: groupPhotos.sistahs,
  },
  {
    title: 'Brotherhood',
    body: 'Men of PGC building each other up in faith, discipline and purpose.',
    photo: groupPhotos.brotherhood,
  },
]

export default function Groups() {
  return (
    <section id="groups" className="hidden pt-[187px] pb-[105px] md:block">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow className="md:text-cream/60">Get involved</Eyebrow>
            <SectionHeading>Find your people.</SectionHeading>
          </div>
          <p className="mb-1 max-w-[255px] text-[10px] leading-[1.6] text-muted-dark">
            Connect groups meet you where you are — real conversations, real accountability.
          </p>
        </div>

        <div className="mt-[47px] grid grid-cols-2 gap-[20px]">
          {groups.map((g) => (
            <GroupCard key={g.title} {...g} tag="Connect group" cta="Join the Group" href="#contact" />
          ))}
        </div>

        <article className="relative mt-[48px] h-[379px] overflow-hidden">
          <ImageSlot
            src="/images/after-service.jpg"
            alt="After-service hangout outdoors"
            placeholder="linear-gradient(180deg, #c8a070 0%, #5f8a3a 40%, #2a3a6a 75%, #1a1a2a 100%)"
            className="absolute inset-0 saturate-[2] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
          <div className="absolute inset-x-0 bottom-0 px-[30px] pb-[30px]">
            <h3 className="font-serif text-[22px] leading-tight text-cream">After-Service</h3>
            <p className="mt-2 text-[10px] leading-[1.6] text-cream/60">
              Men of PGC building each other up in faith, discipline and purpose.
            </p>
          </div>
        </article>
      </Container>
    </section>
  )
}
