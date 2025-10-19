
const CourseHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-bible-blue to-bible-purple text-white min-h-screen flex items-center">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Course info */}
          <div className="lg:col-span-3">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bachelor of Theology
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              The Bachelor of Theology (BTh) is an undergraduate academic degree designed for individuals seeking a deeper understanding of Christian theology, biblical studies, church history, and missiology. This comprehensive program provides students with a solid foundation in theological knowledge and practical ministry skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-bible-gold text-bible-blue hover:bg-yellow-500">
                4 years
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-bible-blue">
                Hybrid
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-bible-blue">
                Bachelor of Theology (B.Th.)
              </button>
            </div>
          </div>

          {/* EnrollCard or image space */}
          <div className="lg:col-span-2">
            {/* Space for the EnrollCard positioned absolutely */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CourseHero;
