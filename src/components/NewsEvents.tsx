const NewsEvents = () => {
  const news = [
    {
      title: "Annual Theological Conference 2024",
      date: "October 26, 2023",
      description: "Join us for our annual theological conference featuring renowned speakers and thought-provoking discussions on contemporary issues in Christian ministry.",
      image: "/images/Events.png",
      readMore: "#"
    },
    {
      title: "New Biblical Studies Program Launch",
      date: "November 15, 2023",
      description: "We're excited to announce the launch of our enhanced Biblical Studies program with new courses and practical learning opportunities.",
      image: "/images/Events.png",
      readMore: "#"
    },
    {
      title: "Student Ministry Outreach Success",
      date: "December 3, 2023",
      description: "Our students successfully completed their community outreach program, making a positive impact in local neighborhoods.",
      image: "/images/Events.png",
      readMore: "#"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
            <p className="text-xl text-gray-600">Stay updated with our recent activities and upcoming events.</p>
          </div>
          <button className="btn-primary">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-bible-gold font-medium mb-3">
                  {item.date}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <a 
                  href={item.readMore}
                  className="text-bible-blue font-medium hover:text-bible-purple transition-colors duration-200"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsEvents
