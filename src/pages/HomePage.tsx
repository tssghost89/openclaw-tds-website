import { AboutSnapshot } from '../components/sections/AboutSnapshot'
import { ContactCta } from '../components/sections/ContactCta'
import { FeaturedNews } from '../components/sections/FeaturedNews'
import { FeaturedProjects } from '../components/sections/FeaturedProjects'
import { HeroSection } from '../components/sections/HeroSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { RecruitmentTeaser } from '../components/sections/RecruitmentTeaser'
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
      <SectorExpertise sectors={siteData.sectors} />
      <FeaturedProjects projects={siteData.projects} />
      <ValueProposition values={siteData.values} />
      <ProcessSection steps={siteData.process} />
      <FeaturedNews posts={siteData.news} />
      <RecruitmentTeaser jobs={siteData.jobs} />
      <ContactCta cta={siteData.cta} />
    </>
  )
}
