import PageHero from '../components/PageHero'
import ContactForms from '../components/ContactForms'
import { Button, Eyebrow, ImageSlot, SectionHeading } from '../components/ui'
import { youtubeUrl } from '../content/site'

// Poster artwork is still to come from PGC; these tones stand in for each series' artwork.
const art = {
  ambassadors: 'linear-gradient(180deg, #6b3e22 0%, #4a2a17 50%, #2a170c 100%)',
  rest: 'linear-gradient(180deg, #b39a72 0%, #6e5636 45%, #2a1c10 100%)',
  bibleStudy: 'linear-gradient(180deg, #1a2fa0 0%, #1b2b86 55%, #4a3a20 80%, #1a1208 100%)',
  mountain: 'linear-gradient(180deg, #9a9a9a 0%, #6f6f6f 55%, #2a2a2a 85%, #141414 100%)',
}

// Only verified fields are shown; `meta` holds speaker · date · duration once confirmed.
// TODO(PGC): add speakers, dates, durations and each sermon's own video link.
type Sermon = { title: string; series: string; art: keyof typeof art; meta?: string }

const identity: Sermon = { title: 'Identity Before Assignment', series: 'Identity · Purpose', art: 'ambassadors', meta: '52 min' }
const restCalled: Sermon = { title: 'Called, Not Qualified', series: 'Purpose', art: 'rest' }
const bibleTogether: Sermon = { title: 'Better Together', series: 'Fellowship', art: 'bibleStudy' }
const mountainTogether: Sermon = { title: 'Better Together', series: 'Fellowship', art: 'mountain' }

const sermons: Sermon[] = [
  identity,
  restCalled,
  bibleTogether,
  restCalled,
  restCalled,
  bibleTogether,
  mountainTogether,
  bibleTogether,
  restCalled,
  restCalled,
  bibleTogether,
  restCalled,
]

function SermonCard({ sermon }: { sermon: Sermon }) {
  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative block h-[353px] overflow-hidden md:h-[320px]"
    >
      <ImageSlot alt={`${sermon.title} sermon artwork`} placeholder={art[sermon.art]} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85" />
      <span className="absolute top-1/2 left-1/2 flex h-[36px] w-[36px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm transition-transform group-hover:scale-110">
        <svg width="8" height="10" viewBox="0 0 8 10" aria-hidden>
          <path d="M0 0l8 5-8 5z" fill="#f2ede1" />
        </svg>
      </span>
      <div className="absolute inset-x-0 bottom-0 px-5 pb-[18px]">
        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-gold-light">{sermon.series}</p>
        <h3 className="mt-1.5 font-serif text-[15px] text-cream">{sermon.title}</h3>
        {sermon.meta && <p className="mt-1 text-[9px] text-cream/60">{sermon.meta}</p>}
        <p className="mt-2 text-[8.5px] font-semibold text-cream/90 group-hover:text-peach">Watch Sermon →</p>
      </div>
    </a>
  )
}

export default function Sermons() {
  return (
    <>
      <PageHero
        src="/images/sermons-hero.jpg"
        alt="Young adults listening during a PGC service"
        imageClass="object-[50%_40%]"
        overlayClass="bg-gradient-to-b from-black/30 via-black/30 to-black/85"
        quoteClass="text-cream/75"
      />

      <section className="bg-cream pt-[67px] pb-[96px] text-ink md:pt-[96px] md:pb-[248px]">
        <div className="mx-auto w-full max-w-[843px] px-12 md:ml-[19.3%] md:px-0">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-0">
            <div>
              <Eyebrow>Sermons</Eyebrow>
              <SectionHeading className="text-[28px] md:text-[34px]">
                Grow in the Word,
                <br />
                wherever you are.
              </SectionHeading>
            </div>
            <div className="max-w-[280px] md:mt-[30px] md:max-w-[260px]">
              <p className="text-[10px] leading-[1.75] text-muted-light">
                Explore messages from Peculiar Generation Church and revisit teaching that helps you follow Christ in
                everyday life. Choose a message, make time to listen, and reflect on how you can put what you hear into
                practice.
              </p>
              <div className="mt-5 flex gap-3">
                <Button href={youtubeUrl} variant="dark" className="px-4 py-2.5 text-[9px]">
                  Watch on YouTube
                </Button>
                <Button href="/contact#visit" variant="outlineLight" className="px-4 py-2.5 text-[9px]">
                  Plan Your Visit
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-[40px] grid grid-cols-1 gap-[42px] md:mt-[75px] md:grid-cols-3 md:gap-x-[36px] md:gap-y-[37px]">
            {sermons.map((s, i) => (
              <SermonCard key={i} sermon={s} />
            ))}
          </div>
        </div>
      </section>

      <ContactForms newsletterBody="Get new sermon releases, church updates, news about upcoming events, and ways to connect with the PGC community delivered to your inbox." />
    </>
  )
}
