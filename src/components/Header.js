import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/brati_logo.png" alt="BRATI Trust Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/get-involved">Get Involved</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/our-work">Our Work in Action</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
