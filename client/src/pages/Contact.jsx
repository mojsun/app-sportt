// import { useNavigate } from "react-router";
import Main from "../layouts/Main";
import "./Contact.css";

export default function Contact() {
  // const navigate = useNavigate();

  return (
    <Main>
      <section id="contact">
        <div className="hero">
          <img src="/assets/img/conatctus/hero.png" alt="" className="vw-100" />
          <div className="title">Contact Appsport</div>
          <div className="sub-title">
            We are here to help! If you have any questions, suggestions, or need
            assistance, our dedicated support team is ready to assist you.
          </div>
        </div>
        <div className="contact-info">
          <div className="line">
            <b className="me-5">Phone:</b>
            <u>+1 (416) 417-5898</u>
          </div>
          <div className="line">
            <b className="me-5">Email:</b>
            <u>haniehebrahimi@yahoo.com</u>
          </div>
          <div className="line mt-4">
            Contact us via email or phone. We value your feedback and look
            <br /> forward to ensuring your experience with our platform is
            exceptional.
          </div>
        </div>
      </section>
    </Main>
  );
}
