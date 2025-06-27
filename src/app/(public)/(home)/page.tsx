import AboutSection from './components/about-section'
import CtaSection from './components/cta-section'
import FaqSection from './components/faq-section'
import HeroSection from './components/hero-section'
import PartnersSection from './components/partners-section'

export default function index() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <CtaSection />
      <FaqSection />
    </main>
  )
}
