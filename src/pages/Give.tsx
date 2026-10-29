import PageHero from '../components/PageHero'
import ContactForms from '../components/ContactForms'
import { Container, Eyebrow, SectionHeading } from '../components/ui'
import AccountDetails from '../components/give/AccountDetails'
import GiveForm from '../components/give/GiveForm'
import GiftImpact from '../components/give/GiftImpact'

export default function Give() {
  return (
    <>
      <PageHero
        src="/images/give-hero.jpg"
        alt="Worship at PGC"
        imageClass="object-[50%_30%]"
        overlayClass="bg-gradient-to-b from-black/30 via-black/30 to-black/85"
        quoteClass="text-cream/75"
      />

      <section className="bg-cream pt-[64px] pb-[64px] text-ink md:pt-[95px] md:pb-[106px]">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-0">
            <div>
              <Eyebrow>Your giving</Eyebrow>
              <SectionHeading className="text-[26px] md:text-[34px]">
                Thanks for your
                <br />
                generosity.
              </SectionHeading>
            </div>
            <p className="max-w-[280px] text-[10px] leading-[1.75] text-muted-light md:mt-[26px] md:max-w-[222px] md:text-[11px]">
              Tribes are our outreach and fellowship community. It is church beyond church. When you join The Tower, we
              can't wait to have you.
            </p>
          </div>

          <div className="mt-[44px] md:mt-[78px] md:grid md:grid-cols-[1fr_493px] md:items-start">
            <AccountDetails />
            <GiveForm />
          </div>
        </Container>
      </section>

      <GiftImpact />
      <ContactForms />
    </>
  )
}
