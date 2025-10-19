const CourseOverview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Course Overview</h2>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            The Bachelor of Theology is a 3 to 4-year undergraduate degree designed for individuals seeking a deeper understanding of Christian faith, scripture, and ministry. This program provides a strong foundation in biblical studies, systematic theology, church history, ethics, and pastoral care, equipping students with the knowledge and skills required for leadership in Christian ministry and related fields. Students also develop critical thinking, preaching, teaching, and counseling abilities while gaining practical insights into mission work, community service, and spiritual development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Academic Focus */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-bible-blue rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Academic Focus</h3>
              </div>
              <p className="text-gray-700">
                Bible studies, systematic theology, church history, and Christian ethics form the core of our academic curriculum, providing students with comprehensive theological knowledge and critical thinking skills.
              </p>
            </div>

            {/* Practical Training */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-bible-gold rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Practical Training</h3>
              </div>
              <p className="text-gray-700">
                Hands-on ministry experience, pastoral care training, and community service opportunities prepare students for real-world ministry challenges and effective Christian leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseOverview
