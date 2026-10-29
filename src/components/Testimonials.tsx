import { Container, Eyebrow, SectionHeading } from './ui'

const quotes = [
  {
    text: '“PGC gave me a place to ask hard questions about faith without judgment. I found real community here.”',
    by: 'Tomi, member since 2023',
  },
  {
    text: '“Brotherhood changed how I show up as a man of faith — in my career and at home.”',
    by: 'Femi, Brotherhood',
  },
  {
    text: '“It doesn’t feel corporate. It feels like family that happens to meet on Sundays.”',
    by: "Ada, Sistah's Connect",
  },
]

export default function Testimonials() {
  return (
    <section className="py-[64px] md:pt-[84px] md:pb-[96px]">
      <Container className="md:max-w-[880px]">
        <Eyebrow className="md:text-cream/60">In their words</Eyebrow>
        <SectionHeading>
          What this generation
          <br />
          is saying.
        </SectionHeading>

        <div className="mt-10 grid grid-cols-1 border-y border-line-dark md:mt-[38px] md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure
              key={q.by}
              className={`px-[30px] py-[44px] md:px-[30px] md:pt-[34px] md:pb-[38px] ${
                i > 0 ? 'border-t border-line-dark md:border-t-0 md:border-l' : ''
              }`}
            >
              <blockquote className="font-serif text-[14px] italic leading-[1.6] text-cream md:text-[15px] md:leading-[1.55]">{q.text}</blockquote>
              <figcaption className="mt-4 font-mono text-[8px] uppercase tracking-[0.18em] text-cream/50">— {q.by}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
