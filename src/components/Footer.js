import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} BRATI Trust. All rights reserved.</p>
      <p>
        Follow us:
        <a href="#"> Facebook </a> |<a href="#"> Twitter </a> |
        <a href="#"> Instagram </a>
      </p>
    </footer>
  );
}

export default Footer;
