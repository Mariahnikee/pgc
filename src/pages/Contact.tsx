import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'
import ContactForms from '../components/ContactForms'
import { FormCard, PillField, fieldIcons, pillInputClass } from '../components/PillField'
import { Button, Container, Eyebrow, SectionHeading } from '../components/ui'
import { bibleStudy, location, sundayGathering } from '../content/site'

function GetInTouchForm() {
  const [sent, setSent] = useState(false)

  // No backend is wired up yet; this just confirms locally.
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div id="contact-form" className="scroll-mt-[80px]">
      <FormCard
        onSubmit={submit}
        button="Send Message"
        status={
          sent &&
          'Thank you for reaching out. Your message has been submitted. A member of the PGC team will respond as soon as possible.'
        }
        className="md:pt-[32px]"
      >
        <PillField label="Full name" icon={fieldIcons.user}>
          <input required name="name" placeholder="Input name" className={pillInputClass} />
        </PillField>
        <PillField label="Email address" icon={fieldIcons.mail}>
          <input required type="email" name="email" placeholder="Input email" className={pillInputClass} />
        </PillField>
        <PillField label="Phone number (optional)" icon={fieldIcons.phone}>
          <input type="tel" name="phone" placeholder="Input phone number" className={pillInputClass} />
        </PillField>
        <PillField label="Subject">
          <input required name="subject" placeholder="e.g. Planning a visit, prayer, serving" className={pillInputClass} />
        </PillField>
        <PillField label="Your message" multiline>
          <textarea required name="message" placeholder="Type in your message" className={`${pillInputClass} resize-none`} />
        </PillField>
      </FormCard>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        src="/images/contact-hero.jpg"
        alt="A young man in prayer at PGC"
        imageClass="object-[50%_35%]"
        overlayClass="bg-gradient-to-b from-black/30 via-black/30 to-black/85"
        quoteClass="text-cream/75"
      />

      <section className="bg-cream pt-[88px] pb-[80px] text-ink md:pt-[95px] md:pb-[106px]">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-0">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <SectionHeading className="text-[26px] md:text-[34px]">
                We’d love to <br className="hidden md:inline" />
                hear from you.
              </SectionHeading>
            </div>
            <p className="max-w-[280px] text-[10px] leading-[1.75] text-muted-light md:mt-[26px] md:max-w-[240px] md:text-[11px]">
              Have a question, want to plan a visit, need prayer, or want to get involved? Send us a message and let us
              know how we can help.
            </p>
          </div>

          <div className="mt-[64px] md:mt-[78px] md:grid md:grid-cols-[1fr_493px] md:items-start">
            <div>
              <h2 className="font-serif text-[21px] leading-[1.15] md:max-w-[240px] md:text-[34px]">Let’s connect.</h2>
              <p className="mt-[18px] max-w-[290px] text-[10px] leading-[1.8] text-muted-light md:mt-[30px] md:max-w-[250px] md:text-[11px]">
                Whether you’re reaching out for the first time or already calling PGC home, this is a place to start the
                conversation. Choose a subject and share a little about what you need so your message can be directed to
                the right person.
              </p>
            </div>
            <GetInTouchForm />
          </div>
        </Container>
      </section>

      {/* TODO(PGC): the copy doc asks to confirm who receives prayer requests and how they are handled before
          adding a privacy note here. */}
      <ContactForms prayerBody="You’re welcome to share a prayer request with the PGC team. Please include only the details you feel comfortable sharing." />

      <section id="visit" className="scroll-mt-[58px] bg-ink pt-[80px] pb-[80px] md:pt-[95px] md:pb-[90px]">
        <Container>
          <div className="md:flex md:items-end md:justify-between md:gap-10">
            <div>
              <Eyebrow>Plan your visit</Eyebrow>
              <h2 className="mt-3 font-serif text-[26px] leading-[1.2] text-cream md:mt-[14px] md:text-[34px]">
                There’s room for you here.
              </h2>
              <p className="mt-4 max-w-[420px] text-[11px] leading-[1.75] text-cream/55">
                If you’re thinking about visiting PGC, we’d be glad to welcome you. Find the gathering details and let us
                know you’re coming.
              </p>
              <ul className="mt-6 space-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-cream/80">
                <li>{location}</li>
                <li>{sundayGathering}</li>
                <li>{bibleStudy}</li>
              </ul>
            </div>
            <Button href="#contact-form" variant="peach" className="mt-8 px-5 py-3 text-[10px] md:mt-0">
              Plan Your Visit
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
