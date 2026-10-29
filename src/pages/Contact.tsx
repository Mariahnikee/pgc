import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'
import ContactForms from '../components/ContactForms'
import { FormCard, PillField, fieldIcons, pillInputClass } from '../components/PillField'
import { Container, Eyebrow, SectionHeading } from '../components/ui'

function GetInTouchForm() {
  const [sent, setSent] = useState(false)

  // No backend is wired up yet; this just confirms locally.
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <FormCard
      onSubmit={submit}
      button="Get in touch"
      status={sent && "Thanks for reaching out — we'll get back to you soon."}
      className="md:pt-[32px]"
    >
      <PillField label="Full name" icon={fieldIcons.user}>
        <input required name="name" placeholder="Input name" className={pillInputClass} />
      </PillField>
      <PillField label="Email" icon={fieldIcons.mail}>
        <input required type="email" name="email" placeholder="Input email" className={pillInputClass} />
      </PillField>
      <PillField label="Phone number" icon={fieldIcons.phone}>
        <input type="tel" name="phone" placeholder="Input phone number" className={pillInputClass} />
      </PillField>
      <PillField label="Subject" multiline>
        <textarea required name="message" placeholder="Type in your messages" className={`${pillInputClass} resize-none`} />
      </PillField>
    </FormCard>
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
                Reach out to <br className="md:hidden" />
                the <br className="hidden md:inline" />
                PGC family
              </SectionHeading>
            </div>
            <p className="max-w-[280px] text-[10px] leading-[1.75] text-muted-light md:mt-[26px] md:max-w-[225px] md:text-[11px]">
              Prayer requests, volunteering, media, or just saying hi — pick a topic and we'll route it to the right
              person.
            </p>
          </div>

          <div className="mt-[64px] md:mt-[78px] md:grid md:grid-cols-[1fr_493px] md:items-start">
            <div>
              <h2 className="font-serif text-[21px] leading-[1.15] md:max-w-[240px] md:text-[34px]">
                Let's not do this alone.
              </h2>
              <p className="mt-[18px] max-w-[290px] text-[10px] leading-[1.8] text-muted-light md:mt-[38px] md:max-w-[240px] md:text-[11px]">
                Whether you're stopping by for the first time, sending a prayer request, or just have a question — this
                is your open line to PGC. We'd genuinely love to hear from you.
              </p>
            </div>
            <GetInTouchForm />
          </div>
        </Container>
      </section>

      <section className="bg-ink pt-[80px] pb-[80px] md:pt-[95px] md:pb-[61px]">
        <Container>
          <Eyebrow>Hebrews 10:25</Eyebrow>
          <p className="mt-3 max-w-[290px] font-serif text-[21px] leading-[1.45] text-cream md:mt-[18px] md:max-w-[775px] md:text-[31px] md:leading-[1.45]">
            Whether you're stopping by for the first time, sending a prayer request, or just have a question — this is
            your open line to PGC. We'd genuinely love to hear from you.
          </p>
        </Container>
      </section>

      <ContactForms />
    </>
  )
}
