import { Button } from '../ui'
import { Accent } from './shared'

export default function VisitCta() {
  return (
    <section className="bg-ink px-[57px] py-[64px] md:flex md:items-center md:justify-between md:px-12 md:py-[86px]">
      <h2 className="font-serif text-[24px] leading-[1.3] text-cream md:text-[30px] md:leading-[1.2]">
        Ready to see what <br className="md:hidden" />
        <Accent>peculiar</Accent>
        <br />
        looks like in person?
      </h2>
      <div className="mt-8 flex gap-3 md:mt-0">
        <Button href="#visit" variant="peach" className="px-4 py-3 text-[9px] md:py-2.5">
          Plan Your Visit
        </Button>
        <Button href="/sermons" variant="outline" className="px-6 py-3 text-[9px] md:px-4 md:py-2.5">
          Watch a Sermon
        </Button>
      </div>
    </section>
  )
}
