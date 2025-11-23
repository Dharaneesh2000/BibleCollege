import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const CourseRequirements = () => {
  const requirements = [
    {
      icon: <SchoolOutlinedIcon sx={{ fontSize: 28, color: "#155DFC" }} />,
      title: "12th Grade Completion Certificate",
      bgColor: "#EFF6FF",
      borderColor: "#155DFC",
    },
    {
      icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 28, color: "#00A63E" }} />,
      title: "Minimum 50% aggregate marks",
      bgColor: "#F0FDF4",
      borderColor: "#00A63E",
    },
    {
      icon: <DescriptionOutlinedIcon sx={{ fontSize: 28, color: "#9810FA" }} />,
      title: "Character certificate from previous institution",
      bgColor: "#FAF5FF",
      borderColor: "#9810FA",
    },
  ];

  return (
    <section
      className="bg-white"
      style={{ paddingTop: "0", paddingBottom: "4rem" }}
      id="course-requirements"
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
        Course Requirements
      </h2>

      <div style={{ background: "#F9FAFB" }} className="rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex items-center space-x-3"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: requirement.bgColor,
                }}
              >
                {requirement.icon}
              </div>
              <p
                className="flex-1 h-14 flex items-center"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#0A0A0A",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: "1.4",
                }}
              >
                {requirement.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseRequirements;
