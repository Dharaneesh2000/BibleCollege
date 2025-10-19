const CourseRequirements = () => {
  const requirements = [
    "12th Grade Completion Certificate",
    "Minimum 80% aggregate marks", 
    "Clearance certificate from previous institution"
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-left">
              Course Requirements
            </h2>
          
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right side - Empty space to align with card above */}
          <div className="lg:col-span-2">
            {/* This space aligns with the EnrollCard in CourseHero */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseRequirements
