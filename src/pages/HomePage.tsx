import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import AboutProgram from '../components/AboutProgram'
import OurFaculty from '../components/OurFaculty'
import NewsEvents from '../components/NewsEvents'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import ContactSection from '../components/ContactSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <AboutProgram />
      <OurFaculty />
      <NewsEvents />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </div>
  )
}

export default HomePage
