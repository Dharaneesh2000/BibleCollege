const CourseHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-bible-blue to-bible-purple text-white min-h-screen flex items-center">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Course info */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bachelor of Theology
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              The Bachelor of Theology (BTh) is a undergraduate academic degree designed to individuals seeking a deeper understanding of Christian theology, biblical studies, church history, and missiology. This comprehensive program provides students with a solid foundation in theological knowledge and practical ministry skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-bible-gold text-bible-blue hover:bg-yellow-500">
                Apply
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-bible-blue">
                Brochure
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-bible-blue">
                Request more info
              </button>
            </div>
          </div>

          {/* Right side - Course details card */}
          <div className="bg-white rounded-lg shadow-2xl p-8 text-gray-900">
            {/* Certificate image */}
            <div className="mb-6">
              <img 
                src="/assets/images/certificate.jpg" 
                alt="Bachelor of Theology Certificate" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Course details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-bible-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Title</p>
                  <p className="text-gray-600">Bachelor of Theology (BTh)</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-bible-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Duration</p>
                  <p className="text-gray-600">4 Years</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-bible-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Language</p>
                  <p className="text-gray-600">English & Tamil</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-bible-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Course Type</p>
                  <p className="text-gray-600">Full-time (Residential) | On-Campus</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-bible-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Accredited</p>
                  <p className="text-gray-600">Yes</p>
                </div>
              </div>
            </div>

            {/* Enroll button */}
            <button className="w-full bg-bible-blue text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseHero
