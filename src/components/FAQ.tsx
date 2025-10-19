import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What programs do you offer?",
      answer: "We offer various theological programs including Bachelor of Theology, Master of Divinity, and specialized certificate programs in biblical studies, pastoral care, and Christian education."
    },
    {
      question: "How can I apply for admission?",
      answer: "You can apply online through our website, download the application form, or contact our admissions office directly. We accept applications throughout the year with specific intake periods."
    },
    {
      question: "What are the admission requirements?",
      answer: "Admission requirements vary by program. Generally, we require a high school diploma or equivalent, transcripts, letters of recommendation, and a personal statement of faith and ministry goals."
    },
    {
      question: "Do you offer scholarships or financial aid?",
      answer: "Yes, we offer various scholarship opportunities and financial aid programs to qualified students. Contact our financial aid office for detailed information about available options."
    },
    {
      question: "What is the duration of the programs?",
      answer: "Program duration varies: Bachelor of Theology is typically 4 years, Master of Divinity is 3 years, and certificate programs range from 6 months to 2 years depending on the specialization."
    },
    {
      question: "How can I contact the admissions office?",
      answer: "You can reach our admissions office by phone at +1 (123) 456-7890, email at admissions@wordbiblecollege.edu, or visit our campus during business hours."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQs</h2>
          <p className="text-xl text-gray-600">Frequently Asked Questions</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200" style={{ borderLeft: '3px solid #15133D' }}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    {openIndex === index ? (
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
