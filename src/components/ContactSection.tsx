import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    courseType: '',
    select: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="section-padding text-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="/images/GetInTouch.png" 
          alt="Get in Touch Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in touch with us</h2>
            <p className="text-xl mb-8 text-gray-300">
              Everything you need to know about our Bible College, programs, admissions, and life on campus — all in one place.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 pb-4 border-b border-gray-600">
                <div className="w-12 h-12 border border-white border-opacity-30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white">johnruban10@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 pb-4 border-b border-gray-600">
                <div className="w-12 h-12 border border-white border-opacity-30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white">+91 97912 37955</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 border border-white border-opacity-30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <p className="text-white">No. 24, Gandhi Street Anna Nagar, Chennai - 600040 Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bible-blue focus:border-transparent"
                  placeholder="Name"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bible-blue focus:border-transparent"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bible-blue focus:border-transparent"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bible-blue focus:border-transparent"
                  placeholder="Message"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  id="courseType"
                  name="courseType"
                  value={formData.courseType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bible-blue focus:border-transparent"
                  placeholder="What type of course"
                />
              </div>

              <div>
                <select
                  id="select"
                  name="select"
                  value={formData.select}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bible-blue focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="bachelor">Bachelor of Theology</option>
                  <option value="master">Master of Divinity</option>
                  <option value="certificate">Certificate Program</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-bible-blue text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200"
              >
                Schedule a call
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
