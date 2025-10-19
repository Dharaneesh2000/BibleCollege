const AboutProgram = () => {
  const highlights = [
    "Biblical Studies & Theology",
    "Pastoral Leadership & Ministry",
    "Worship & Creative Arts",
    "Apologetics & Worldview",
    "Community Development"
  ]

  return (
    <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#15133D' }}>
      {/* Improved slanted top edge */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white transform -skew-y-2 origin-top-left z-10"></div>
      
      {/* Main content with slanting design */}
      <div className="relative pt-24 pb-16" style={{ backgroundColor: '#15133D' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-4xl font-bold mb-8">About the Program</h2>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-white">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Video player */}
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl relative">
                {/* Video placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
                  {/* YouTube icon in top-left */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>Watch video on youtube</span>
                  </div>
                  
                  {/* Large play button */}
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 cursor-pointer">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Decorative dotted lines - L shape in top-right corner with rounded edges */}
              <div className="absolute -top-7 -right-7 w-20 h-20">
                {/* Horizontal dotted line with rounded ends */}
                <div className="absolute top-4 left-4 w-12 h-1 bg-white opacity-70 rounded-full" style={{
                  background: 'repeating-linear-gradient(to right, white 0px, white 4px, transparent 4px, transparent 8px)',
                  backgroundSize: '8px 1px'
                }}></div>
                {/* Vertical dotted line with rounded ends */}
                <div className="absolute top-4 right-4 w-1 h-12 bg-white opacity-70 rounded-full" style={{
                  background: 'repeating-linear-gradient(to bottom, white 0px, white 4px, transparent 4px, transparent 8px)',
                  backgroundSize: '1px 8px'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProgram
