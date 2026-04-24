import { AboutSnapshot } from '../components/sections/AboutSnapshot'
import { ContactCta } from '../components/sections/ContactCta'
import { EnterpriseShowcase } from '../components/sections/EnterpriseShowcase'
import { FeaturedProjects } from '../components/sections/FeaturedProjects'
import { HeroSection } from '../components/sections/HeroSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { ServiceExpertise } from '../components/sections/ServiceExpertise'
import { TrustDataBand } from '../components/sections/TrustDataBand'
import { TrustSignals } from '../components/sections/TrustSignals'
import { siteData } from '../data/siteData'

export function HomePage() {
  return (
    <>
      <HeroSection hero={siteData.hero} />
      <TrustSignals />
      <AboutSnapshot about={siteData.aboutSnapshot} />
      <ServiceExpertise services={siteData.services} />
      <EnterpriseShowcase />
      <FeaturedProjects projects={siteData.projects} />
      <TrustDataBand />
      <ProcessSection steps={siteData.process} />
      <ContactCta cta={siteData.cta} />
    </>
  )
}
