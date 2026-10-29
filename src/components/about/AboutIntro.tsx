import SplitIntro from '../SplitIntro'
import { Tag } from './shared'

export default function AboutIntro() {
  return (
    <SplitIntro
      eyebrow="About us"
      heading="Built out of a desire to help young adults discover their divine purpose and become a generation that boldly follows Christ."
    >
      <p>
        PGC serves as a spiritual home for young adults aged 18–40 navigating faith, career, relationships, identity, and
        purpose. We exist to help this generation grow spiritually, build strong community, discover their calling, and
        impact the world around them.
      </p>
      <p>
        We actively integrate biblical principles into the key areas of everyday life — career development, leadership,
        finances, relationships, and emotional well-being — because faith was never meant to stay inside a building.
      </p>
      <p>Faith, to us, is joyful, vibrant, and life-giving. We take God seriously — never ourselves too seriously.</p>
      <div className="pt-2">
        <Tag tone="gold">Jeremiah 1:5 · Romans 8:28–30</Tag>
      </div>
    </SplitIntro>
  )
}
