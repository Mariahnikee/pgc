import { useState, type FormEvent, type ReactNode } from 'react'
import { Button } from './ui'

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-cream/45">{label}</span>
      {children}
    </label>
  )
}

const inputClass =
  'mt-2 block w-full border-b border-line-dark bg-transparent pb-3 text-[11px] text-cream placeholder:text-cream/40 focus:border-cream/40 focus:outline-none'

function Done({ children }: { children: ReactNode }) {
  return <p className="mt-6 text-[11px] text-gold-light">{children}</p>
}

const defaultPrayerBody = 'If there is something you would like us to pray about, you can share it with our team below.'
const defaultNewsletterBody =
  'Receive PGC updates such as sermon releases, upcoming events, and news about ways to connect. We’ll send the emails directly to your inbox!'

export default function ContactForms({
  prayerBody = defaultPrayerBody,
  newsletterBody = defaultNewsletterBody,
}: {
  prayerBody?: string
  newsletterBody?: string
}) {
  const [prayerSent, setPrayerSent] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  // No backend is wired up yet; these just confirm locally.
  const submitPrayer = (e: FormEvent) => {
    e.preventDefault()
    setPrayerSent(true)
  }
  const subscribe = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <section id="contact" className="grid grid-cols-1 bg-ink-2 md:grid-cols-2">
      <form id="prayer" onSubmit={submitPrayer} className="px-8 py-[56px] md:px-[42px] md:pt-[52px] md:pb-[46px]">
        <h2 className="font-serif text-[22px] text-cream md:text-[19px]">How can we pray for you?</h2>
        <p className="mt-1.5 text-[11px] text-muted-dark md:text-[9px]">{prayerBody}</p>
        <div className="mt-6 space-y-5 md:mt-[14px] md:space-y-[18px]">
          <Field label="Your name (optional)">
            <input name="name" placeholder="Your name" className={inputClass} />
          </Field>
          <Field label="Prayer request">
            <textarea required name="request" rows={2} placeholder="Share what's on your heart…" className={`${inputClass} resize-none`} />
          </Field>
        </div>
        {prayerSent ? (
          <Done>Thank you — your prayer request has been received.</Done>
        ) : (
          <Button type="submit" variant="peach" className="mt-7 px-5 py-3 text-[10px] md:mt-[22px] md:px-[18px] md:py-[9px] md:text-[9px]">
            Send Prayer Request
          </Button>
        )}
      </form>

      <form
        onSubmit={subscribe}
        className="border-t border-line-dark px-8 py-[56px] md:border-t-0 md:border-l md:px-[42px] md:pt-[52px] md:pb-[46px]"
      >
        <h2 className="font-serif text-[22px] text-cream md:text-[19px]">Stay in the loop.</h2>
        <p className="mt-1.5 text-[11px] text-muted-dark md:text-[9px]">{newsletterBody}</p>
        <div className="mt-6 md:mt-[14px]">
          <Field label="Email address">
            <div className="flex items-end gap-3">
              <input required type="email" name="email" placeholder="Enter your email address" className={inputClass} />
              <Button type="submit" variant="outline" className="shrink-0 px-5 py-3 text-[10px] md:text-[9px]">
                Subscribe
              </Button>
            </div>
          </Field>
          {subscribed && <Done>You're on the list. Welcome!</Done>}
        </div>
        <div className="mt-8 md:mt-[24px]">
          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-cream/45">Willing to serve at PGC?</p>
          <p className="mt-2 text-[11px] text-cream/70 md:text-[10px]">
            Tell us which team you’re interested in, and we’ll proceed from there.
          </p>
        </div>
        <Button href="/get-involved" variant="outline" className="mt-5 px-5 py-3 text-[10px] md:mt-[14px] md:text-[9px]">
          Explore Serving Opportunities
        </Button>
      </form>
    </section>
  )
}
