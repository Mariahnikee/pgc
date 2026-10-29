import { Button, Pill } from './ui'

export default function Give() {
  return (
    <section id="give" className="bg-cream px-8 py-[64px] text-center text-ink md:py-[118px]">
      <Pill tone="light">Give</Pill>
      <h2 className="mx-auto mt-[18px] max-w-[340px] font-serif text-[26px] leading-[1.15] md:max-w-[600px] md:text-[44px] md:leading-[1.2]">
        Generosity is worship. Give toward what God is building at PGC.
      </h2>
      <p className="mx-auto mt-3 max-w-[290px] text-[8px] leading-[1.6] text-muted-light md:mt-[18px] md:max-w-[340px] md:text-[10px]">
        Every gift goes directly toward ministry, outreach and creating a home for this generation.
      </p>
      <Button variant="dark" href="/give" className="mt-[22px] px-6 py-3 text-[9px] md:mt-[16px] md:px-[18px] md:py-[11px]">
        Give Online
      </Button>
    </section>
  )
}
