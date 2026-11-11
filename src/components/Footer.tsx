import { Link } from 'react-router-dom'
import { bibleStudy, location, sundayGathering } from '../content/site'
import { Container, Pill } from './ui'

type FooterLink = { label: string; to?: string }

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Explore',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Sermons', to: '/sermons' },
      { label: 'Get Involved', to: '/get-involved' },
      { label: 'Give', to: '/give' },
      { label: 'Merch' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Prayer Request', to: '/contact#prayer' },
      { label: 'Plan Your Visit', to: '/contact#visit' },
      { label: 'Events Calendar', to: '/#events' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Visit',
    links: [{ label: location }, { label: sundayGathering }, { label: bibleStudy }],
  },
]

const socials = ['Instagram', 'YouTube', 'TikTok']

const linkClass = 'text-[11px] text-cream/50 md:text-[9px]'

export default function Footer() {
  return (
    <footer className="bg-black pt-[64px] pb-[40px] md:pt-[80px] md:pb-[36px]">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-0">
          <div>
            <Pill>Merch · Coming soon</Pill>
            <p className="mt-3 font-serif text-[28px] leading-[1.15] text-cream md:text-[46px] md:leading-[1.1]">
              A peculiar generation,
              <br />
              boldly following
              <br />
              Christ.
            </p>
          </div>

          <div className="flex flex-col gap-10 md:mt-1 md:flex-row md:gap-[44px]">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-cream/80">{col.title}</p>
                <ul className="mt-4 space-y-[13px] md:mt-[9px] md:space-y-[9px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.to ? (
                        <Link to={l.to} className={`${linkClass} transition-colors hover:text-cream`}>
                          {l.label}
                        </Link>
                      ) : (
                        <span className={linkClass}>{l.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[56px] flex flex-col gap-3 border-line-dark md:flex-row md:items-center md:justify-between md:border-t md:pt-[30px]">
          <p className="text-[10px] text-cream/50 md:text-[8px]">© 2026 Peculiar Generation Church. All rights reserved.</p>
          <ul className="flex gap-7 md:gap-6">
            {socials.map((s) => (
              <li key={s}>
                <a href="#top" className="text-[10px] text-cream/50 transition-colors hover:text-cream md:text-[8px]">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
