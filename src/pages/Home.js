import "../css/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToGetInvolved = () => {
    navigate("/get-involved"); // redirects to News page
  };
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Communities, Inspiring Change</h1>
          <p>
            BRATI Trust works to bring awareness, support, and opportunities to
            those in need.
          </p>
          <button className="cta" onClick={goToGetInvolved}>
            Get Involved
          </button>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="impact">
        <h2>Our Impact</h2>
        <div className="impact-cards">
          <div className="card">
            <h3>50+</h3>
            <p>Volunteers Engaged</p>
          </div>
          <div className="card">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="card">
            <h3>3000+</h3>
            <p>Lives Impacted</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="/images/education.jpg" alt="Education Project" />
            <h3>Education for All</h3>
            <p>
              Providing learning opportunities for underprivileged children.
            </p>
          </div>
          <div className="project-card">
            <img src="/images/health.jpg" alt="Healthcare Project" />
            <h3>Healthcare Camps</h3>
            <p>Organizing free medical check-ups and awareness drives.</p>
          </div>
          <div className="project-card">
            <img src="/images/community.png" alt="Community Project" />
            <h3>Community Support</h3>
            <p>Helping families with resources and livelihood programs.</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-banner">
        <h2>Join Us in Making a Difference</h2>
        <button className="cta" onClick={goToGetInvolved}>
          Volunteer Today
        </button>
      </section>
    </div>
  );
}

export default Home;
