import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  // const navigate = useNavigate();

  return (
    <div id="footer" className="">
      <div className="first-col">
        <div className="logo">
          <img
            src="/assets/img/logos/logo-header.png"
            alt="LOGO"
            className="img-fluid"
          />
        </div>
        <div className="social">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="copy-right">© 2023 Appsport. All Rights Reserved</div>
      </div>
      <div className="second-col">
        <div className="first-sub-col">
          <span className="title">Explore</span>
          <Link to="under-construction">Teams</Link>
          <Link to="under-construction">Pricing</Link>
          <Link to="under-construction">Guidelines</Link>
        </div>
        <div className="second-sub-col">
          <span className="title">Company</span>
          <Link to="about-us">About Us</Link>
          <Link to="contact-us">Contact Us</Link>
          <Link to="under-construction">Legal</Link>
        </div>
        <div className="third-sub-col">
          <span className="title">Account</span>
          <Link to="under-construction">Log In</Link>
          <Link to="under-construction">Sign Up</Link>
          <Link to="under-construction">Help</Link>
        </div>
        {/* <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/contact-us">Contact</Link> */}
      </div>
    </div>
  );
}
