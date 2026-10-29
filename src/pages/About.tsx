import PageHero from '../components/PageHero'
import AboutIntro from '../components/about/AboutIntro'
import Foundation from '../components/about/Foundation'
import WhoWeAreFor from '../components/about/WhoWeAreFor'
import Leaders from '../components/about/Leaders'
import GetInvolved from '../components/about/GetInvolved'
import VisitCta from '../components/about/VisitCta'

export default function About() {
  return (
    <>
      <PageHero src="/images/about-hero-flags.jpg" alt="PGC flags outside the church" imageClass="object-[50%_35%]" />
      <AboutIntro />
      <Foundation />
      <WhoWeAreFor />
      <Leaders />
      <GetInvolved />
      <VisitCta />
    </>
  )
}
