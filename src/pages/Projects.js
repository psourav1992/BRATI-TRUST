import "../css/Projects.css";

function Projects() {
  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="projects-header">
        <h1>Our Programs & Initiatives</h1>
        <p>
          BRATI Trust runs impactful projects in education, healthcare, and
          community development to empower lives.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">
        <div className="project-card">
          <img src="/images/education.jpg" alt="Education Project" />
          <h3>Education for All</h3>
          <p>
            Providing learning opportunities, school supplies, and mentorship
            for underprivileged children.
          </p>
        </div>

        <div className="project-card">
          <img src="/images/health.jpg" alt="Healthcare Project" />
          <h3>Healthcare Camps</h3>
          <p>
            Organizing free medical check-ups, awareness drives, and access to
            essential medicines.
          </p>
        </div>

        <div className="project-card">
          <img src="/images/community.png" alt="Community Project" />
          <h3>Community Support</h3>
          <p>
            Helping families with resources, livelihood programs, and skill
            development workshops.
          </p>
        </div>

        <div className="project-card">
          <img src="/images/environment.jpg" alt="Environment Project" />
          <h3>Environmental Awareness</h3>
          <p>
            Promoting sustainability through tree plantation drives and clean-up
            campaigns.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Projects;
