const CourseCatalog = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Course Catalog</h2>
          
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src="/assets/images/pdf-icon.svg" 
                  alt="PDF Icon" 
                  className="w-8 h-8"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    GBTC Course Catalog 2023.PDF
                  </p>
                  <p className="text-gray-600">18.2 MB</p>
                </div>
              </div>
              
              <button className="bg-bible-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseCatalog
