import SplitIntro from '../SplitIntro'
import { Tag } from './shared'

export default function AboutIntro() {
  return (
    <SplitIntro eyebrow="About PGC" heading="A place to grow in Christ and become who God has called you to be.">
      <p>
        Peculiar Generation Church is a spiritual home for young adults ages 18–40 navigating faith, career,
        relationships, identity, and purpose. We exist to help this generation grow in Christ while building meaningful
        community, discovering their calling, and living out their faith in the world around them.
      </p>
      <p>
        We bring biblical principles about leadership, career development, finances, relationships, and emotional
        well-being into everyday life. We believe faith is meant to shape more than what happens inside a church
        building; it should influence how we live and relate to others.
      </p>
      <p>
        At PGC, we take God seriously without taking ourselves too seriously. We want to grow in truth, build genuine
        relationships, and make room for the joy that comes with following Jesus.
      </p>
      <div className="pt-2">
        {/* TODO(PGC): confirm the intended passage range and preferred translation. */}
        <Tag tone="gold">Jeremiah 1:5 · Romans 8:28–30</Tag>
      </div>
    </SplitIntro>
  )
}
