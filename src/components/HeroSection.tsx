const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-bible-blue to-bible-purple text-white">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="/assets/images/hero-graduation.jpg" 
          alt="Graduation celebration" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative container-custom section-padding">
        <div className="text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Word Bible College
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering students with comprehensive theological education, 
            practical ministry training, and spiritual formation for effective 
            Christian service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Apply Now
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-bible-blue">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
