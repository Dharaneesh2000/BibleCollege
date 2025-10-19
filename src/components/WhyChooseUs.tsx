const WhyChooseUs = () => {
  const features = [
    {
      icon: "/assets/images/BiblicalFoundation.png",
      title: "Biblical Foundation",
      description: "Our programs are recognized globally, opening doors to international opportunities.",
      color: "bg-orange-500"
    },
    {
      icon: "/assets/images/GlobalMissionFocus.png",
      title: "Global Mission Focus",
      description: "Enhance your career prospects with our industry-focused curriculum.",
      color: "bg-green-500"
    },
    {
      icon: "/assets/images/vibrantCommunity.png",
      title: "Vibrant Community",
      description: "Learn from leading experts and practitioners in your field.",
      color: "bg-blue-500"
    },
    {
      icon: "/assets/images/ExpertFaculty.png",
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
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
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
