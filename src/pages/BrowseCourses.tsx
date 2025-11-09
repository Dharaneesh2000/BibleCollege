import { useState } from 'react'
import { Link } from 'react-router-dom'
import BOTA from '../../assets/images/BOTA.png'
import BOTB from '../../assets/images/BOTB.png'

const BrowseCourses = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const courses = [
    {
      id: 'bachelor-of-theology',
      title: 'Bachelor of Theology',
      duration: '4 years',
      image: BOTA,
      hoverImage: BOTB,
      path: '/academics/bachelor-of-theology'
    },
    {
      id: 'bachelor-of-theology-2',
      title: 'Bachelor of Theology',
      duration: '4 years',
      image: BOTB,
      hoverImage: BOTA,
      path: '/academics/bachelor-of-theology'
    },
    {
      id: 'bachelor-of-theology-3',
      title: 'Bachelor of Theology',
      duration: '4 years',
      image: BOTA,
      hoverImage: BOTB,
      path: '/academics/bachelor-of-theology'
    },
    {
      id: 'bachelor-of-theology-4',
      title: 'Bachelor of Theology',
      duration: '4 years',
      image: BOTB,
      hoverImage: BOTA,
      path: '/academics/bachelor-of-theology'
    }
  ]

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-[34px] font-[700] text-[#333333] mb-4 md:mb-0">
            Browse Courses
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012659] focus:border-transparent"
            />
          </div>
        </div>

        {/* Split Border */}
        <div className="border-t border-[#E6E6E6] mb-8"></div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              to={course.path}
              className="group border border-[#E6E6E6] rounded-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover absolute top-0 left-0 transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
                />
                <img
                  src={course.hoverImage}
                  alt={course.title}
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>

              {/* Course Info */}
              <div className="p-4">
                <h3 className="text-[22px] font-[600] text-[#333333] mb-2 transition-colors duration-300 group-hover:text-[#012659]">
                  {course.title}
                </h3>
                <div className="flex items-center text-[14px] font-[500] text-[#333333]">
                  <svg
                    className="w-4 h-4 mr-2 text-[#012659]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{course.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[18px] font-[400] text-[#636363]">
              No courses found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowseCourses
