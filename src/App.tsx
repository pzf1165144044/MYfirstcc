import GradientBg from './components/GradientBg'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import MarqueeSection from './sections/MarqueeSection'

export default function App() {
  return (
    <main style={{ overflowX: 'clip' }}>
      <GradientBg />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <MarqueeSection />
    </main>
  )
}
