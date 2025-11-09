import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const NewsEvents = () => {
  const news = [
    {
      title: "Annual Theological Conference 2024",
      date: "October 26, 2023",
      description:
        "Join us for our annual theological conference featuring renowned speakers and thought-provoking discussions on contemporary issues in Christian ministry.",
      image: "/images/Events.png",
      readMore: "#",
    },
    {
      title: "New Biblical Studies Program Launch",
      date: "November 15, 2023",
      description:
        "We're excited to announce the launch of our enhanced Biblical Studies program with new courses and practical learning opportunities.",
      image: "/images/Events.png",
      readMore: "#",
    },
    {
      title: "Student Ministry Outreach Success",
      date: "December 3, 2023",
      description:
        "Our students successfully completed their community outreach program, making a positive impact in local neighborhoods.",
      image: "/images/Events.png",
      readMore: "#",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-[38px] font-[700] text-[#333333] mb-6">
              Latest News & Events
            </h2>
            <p className="text-[18px] font-[400] text-[#333333] leading-relaxed">
            Learn from dedicated mentors who are experts in their fields and passionate about your spiritual and academic growth.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-[6px] bg-[#15133D] text-[12px] font-medium text-[#ffffff]">
            View All <ChevronRightIcon style={{ color: "#ffffff" }} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-[12px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-[15px]">
                <div className="aspect-video overflow-hidden rounded-[12px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-[12px]"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[18px] font-semibold text-[#1A2633] mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-bible-gold font-medium mb-3">{item.date}</p>
                <p className="text-[14px] font-normal text-[#333333] mb-4 line-clamp-3">
                  {item.description}
                </p>
                <a
                  href={item.readMore}
                  className="text-bible-blue font-medium hover:text-bible-purple transition-colors duration-200"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
