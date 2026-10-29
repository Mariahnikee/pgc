import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[880px] px-12 md:px-0 ${className}`}>{children}</div>
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[9px] uppercase tracking-[0.18em] text-gold ${className}`}>{children}</p>
  )
}

export function SectionHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`mt-3 font-serif text-[30px] leading-[1.15] tracking-[-0.01em] md:text-[36px] ${className}`}>
      {children}
    </h2>
  )
}

export function Pill({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  const colors = tone === 'dark' ? 'border-cream/70 text-cream' : 'border-ink/60 text-ink'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.18em] ${colors}`}
    >
      <span aria-hidden className="text-[6px]">●</span>
      {children}
    </span>
  )
}

type ButtonVariant = 'peach' | 'dark' | 'outline'

const buttonVariants: Record<ButtonVariant, string> = {
  peach: 'bg-peach text-ink hover:bg-[#f9e5cf]',
  dark: 'bg-[#1c1a17] text-cream hover:bg-black',
  outline: 'border border-cream/15 bg-ink text-cream hover:border-cream/40',
}

export function Button({
  children,
  variant = 'peach',
  href,
  type = 'button',
  className = '',
}: {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  type?: 'button' | 'submit'
  className?: string
}) {
  const classes = `inline-flex items-center justify-center rounded-[3px] px-4 py-2.5 text-[11px] font-medium transition-colors ${buttonVariants[variant]} ${className}`
  if (href?.startsWith('/')) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  )
}

/**
 * Image slot. Photos are still to be supplied by PGC, so when `src` is omitted a tonal
 * gradient stands in at the exact size/position the design uses.
 */
export function ImageSlot({
  src,
  alt,
  placeholder,
  className = '',
}: {
  src?: string
  alt: string
  placeholder: string
  className?: string
}) {
  if (src) return <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
  return <div role="img" aria-label={alt} className={`h-full w-full ${className}`} style={{ background: placeholder }} />
}
