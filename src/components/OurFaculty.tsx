const OurFaculty = () => {
  const faculty = [
    {
      name: "Sam Matthews",
      title: "Founder",
      image: "/assets/images/OurFaculty.png"
    },
    {
      name: "Sam Matthews",
      title: "Founder",
      image: "/assets/images/OurFaculty.png"
    },
    {
      name: "Sam Matthews",
      title: "Founder",
      image: "/assets/images/OurFaculty.png"
    },
    {
      name: "Sam Matthews",
      title: "Founder",
      image: "/assets/images/OurFaculty.png"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h2>
          <p className="text-xl text-gray-600">Learn from dedicated mentors who are experts in their fields and passionate about your spiritual and academic growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {faculty.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Add name overlay at bottom with padding */}
                <div className="absolute bottom-2 left-2 right-2 bg-white bg-opacity-90 p-3 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Add Filament.png outside the last card */}
          <div className="absolute -top-2 -right-2 z-10">
            <img 
              src="/assets/images/Filment.png" 
              alt="Filament" 
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurFaculty
