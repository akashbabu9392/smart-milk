import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import InnovativeShoppingSection from '@/components/InnovativeShoppingSection'
import FeaturesSection from '@/components/FeaturesSection'
import AppScreenshotsSection from '@/components/AppScreenshotsSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-milkyway-dark">
      <Navbar />
      <HeroSection />
      <WhyChooseUsSection />
      <InnovativeShoppingSection />
      <FeaturesSection />
      <AppScreenshotsSection />
      <TestimonialsSection />
    </main>
  )
}
