import CourseHero from './CourseHero'
import EnrollCard from './EnrollCard'

const CourseHeroWithCard = () => {
  return (
    <div className="relative">
      {/* Course Hero Section */}
      <CourseHero />
      
      {/* Enroll Card positioned to span across sections */}
      <div className="absolute top-24 right-8 w-96 z-10 hidden lg:block">
        <EnrollCard />
      </div>
    </div>
  )
}

export default CourseHeroWithCard
