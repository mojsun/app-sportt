import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
// import { IoMdMenu } from "react-icons/io";
import PropTypes from "prop-types";
// import { NavDropdown } from "react-bootstrap";

Header.propTypes = {
  variant: PropTypes.object,
};

export default function Header() {
  // const { variant } = props;
  // const navigate = useNavigate();
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(props?.variant);
  return (
    <>
      <div id="header" className="position-sticky ">
        <div className="under-development text-white">
          Website Under Development
        </div>
        <div className="main-header">
          <div className="logo">
            <Link to="/">
              <img
                src="/assets/img/logos/logo-header.png"
                alt="LOGO"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="links">
            {/* <NavDropdown title="Find Your Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

            <NavLink to="/under-construction">Find Your Solutions</NavLink>
            <NavLink to="/under-construction">Resources</NavLink>
            <NavLink to="/about-us">About US</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </div>
          <div className="login">
            <Link to="under-construction" className="login-btn">
              Log In
            </Link>
            <Link to="under-construction" className="btn signup-btn">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
