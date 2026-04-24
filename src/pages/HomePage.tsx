import { AboutSnapshot } from '../components/sections/AboutSnapshot'
import { CapabilityStrip } from '../components/sections/CapabilityStrip'
import { ContactCta } from '../components/sections/ContactCta'
import { EnterpriseShowcase } from '../components/sections/EnterpriseShowcase'
import { FeaturedNews } from '../components/sections/FeaturedNews'
import { FeaturedProjects } from '../components/sections/FeaturedProjects'
import { HeroSection } from '../components/sections/HeroSection'
import { InsightMetrics } from '../components/sections/InsightMetrics'
import { LeadershipStatement } from '../components/sections/LeadershipStatement'
import { ProcessSection } from '../components/sections/ProcessSection'
import { RecruitmentTeaser } from '../components/sections/RecruitmentTeaser'
import { SectorExpertise } from '../components/sections/SectorExpertise'
import { ServiceExpertise } from '../components/sections/ServiceExpertise'
import { TrustSignals } from '../components/sections/TrustSignals'
import { ValueProposition } from '../components/sections/ValueProposition'
import { siteData } from '../data/siteData'

export function HomePage() {
  return (
    <>
      <HeroSection hero={siteData.hero} />
      <CapabilityStrip />
      <TrustSignals />
      <AboutSnapshot about={siteData.aboutSnapshot} />
      <ServiceExpertise services={siteData.services} />
      <EnterpriseShowcase />
      <SectorExpertise sectors={siteData.sectors} />
      <FeaturedProjects projects={siteData.projects} />
      <InsightMetrics />
      <ValueProposition values={siteData.values} />
      <LeadershipStatement />
      <ProcessSection steps={siteData.process} />
      <FeaturedNews posts={siteData.news} />
      <RecruitmentTeaser jobs={siteData.jobs} />
      <ContactCta cta={siteData.cta} />
    </>
  )
}
