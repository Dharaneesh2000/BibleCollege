const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L19 7L14.74 12.74L20 13L13.74 18.74L19 19L12 24L10.91 17.74L5 19L9.26 13.26L4 13L10.26 7.26L5 7L12 2Z"/>
        </svg>
      ),
      title: "Biblical Foundation",
      description: "Our programs are recognized globally, opening doors to international opportunities.",
      color: "bg-orange-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
        </svg>
      ),
      title: "Global Mission Focus",
      description: "Enhance your career prospects with our industry-focused curriculum.",
      color: "bg-green-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14L9 11L12 8L15 11L12 14ZM12 2L9 5L12 8L15 5L12 2ZM12 16L9 19L12 22L15 19L12 16ZM12 10L9 7L12 4L15 7L12 10Z"/>
        </svg>
      ),
      title: "Vibrant Community",
      description: "Learn from leading experts and practitioners in your field.",
      color: "bg-blue-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z"/>
        </svg>
      ),
      title: "Expert Faculty",
      description: "Engage with cutting-edge research and real-world projects.",
      color: "bg-purple-500"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why GWBC is Your Best Choice?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
            Discover an education that informs your mind, transforms your heart, and prepares you for impactful service. 
            </p>
          </div>

          {/* Right side - Feature cards */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
