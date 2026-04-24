import { AboutSnapshot } from '../components/sections/AboutSnapshot'
import { ContactCta } from '../components/sections/ContactCta'
import { EnterpriseShowcase } from '../components/sections/EnterpriseShowcase'
import { FeaturedProjects } from '../components/sections/FeaturedProjects'
import { HeroSection } from '../components/sections/HeroSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { SectorExpertise } from '../components/sections/SectorExpertise'
import { ServiceExpertise } from '../components/sections/ServiceExpertise'
import { ValueProposition } from '../components/sections/ValueProposition'
import { siteData } from '../data/siteData'

export function HomePage() {
  return (
    <>
      <HeroSection hero={siteData.hero} />
      <AboutSnapshot about={siteData.aboutSnapshot} />
      <ServiceExpertise services={siteData.services} />
      <EnterpriseShowcase />
      <SectorExpertise sectors={siteData.sectors} />
      <FeaturedProjects projects={siteData.projects} />
      <ValueProposition values={siteData.values} />
      <ProcessSection steps={siteData.process} />
      <ContactCta cta={siteData.cta} />
    </>
  )
}
