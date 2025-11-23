import { useState } from "react";
import GITMail from "/images/GITMail.png";
import GITPhone from "/images/GITPhone.png";
import GITHome from "/images/GITHome.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    courseType: "",
    select: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-16 text-white relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/GetInTouch.png"
          alt="Get in Touch Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-0"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-[38px] font-[700] mb-5 text-white">
              Get in touch with us
            </h2>
            <p className="text-[18px] font-[400] mb-8 text-white leading-relaxed">
              Everything you need to know about our Bible College, programs,
              admissions, and life on campus — all in one place.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 pb-4 border-b border-gray-600">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#FFFFFF1A" }}
                >
                  <img
                    src={GITMail}
                    alt="Email Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <p className="text-[22px] font-medium text-white">
                    johnruban10@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 pb-4 border-b border-gray-600">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#FFFFFF1A" }}
                >
                  <img
                    src={GITPhone}
                    alt="Phone Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <p className="text-[22px] font-medium text-white">
                    +91 97912 37955
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#FFFFFF1A" }}
                >
                  <img
                    src={GITHome}
                    alt="Address Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <p className="text-[22px] font-medium text-white">
                    No. 24, Gandhi Street<span className="hidden lg:inline"><br /></span> Anna Nagar, Chennai - 600040 Tamil
                    Nadu, India
                  </p>
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
                  style={{ color: "#00000099" }}
                >
                  <option value="">Select</option>
                  <option value="bachelor">Bachelor of Theology</option>
                  <option value="master">Master of Divinity</option>
                  <option value="certificate">Certificate Program</option>
                </select>
              </div>

              <button
                type="submit"
                className="group w-full bg-bible-blue text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors duration-300"
                style={{ backgroundColor: "#15133D" }}
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-2">
                  Schedule a call
                </span>
                <ArrowRightAltIcon className="opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
