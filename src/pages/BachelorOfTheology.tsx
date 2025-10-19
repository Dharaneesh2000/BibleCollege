import CourseHeroWithCard from '../components/CourseHeroWithCard'
import CourseOverview from '../components/CourseOverview'
import CurriculumStructure from '../components/CurriculumStructure'
import CourseCatalog from '../components/CourseCatalog'
import CourseRequirements from '../components/CourseRequirements'
import ContactSection from '../components/ContactSection'

const BachelorOfTheology = () => {
  return (
    <div>
      <CourseHeroWithCard />
      <CourseOverview />
      <CurriculumStructure />
      <CourseCatalog />
      <CourseRequirements />
      <ContactSection />
    </div>
  )
}

export default BachelorOfTheology
