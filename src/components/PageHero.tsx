import { ImageSlot } from './ui'

/** Short grayscale photo banner with the Luke 6:38 quote, used at the top of inner pages. */
export default function PageHero({
  src,
  alt,
  imageClass = '',
  overlayClass = 'bg-black/15',
  quoteClass = 'text-gold-light/70',
}: {
  src: string
  alt: string
  imageClass?: string
  overlayClass?: string
  quoteClass?: string
}) {
  return (
    <section className="relative h-[369px] overflow-hidden md:h-[323px]">
      <ImageSlot src={src} alt={alt} placeholder="#6b6b6b" className={`absolute inset-0 grayscale ${imageClass}`} />
      <div className={`absolute inset-0 ${overlayClass}`} />
      <blockquote className="absolute right-[24px] bottom-[24px] max-w-[220px] text-right md:right-[50px] md:bottom-[28px]">
        <p className={`font-serif text-[10px] italic leading-[1.55] ${quoteClass}`}>
          “Give, and it will be given to you: good measure, pressed down, shaken together, and running over.”
        </p>
        <cite className="mt-1 block font-mono text-[7px] not-italic uppercase tracking-[0.18em] text-gold-light/80">
          Luke 6:38
        </cite>
      </blockquote>
    </section>
  )
}
