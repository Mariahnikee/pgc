import type { ReactNode } from 'react'

// About-page headings and labels use a lighter, wider gutter than the home page.
export function AboutEyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-gold-light md:text-peach">{children}</p>
}

export function AboutHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`mt-3 font-serif text-[30px] leading-[1.15] text-cream ${className}`}>{children}</h2>
}

export function Accent({ children }: { children: ReactNode }) {
  return <em className="text-peach">{children}</em>
}

export function Tag({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'gold' }) {
  const colors = tone === 'gold' ? 'border-gold/60 text-gold' : 'border-cream/15 text-cream/70'
  return (
    <span className={`inline-block border px-3 py-2 text-[8px] font-medium uppercase tracking-[0.18em] ${colors}`}>
      {children}
    </span>
  )
}
