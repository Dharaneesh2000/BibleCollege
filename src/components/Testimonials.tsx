const Testimonials = () => {
  const testimonials = [
    {
      text: "Life-changing when I first joined, I had a passion for ministry but lacked direction. Through the dedicated mentorship of my professors, deep biblical teachings, and a strong community of believers, I discovered my calling to serve as a youth pastor.",
      author: "Robert S",
      title: "Canada"
    },
    {
      text: "The theological education I received here transformed not just my knowledge, but my entire approach to ministry. The faculty's commitment to both academic excellence and spiritual formation prepared me to lead with wisdom and compassion in my pastoral role.",
      author: "Sarah M",
      title: "United States"
    },
    {
      text: "As an international student, I was welcomed into a diverse community that enriched my understanding of global Christianity. The cross-cultural learning environment and mission focus equipped me to serve effectively in my home country.",
      author: "David K",
      title: "Nigeria"
    },
    {
      text: "The practical ministry training combined with solid biblical foundation gave me the confidence to step into leadership roles I never thought possible. The mentorship and community support were invaluable.",
      author: "Maria L",
      title: "Brazil"
    },
    {
      text: "Through rigorous academic study and hands-on ministry experience, I developed both the knowledge and character needed for effective Christian leadership. The faculty's investment in my growth was truly life-changing.",
      author: "James W",
      title: "United Kingdom"
    }
  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header with line */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="w-16 h-0.5 bg-white mb-4"></div>
            <h2 className="text-4xl font-bold mb-2 text-white">Testimonials</h2>
            <p className="text-lg text-gray-300">
              Faith Journeys Shared by Our Graduates: Empowering Leaders, Equipping Servants, and Impacting Nations for Christ
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex space-x-2">
            <button className="w-10 h-10 border border-white border-opacity-30 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors duration-200">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 border border-white border-opacity-30 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors duration-200">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial cards - horizontal scroll layout */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#1e2744] p-6 relative flex-shrink-0 w-96 border border-gray-700/50 shadow-xl"
              style={{borderRadius: '50px 50px 50px 0'}}
            >
              {/* Quote icon - inverted */}
              <div className="mb-4">
                <svg className="w-8 h-8 text-white opacity-40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849H0V3h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849H14V3h10z"/>
                </svg>
              </div>
              
              {/* Testimonial text */}
              <p className="text-sm mb-4 text-gray-300 leading-relaxed">
                {testimonial.text}
              </p>
              
              {/* Author info */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
