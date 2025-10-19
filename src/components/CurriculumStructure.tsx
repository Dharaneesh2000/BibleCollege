const CurriculumStructure = () => {
  const years = [
    {
      year: "1st year",
      title: "Foundations of Theology & Scripture",
      topics: []
    },
    {
      year: "2nd year", 
      title: "Advanced Biblical & Practical Studies",
      topics: [
        "Introduction to the Old Testament",
        "Introduction to the New Testament", 
        "Basics of Christian Theology",
        "Life and Ministry of Jesus Christ",
        "History of Christianity (Early Church)",
        "Christian Spiritual Formation"
      ]
    },
    {
      year: "3rd year",
      title: "Advanced Biblical & Practical Studies",
      topics: []
    },
    {
      year: "4th year",
      title: "Specialization & Research", 
      topics: []
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Curriculum Structure</h2>
          
          <div className="space-y-8">
            {years.map((year, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                <div className="flex items-start space-x-6">
                  {/* Year badge */}
                  <div className="flex-shrink-0">
                    <span className="inline-block bg-bible-gold text-bible-blue px-4 py-2 rounded-lg font-semibold text-sm">
                      {year.year}
                    </span>
                  </div>
                  
                  {/* Year content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {year.title}
                    </h3>
                    
                    {/* Topics list */}
                    {year.topics.length > 0 && (
                      <ul className="space-y-2">
                        {year.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-bible-blue rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurriculumStructure
