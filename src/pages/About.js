import "../css/About.css";
import { useState, useEffect } from "react";
import axios from "axios";

function About() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/bratiVolunteers`) // proxy to backend
      .then((res) => setVolunteers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="about">
      {/* Vision & Mission */}
      <section className="vision">
        <h1>Our Vision & Mission</h1>
        <p>
          At BRATI Trust, our vision is to create an inclusive society where
          every individual has access to education, healthcare, and
          opportunities. Our mission is to empower communities through
          awareness, support, and sustainable programs.
        </p>
      </section>

      {/* Our Story */}
      <section className="story">
        <h2>Our Story</h2>
        <p>
          BRATI Trust was founded with the belief that small actions can create
          big changes. From grassroots initiatives to large-scale projects, we
          have been working tirelessly to uplift communities and inspire change.
        </p>
      </section>

      {/* Team Members */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/images/Piyash.jpg" alt="Team Member" />
            <h3>Piyas Chakrabarty</h3>
            <p>President</p>
          </div>
          <div className="team-card">
            <img src="/images/Suman.jpg" alt="Team Member" />
            <h3>Suman Mukherjee</h3>
            <p>Secretary</p>
          </div>
          <div className="team-card">
            <img src="/images/Preetesh.jpg" alt="Team Member" />
            <h3>Preetesh Chakroborty</h3>
            <p>Treasurer</p>
          </div>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <img src="/images/Sourav.jpg" alt="Team Member" />
            <h3>Sourav Paul</h3>
            <p>Executive Member</p>
          </div>
          <div className="team-card">
            <img src="/images/Harsh.jpg" alt="Team Member" />
            <h3>Harsh Sahoo</h3>
            <p>Executive Member</p>
          </div>
          <div className="team-card">
            <img src="/images/VP.jpg" alt="Team Member" />
            <h3>VP Singh</h3>
            <p>Executive Member</p>
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="volunteers">
        <h2>Our Volunteers</h2>
        <div className="volunteer-grid">
          {volunteers.map((v) => (
            <div key={v.id} className="volunteer-card">
              <h3>{v.fullName}</h3>
              <p>{v.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Status */}
      <section className="legal">
        <h2>Legal Status</h2>
        <p>
          BRATI Trust is a government-registered NGO under Registration No:
          IV-1902-01143/2025. We are committed to transparency and
          accountability in all our initiatives.
        </p>
      </section>

      {/* Core Values */}
      <section className="values">
        <h2>Our Core Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Compassion</li>
          <li>Community Impact</li>
          <li>Sustainability</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
