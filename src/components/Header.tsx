import { Link } from 'react-router-dom'
// import Logo from '../../assets/images/Logo.png'

const Header = () => {
  return (
    <header className="text-white shadow-lg" style={{ backgroundColor: '#1E1C52' }}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/assets/images/Logo.png"
              alt="Word Bible College Logo" 
              className="w-12 h-12"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-bible-gold transition-colors duration-200">
              Admission
            </Link>
            <Link to="/academics/bachelor-of-theology" className="hover:text-bible-gold transition-colors duration-200">
              Academics
            </Link>
            <Link to="/news" className="hover:text-bible-gold transition-colors duration-200">
              Events
            </Link>
            <Link to="/faculty" className="hover:text-bible-gold transition-colors duration-200">
              Alumni
            </Link>
            <Link to="/about" className="hover:text-bible-gold transition-colors duration-200">
              About Us
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            
            {/* Apply Now Button */}
            <button className="bg-bible-white text-bible-blue px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200">
              Contact Us
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
