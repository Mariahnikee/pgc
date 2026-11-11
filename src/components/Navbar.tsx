import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Give', href: '/give' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 bg-[#151515]">
      <nav className="relative flex h-[58px] items-center justify-between px-8 md:px-10">
        <Link to="/" aria-label="Peculiar Generation Church — home">
          <img src="/images/pgc-logo.png" alt="PGC" className="h-[42px] w-auto md:h-[42px]" />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.href} className="text-[11px] text-cream/70 transition-colors hover:text-cream">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact#visit"
          className="hidden rounded-[3px] border border-cream/15 bg-ink px-4 py-2 text-[11px] font-medium text-cream transition-colors hover:border-cream/40 md:inline-flex"
        >
          Plan Your Visit
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[4px] md:hidden"
        >
          <span className="h-px w-[18px] bg-cream/70" />
          <span className="h-px w-[18px] bg-cream/70" />
          <span className="h-px w-[18px] bg-cream/70" />
        </button>
      </nav>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 bg-white text-[#141414] md:hidden">
          <div className="flex h-[58px] items-center justify-end px-4">
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-[18px] px-[10px] pt-1">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.href} onClick={() => setOpen(false)} className="text-[15px] leading-[19px]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-[10px] pt-[22px]">
            <Link
              to="/contact#visit"
              onClick={() => setOpen(false)}
              className="flex h-[42px] w-full items-center justify-center rounded-[4px] bg-[#1c1a17] text-[15px] font-medium text-white"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
