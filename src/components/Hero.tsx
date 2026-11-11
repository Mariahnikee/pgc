import { Link } from 'react-router-dom'
import { bibleStudy, location, sundayGathering } from '../content/site'
import { Button, ImageSlot } from './ui'

const tickerItems = [sundayGathering, bibleStudy, location, 'Live on YouTube + Instagram']

export default function Hero() {
  return (
    <section id="top">
      <div className="relative h-[540px] overflow-hidden md:h-[621px]">
        <ImageSlot
          alt="Worship service at PGC"
          placeholder="radial-gradient(ellipse at 50% 30%, #6b6b6b 0%, #3a3a3a 45%, #161616 100%)"
          className="absolute inset-0 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/90" />

        {/* Headline block appears in the mobile frame only */}
        <div className="relative px-8 pt-[70px] md:hidden">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/60 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-cream/80">
            <span aria-hidden className="text-[6px]">●</span>A peculiar generation
          </span>
          <h1 className="mt-3 font-serif text-[27px] leading-[1.2] text-cream">
            A chosen generation. <em className="text-gold-light">A holy nation.</em>
            <br />
            Boldly following Christ.
          </h1>
          <p className="mt-3 max-w-[300px] text-[10px] leading-[1.5] text-cream/70">
            PGC is a home for young adults navigating faith, career, relationships, and purpose. We grow in Christ while
            building genuine community and learning to live out our faith every day.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <Button href="/contact#visit" variant="peach" className="px-5 py-3 text-[9px]">
              Plan Your Visit
            </Button>
            <Link to="/sermons" className="text-[9px] font-medium text-cream">
              Watch a Sermon
            </Link>
          </div>
        </div>

        <blockquote className="absolute bottom-[40px] right-[30px] max-w-[260px] text-right md:bottom-[30px] md:right-[103px]">
          <p className="font-serif text-[11px] italic leading-[1.55] text-cream/80 md:text-[12px]">
            “But you are a chosen generation,
            <br />a royal priesthood, a holy nation,
            <br />
            His own special people…”
          </p>
          <cite className="mt-1.5 block font-mono text-[8px] not-italic uppercase tracking-[0.18em] text-gold">
            1 Peter 2:9
          </cite>
        </blockquote>
      </div>

      <div className="overflow-hidden bg-peach py-[11px] text-ink">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <li key={i} className="flex items-center font-mono text-[9px] uppercase tracking-[0.18em]">
                  <span className="px-[26px]">{item}</span>
                  <span aria-hidden className="text-[8px]">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
