import { useState } from "react";

const CurriculumStructure = () => {
  const [expandedYear, setExpandedYear] = useState(1);

  const years = [
    {
      year: "1st year",
      title: "Foundations of Theology & Scripture",
      topics: [],
      color: "#2B7FFF",
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
        "Christian Spiritual Formation",
      ],
      color: "#60A563",
    },
    {
      year: "3rd year",
      title: "Advanced Biblical & Practical Studies",
      topics: [],
      color: "#AD46FF",
    },
    {
      year: "4th year",
      title: "Specialization & Research",
      topics: [],
      color: "#F0B100",
    },
  ];

  return (
    <section
      className="bg-white"
      style={{ paddingTop: "0", paddingBottom: "4rem" }}
    >
      <h2
        className="mb-5"
        style={{
          fontSize: "26px",
          fontWeight: 700,
          color: "#333333",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Curriculum Structure
      </h2>

      <div style={{ background: "#F9FAFB" }} className="rounded-lg p-6">
        <div className="space-y-4">
          {years.map((yearData, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedYear(expandedYear === index ? -1 : index)
                }
                className="w-full p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="mb-3 text-left">
                      <span
                        className="text-white px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap inline-block"
                        style={{ backgroundColor: yearData.color }}
                      >
                        {yearData.year}
                      </span>
                    </div>
                    <h3
                      className="text-left whitespace-nowrap overflow-hidden text-ellipsis"
                      style={{
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "#333333",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {yearData.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform ${
                      expandedYear === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {expandedYear === index && yearData.topics.length > 0 && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <ul className="space-y-3 mt-4">
                    {yearData.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                        <span
                          style={{
                            fontSize: "18px",
                            fontWeight: 500,
                            color: "#333333",
                            fontStyle: "italic",
                            fontFamily: "Montserrat, sans-serif",
                          }}
                        >
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumStructure;
