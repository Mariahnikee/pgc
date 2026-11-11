import { youtubeUrl } from '../content/site'
import { Button, Container, Eyebrow, ImageSlot, SectionHeading } from './ui'

type Sermon = { series: string; title: string; meta?: string; placeholder: string; featured?: boolean }

// TODO(PGC): confirm video links, speakers and dates for these sermons.
const sermons: Sermon[] = [
  {
    series: 'Ambassadors',
    title: 'Identity Before Assignment',
    meta: 'Identity · Purpose · 52 min',
    placeholder: 'linear-gradient(180deg, #6b3e22 0%, #4a2a17 50%, #2a170c 100%)',
    featured: true,
  },
  {
    series: 'Rest 2',
    title: 'Called, Not Qualified',
    placeholder: 'linear-gradient(180deg, #b39a72 0%, #6e5636 45%, #2a1c10 100%)',
  },
  {
    series: 'Bible Study',
    title: 'Better Together',
    placeholder: 'linear-gradient(180deg, #1a2fa0 0%, #1b2b86 55%, #4a3a20 80%, #1a1208 100%)',
  },
]

function PlayButton() {
  return (
    <span className="absolute left-1/2 top-1/2 flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm transition-transform group-hover:scale-105">
      <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden>
        <path d="M0 0l12 7-12 7z" fill="#2a170c" />
      </svg>
    </span>
  )
}

function SermonCard({ sermon }: { sermon: Sermon }) {
  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noreferrer"
      className={`group relative block overflow-hidden ${
        sermon.featured
          ? 'aspect-[311/365] w-full md:aspect-auto md:h-[405px] md:w-[334px]'
          : 'aspect-[240/292] w-[240px] md:aspect-auto md:h-[324px] md:w-[258px]'
      }`}
    >
      <ImageSlot alt={`${sermon.series} sermon artwork`} placeholder={sermon.placeholder} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      {sermon.featured && <PlayButton />}
      <div className="absolute inset-x-0 bottom-0 p-[22px] md:px-[22px] md:pb-[24px]">
        {sermon.meta && <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-cream/70">{sermon.meta}</p>}
        <h3 className="mt-1.5 font-serif text-[13px] text-cream">{sermon.title}</h3>
      </div>
    </a>
  )
}

export default function Sermons() {
  return (
    <section id="sermons" className="pt-[96px] pb-[72px] md:pt-[187px] md:pb-0">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow className="md:text-cream/60">Sermon archive</Eyebrow>
            <SectionHeading>
              Keep growing
              <br />
              in the Word.
            </SectionHeading>
            <p className="mt-4 max-w-[340px] text-[10px] leading-[1.7] text-muted-dark">
              Explore messages from PGC and revisit teaching at a time that works for you. Watch, reflect, and take your
              next step in following Christ.
            </p>
          </div>
          <Button href="/sermons" variant="outline" className="self-start px-4 py-2.5 text-[9px] md:mb-2 md:self-auto">
            Explore All Sermons
          </Button>
        </div>

        <div className="mt-10 flex flex-col gap-[18px] md:mt-[50px] md:flex-row md:items-start md:justify-between md:gap-0">
          {sermons.map((s) => (
            <SermonCard key={s.title} sermon={s} />
          ))}
        </div>
      </Container>
    </section>
  )
}
