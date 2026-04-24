# memory.md

## 2026-04-24

- Initialized a new TypeScript website project for TDS using React + Vite.
- Replaced the default boilerplate with a multi-page construction design company website structure.
- Built reusable UI and section components for homepage, listing pages, and detail pages.
- Added routing for Home, About, Services, Service Detail, Projects, Project Detail, News, News Detail, Careers, Career Detail, and Contact.
- Established a visual system aligned to TDS positioning: architectural, technical, functional, and modern.
- Added reusable cards, breadcrumbs, page hero, filter chips, related links, detail feature components, showcase panels, and editorial quote blocks.
- Completed multiple UI polish passes to improve commercial readiness and consistency across list/detail pages.
- Added Docker support with `Dockerfile`, `docker-compose.yml`, nginx config, container name `tds-website`, and serving on port `4004`.
- Refined copy across the site to sound more premium, user-facing, and less like internal design notes.
- Added real imagery into `public/assets` and integrated it into hero, about, news, contact, and project sections.
- Expanded service, project, news, and career detail pages with richer concrete content such as scope, FAQ, outcomes, gallery items, takeaways, and responsibilities.
- Upgraded the homepage with additional premium enterprise sections including capability strip, trust signals, hero insights, enterprise showcase, insight metrics, and leadership statement.
- Redesigned the homepage hero into a large premium image banner with text overlay, improved page transitions and hover/micro-interactions, and refined visual harmony across homepage/detail sections.
- Added more content-specific imagery for services, news, related cards, and richer project detail galleries, while tightening typography rhythm and spacing across the site.
- Simplified the homepage by removing excess sections, reducing copy density, trimming hero/about/sector content, and keeping only the strongest core sections for a cleaner premium presentation.
- Shortened copy across core pages and `siteData.ts` so content stays clearer, lighter, and easier to scan while preserving the main message.
- Verified production build successfully after the latest changes.
- Restored short descriptive subtexts for homepage main section headings and rewrote long titles/copy into shorter, cleaner wording instead of removing descriptions entirely.
- Rebalanced homepage/site motion: standardized more sections to scroll-reveal behavior, added gentle page-enter transition, and restored richer hover/image micro-interactions so the site feels polished again.
- Removed the homepage "Lĩnh vực công trình" and "Giá trị cốt lõi" sections to keep the landing page tighter and more focused.
- Fixed horizontal overflow so the site fits viewport width cleanly without unwanted sideways scrolling, mainly by making the premium hero use safe full-width container sizing instead of raw 100vw offset tricks.
- Enhanced homepage hero motion with layered entrance animation, glow effect, floating aside cards, and staggered hero insight reveal for a more premium feel.
- Unified inner-page heroes with background-image banners and shortened hero copy across About, Services, Projects, News, Careers, and Contact for a cleaner, more concise presentation.
- Saved a full premium-direction checklist and content/UI guidance to `musthave.md` so future refinements can follow one consistent standard.
- Continued the premium refactor by aligning detail-page heroes to the same background-image style and shortening detail hero copy across services, projects, news, and careers.
- Added a clearer trust-signals block near the top of the homepage to foreground TDS core capabilities in a more premium, business-like way.
- Upgraded Contact and Footer sections to feel more premium and business-ready by clarifying consultation flow, tightening contact guidance, and restructuring the footer around brand, capabilities, navigation, and service scope.
- Continued tightening homepage/content copy by shortening service, project, process, and supporting section text to sound more concise, direct, and premium.
- Started reducing template-like repetition across inner pages by tightening About/News/Careers copy and adding more visual hierarchy to project, news, and job listing cards.
- Refined Services, News, and Careers listing pages together: services now use a more editorial split layout, while news/careers gained intro blocks and stronger hierarchy to feel less like simple catalog grids.
- Tightened typography/spacing tokens, shortened long copy in service/project/news detail views, and added a dedicated trust-data band as a placeholder structure for real company metrics to strengthen credibility later.
- Refined that trust-data band to stay honest about placeholders, while further tightening detail-page hierarchy, article spacing, and compact summary cards to better match the premium rules in `musthave.md`.
- Continued the premium polish pass by reducing homepage repetition between trust sections, simplifying detail-page labels, and tightening editorial wording to stay more restrained and corporate.
- Fixed a route-change reveal bug: scroll-reveal now re-initializes on pathname changes and immediately reveals already-in-viewport content, preventing sections from staying hidden until manual refresh while keeping the existing motion style.
