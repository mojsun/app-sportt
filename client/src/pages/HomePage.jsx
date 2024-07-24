import { useNavigate } from "react-router";
import Main from "../layouts/Main";
import "./HomePage.css";
export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Main>
      <section id="home">
        <div className="hero">
          <img src="/assets/img/home/hero.png" alt="" className="vw-100" />
          <div className="title">
            Unleash Your Potential. <br /> Join the Appsport <br />
            Community Today!
          </div>
          <div className="sub-title">
            Athletes and coaches come together on Appsport, fostering
            connections and finding opportunities to reach the next level.{" "}
          </div>
          <div
            className="join-now-btn btn"
            onClick={() => navigate("/JoinCoach")}
          >
            Join as a Coach
          </div>
        </div>
        <div className="solutions">
          <div className="title">Find Your Solutions</div>
          <div className="cards">
            <div
              className="card-box"
              onClick={() => navigate("/under-construction")}
            >
              <img
                src="/assets/img/home/athletes.png"
                alt="athletes"
                className="img-fluid"
              />
            </div>
            <div
              className="card-box"
              onClick={() => navigate("/under-construction")}
            >
              <img
                src="/assets/img/home/coaches.png"
                alt="coaches"
                className="img-fluid"
              />
            </div>
            <div
              className="card-box"
              onClick={() => navigate("/under-construction")}
            >
              <img
                src="/assets/img/home/brands.png"
                alt="brands"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="why">
          <div className="title">Why Appsport?</div>
          <div className="sub-title">
            Unlock Your Athletic Potential and Connect with the Right
            Opportunities!
          </div>
          <div className="lead-title">Only with 4 Steps </div>
          <div className="steps">
            <div className="step">
              <div className="text">
                <div className="stitle">STEP 1</div>
                <div className="sub-stitle">Build your profile</div>
                <div className="lead-stitle">
                  Introduce yourself as a coach, athlete, or team and <br />{" "}
                  showcase your unique identity to the world.
                </div>
              </div>
              <div className="pic">
                <img
                  src="/assets/img/home/step1.png"
                  alt="brands"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="step">
              <div className="text">
                <div className="stitle">STEP 2</div>
                <div className="sub-stitle">Build your network</div>
                <div className="lead-stitle">
                  Connect with coaches and athletes you already know <br /> and
                  build new relationships{" "}
                </div>
              </div>
              <div className="pic">
                <img
                  src="/assets/img/home/step2.png"
                  alt="brands"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="step">
              <div className="text">
                <div className="stitle">STEP 3</div>
                <div className="sub-stitle">Explore opportunities</div>
                <div className="lead-stitle">
                  Uncover and exchange opportunities to play, coach,
                  <br /> and promote your team.{" "}
                </div>
              </div>
              <div className="pic">
                <img
                  src="/assets/img/home/step3.png"
                  alt="brands"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="step">
              <div className="text">
                <div className="stitle">STEP 4</div>
                <div className="sub-stitle">Connect and engage</div>
                <div className="lead-stitle">
                  Express your interest, initiate introductions, and find <br />{" "}
                  the perfect opportunities to take your journey to the <br />{" "}
                  next level.{" "}
                </div>
              </div>
              <div className="pic">
                <img
                  src="/assets/img/home/step4.png"
                  alt="brands"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="vw-100 d-flex flex-column">
          <img
            src="/assets/img/home/card1.png"
            alt=""
            className="card-page mx-auto"
          />
          <img
            src="/assets/img/home/card2.png"
            alt=""
            className="card-page mx-auto"
          />
          <img
            src="/assets/img/home/card3.png"
            alt=""
            className="card-page mx-auto"
          />
        </div>
        <div className="vw-100 d-flex join-network flex-column flex-lg-row justify-content-center align-items-center">
          <div className="first-col col-12 col-lg-6 d-flex flex-column align-items-center">
            <div className="d-flex flex-column justify-content-start">
              <span className="title">Join the Network</span>
              <span className="sub-title">
                Join the Appsport network to <br />
                discover and share opportunities.
              </span>
            </div>
          </div>
          <div className="second-col col-12 col-lg-6 d-flex flex-column align-items-center">
            <div className="d-flex flex-column">
              <select name="" id="" className="form-select mb-3">
                <option value="">I am a...</option>
                <option value="1">I am a Coach</option>
                <option value="2">I am a Athlete</option>
              </select>
              <input
                type="text"
                placeholder="Email"
                className="form-input mb-3"
              />
              <div
                className="signup-btn btn"
                onClick={() => navigate("/under-construction")}
              >
                Sign UP
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
}
