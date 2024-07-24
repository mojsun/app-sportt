import "./UnderConstruction.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
export default function UnderConstruction() {
  const navigate = useNavigate();
  return (
    <main id="under-construction">
      <section className="header">
        <img
          src="/assets/img/logos/logo-header.png"
          alt="LOGO"
          className="img-fluid"
        />
      </section>
      <section className="main">
        <img
          src="/assets/img/under-construction/under-construction.png"
          alt="LOGO"
          className="img-fluid"
        />
        <span className="text">This Page is Under Construction</span>
        <div className="btn mt-4" onClick={() => navigate("/")}>
          <FaArrowLeft className="me-3" />
          Back to Home
        </div>
      </section>
    </main>
  );
}
