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

export default function ContactForms() {
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
      <form onSubmit={submitPrayer} className="px-8 py-[56px] md:px-[42px] md:pt-[52px] md:pb-[46px]">
        <h2 className="font-serif text-[22px] text-cream md:text-[19px]">Prayer Request</h2>
        <p className="mt-1.5 text-[11px] text-muted-dark md:text-[9px]">Our team prays over every request submitted, in confidence.</p>
        <div className="mt-6 space-y-5 md:mt-[14px] md:space-y-[18px]">
          <Field label="Full name">
            <input required name="name" placeholder="Your name" className={inputClass} />
          </Field>
          <Field label="Prayer request">
            <textarea required name="request" rows={2} placeholder="Share what's on your heart…" className={`${inputClass} resize-none`} />
          </Field>
        </div>
        {prayerSent ? (
          <Done>Thank you — our team will be praying with you.</Done>
        ) : (
          <Button type="submit" variant="peach" className="mt-7 px-5 py-3 text-[10px] md:mt-[22px] md:px-[18px] md:py-[9px] md:text-[9px]">
            Submit Request
          </Button>
        )}
      </form>

      <form
        onSubmit={subscribe}
        className="border-t border-line-dark px-8 py-[56px] md:border-t-0 md:border-l md:px-[42px] md:pt-[52px] md:pb-[46px]"
      >
        <h2 className="font-serif text-[22px] text-cream md:text-[19px]">Stay in the Loop</h2>
        <p className="mt-1.5 text-[11px] text-muted-dark md:text-[9px]">
          Get sermon drops, event updates and connect group news — no spam, ever.
        </p>
        <div className="mt-6 md:mt-[14px]">
          <Field label="Email address">
            <div className="flex items-end gap-3">
              <input required type="email" name="email" placeholder="you@email.com" className={inputClass} />
              <Button type="submit" variant="outline" className="shrink-0 px-5 py-3 text-[10px] md:text-[9px]">
                Subscribe
              </Button>
            </div>
          </Field>
          {subscribed && <Done>You're on the list. Welcome!</Done>}
        </div>
        <div className="mt-7 md:mt-[22px]">
          <Field label="Volunteer with us">
            <input name="team" placeholder="Which serve team interests you?" className={inputClass} />
          </Field>
        </div>
        <Button href="#contact" variant="outline" className="mt-6 px-5 py-3 text-[10px] md:mt-[14px] md:text-[9px]">
          Sign Up to Serve
        </Button>
      </form>
    </section>
  )
}
