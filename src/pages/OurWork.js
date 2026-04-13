import "../css/OurWork.css";

function OurWork() {
  const images = [
    {
      src: "/images/event1.jpg",
      caption: "Community Health Camp – March 2026",
    },
    { src: "/images/event2.jpg", caption: "Education Drive – February 2026" },
    { src: "/images/event3.jpg", caption: "Disability Support Workshop" },
    { src: "/images/event4.jpg", caption: "Volunteer Training Session" },
    { src: "/images/event5.jpg", caption: "Food Distribution Drive" },
    { src: "/images/event6.jpg", caption: "Women Empowerment Program" },
    { src: "/images/event7.jpg", caption: "Environmental Awareness Campaign" },
    { src: "/images/event8.jpg", caption: "Child Nutrition Camp" },
    { src: "/images/event9.jpg", caption: "Skill Development Workshop" },
    { src: "/images/event10.jpg", caption: "Community Clean-Up Drive" },
    {
      src: "/images/event11.jpg",
      caption: "Scholarship Distribution Ceremony",
    },
    { src: "/images/event12.jpg", caption: "Mental Health Awareness Session" },
    { src: "/images/event13.jpg", caption: "Blood Donation Camp" },
    { src: "/images/event14.jpg", caption: "Village Library Inauguration" },
    {
      src: "/images/event15.jpg",
      caption: "Festival Celebration with Children",
    },
    { src: "/images/event16.jpg", caption: "Senior Citizen Care Program" },
  ];

  return (
    <div className="our-work-page">
      <section className="our-work-header">
        <h1>Our Work in Action</h1>
        <p>
          A glimpse of BRATI Trust’s initiatives — health camps, education
          drives, and community outreach captured in action.
        </p>
      </section>

      <section className="our-work-gallery">
        {images.map((item, i) => (
          <div key={i} className="gallery-item">
            <img src={item.src} alt={item.caption} />
            <p className="caption">{item.caption}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default OurWork;
