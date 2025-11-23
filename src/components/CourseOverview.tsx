const CourseOverview = () => {
  return (
    <section className="bg-white" style={{ paddingTop: '4rem'}}>
      <h2 
        className="mb-5"
        style={{ 
          fontSize: '26px', 
          fontWeight: 700, 
          color: '#333333',
          fontFamily: 'Montserrat, sans-serif'
        }}
      >
        Course Overview
      </h2>
      <p 
        className="mb-12 leading-relaxed"
        style={{ 
          fontSize: '18px', 
          fontWeight: 400, 
          color: '#545454',
          fontFamily: 'Montserrat, sans-serif'
        }}
      >
        The Bachelor of Theology is a 3 to 4-year undergraduate degree designed for individuals seeking a deeper understanding of Christian faith, scripture, and ministry. The program provides a strong foundation in biblical studies, systematic theology, church history, ethics, and pastoral care, equipping students with the knowledge and skills required for leadership in Christian ministry and related fields.
      </p>
      <p 
        className="mb-12 leading-relaxed"
        style={{ 
          fontSize: '18px', 
          fontWeight: 400, 
          color: '#545454',
          fontFamily: 'Montserrat, sans-serif'
        }}
      >
        Students develop critical thinking, preaching, teaching, and counseling abilities while gaining practical insights into mission work, community service, and spiritual development.
      </p>
    </section>
  );
};
export default CourseOverview