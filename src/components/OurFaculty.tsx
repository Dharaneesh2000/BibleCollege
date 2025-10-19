const OurFaculty = () => {
  const faculty = [
    {
      name: "Dr. John Doe",
      title: "Professor of Theology",
      image: "/assets/images/faculty-placeholder.jpg"
    },
    {
      name: "Dr. Jane Smith",
      title: "Professor of Biblical Studies",
      image: "/assets/images/faculty-placeholder.jpg"
    },
    {
      name: "Dr. Michael Johnson",
      title: "Professor of Church History",
      image: "/assets/images/faculty-placeholder.jpg"
    },
    {
      name: "Dr. Sarah Williams",
      title: "Professor of Pastoral Care",
      image: "/assets/images/faculty-placeholder.jpg"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h2>
          <p className="text-xl text-gray-600">Meet Our Experts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-bible-blue font-medium">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="btn-primary">
            View All Faculty
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurFaculty
