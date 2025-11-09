const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(30, 28, 82)' }} className="text-white py-6">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <img src="/images/Logo.png" alt="Word Bible College Logo" className="w-10 h-10" />
          <span className="font-bold text-lg">Word Bible College</span>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-300">
          &copy; 2024 Word Bible College of Theology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
