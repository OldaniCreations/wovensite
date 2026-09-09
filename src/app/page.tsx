import type { Metadata } from "next"
import AboutIntro from "@/components/AboutIntro"
import ContactCTA from "@/components/ContactCTA"
import EngagementModes from "@/components/EngagementModes"
import FeaturedProof from "@/components/FeaturedProof"
import Hero from "@/components/Hero"
import HowWovenWorks from "@/components/HowWovenWorks"
import ProblemRecognition from "@/components/ProblemRecognition"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Woven Logic Studio | Complex problem-solving with Tristin",
  description:
    "Tristin works across research, strategy, design, technology, experimentation, and storytelling to help teams understand difficult problems and find a useful way through.",
}

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProblemRecognition />
        <EngagementModes />
        <HowWovenWorks />
        <FeaturedProof />
        <AboutIntro />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  )
}
