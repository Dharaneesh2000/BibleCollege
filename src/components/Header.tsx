import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="text-white shadow-lg" style={{ backgroundColor: '#1E1C52' }}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/assets/images/logo.svg" 
              alt="Word Bible College Logo" 
              className="w-12 h-12"
            />
            <span className="text-xl font-bold">Word Bible College</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-bible-gold transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="hover:text-bible-gold transition-colors duration-200">
              About Us
            </Link>
            <Link to="/academics/bachelor-of-theology" className="hover:text-bible-gold transition-colors duration-200">
              Academics
            </Link>
            <Link to="/faculty" className="hover:text-bible-gold transition-colors duration-200">
              Faculty
            </Link>
            <Link to="/news" className="hover:text-bible-gold transition-colors duration-200">
              News & Events
            </Link>
            <Link to="/contact" className="hover:text-bible-gold transition-colors duration-200">
              Contact Us
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 hover:text-bible-gold transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* User Icon */}
            <button className="p-2 hover:text-bible-gold transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            {/* Apply Now Button */}
            <button className="bg-bible-gold text-bible-blue px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
