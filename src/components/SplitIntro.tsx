import type { ReactNode } from 'react'

/** Cream intro band: eyebrow + large heading on the left, body copy on the right (About, Get Involved). */
export default function SplitIntro({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string
  heading: ReactNode
  children: ReactNode
}) {
  return (
    <section className="bg-cream px-12 pt-[64px] pb-[72px] text-ink md:grid md:grid-cols-[385px_1fr] md:gap-[81px] md:pt-[95px] md:pr-[11.1%] md:pb-[79px] md:pl-[19.4%]">
      <div>
        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        <h1 className="mt-3 font-serif text-[23px] leading-[1.3] md:text-[34px] md:leading-[1.1]">{heading}</h1>
      </div>
      <div className="mt-8 space-y-[22px] text-[11.5px] leading-[1.85] text-muted-light md:mt-0 md:space-y-[16px] md:text-[10.5px] md:leading-[1.7]">
        {children}
      </div>
    </section>
  )
}
