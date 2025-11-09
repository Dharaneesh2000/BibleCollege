import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
  ];

  const maxIndex = testimonials.length - 2; // Show 2 cards at a time

  const handlePrev = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : 0);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev < maxIndex ? prev + 1 : maxIndex);
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <div className="w-[94px] h-[7px] bg-white mb-6"></div>
            <h2 className="text-[38px] font-[700] mb-6 text-white">Testimonials</h2>
            <p className="text-[18px] font-[400] text-white leading-relaxed">
              Faith Journeys Shared by Our Graduates: Empowering Leaders, Equipping Servants, and Impacting Nations for Christ
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex space-x-2">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center bg-[#ffffff33] hover:bg-[#ffffff55] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center bg-[#ffffff33] hover:bg-[#ffffff55] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
            style={{ transform: `translateX(-${currentIndex * 51}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-3"
                style={{ width: '49%' }}
              >
                <div 
                  className="p-8 relative h-full select-none"
                  style={{
                    borderRadius: '50px 50px 0px 50px',
                    border: '1px solid #FFFFFF',
                    background: '#ffffff1A',
                    boxShadow: '0px 13px 19px 0px #00000012'
                  }}
                >
                  {/* Quote icon */}
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-[#E7E7E7]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849H0V3h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849H14V3h10z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-[18px] font-normal text-white mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-600 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{testimonial.author}</h4>
                      <p className="text-gray-300 text-xs">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
