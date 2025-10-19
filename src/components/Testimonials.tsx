const Testimonials = () => {
  const testimonials = [
    {
      text: "The theological education I received at Word Bible College has transformed my understanding of ministry and equipped me with practical skills that I use every day in my pastoral work.",
      author: "John Doe",
      title: "Alumni, Class of 2023"
    },
    {
      text: "The faculty's dedication to both academic excellence and spiritual formation created an environment where I could grow intellectually and spiritually. I'm grateful for this transformative experience.",
      author: "Sarah Johnson",
      title: "Alumni, Class of 2022"
    },
    {
      text: "Word Bible College provided me with a solid foundation in biblical studies and practical ministry skills. The community here is supportive and the education is world-class.",
      author: "Michael Chen",
      title: "Alumni, Class of 2023"
    }
  ]

  return (
    <section className="section-padding bg-bible-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-xl">What Our Students Say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="text-6xl text-bible-gold mb-4">"</div>
              <p className="text-lg mb-6 italic">
                {testimonial.text}
              </p>
              <div className="border-t border-white border-opacity-20 pt-4">
                <h4 className="font-semibold text-lg">
                  {testimonial.author}
                </h4>
                <p className="text-bible-gold">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <button className="w-3 h-3 bg-white rounded-full"></button>
          <button className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></button>
          <button className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
