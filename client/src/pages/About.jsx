// import { useNavigate } from "react-router";
import Main from "../layouts/Main";

import "./About.css";
export default function About() {
  // const navigate = useNavigate();

  return (
    <Main variant="main">
      <div id="about">
        <div className="hero">
          <img src="/assets/img/aboutus/hero.jpg" alt="" className="" />
          <div className="title">About Appsport</div>
          <div className="sub-title">
            Our tech company is dedicated to bridging the gap between players,
            coaches, and sport organizations by leveraging advanced
            technologies.{" "}
          </div>
        </div>
        <div className="info">
          <div className="title">Our platform aims to:</div>
          <div className="items row">
            <div className="item col-sm-4">
              <div className="number">1</div>
              <div className="description">
                Connect individuals and organizations based on their unique
                profiles and missions, ultimately striving to find the best
                situations for each player.
              </div>
            </div>
            <div className="item col-sm-4">
              <div className="number">2</div>
              <div className="description">
                By carefully analyzing the skills, experience, and aspirations
                of players, we ensure they are matched with coaches and
                organizations that align with their goals and playing style.
              </div>
            </div>
            <div className="item col-sm-4">
              <div className="number">3</div>
              <div className="description">
                Through our innovative algorithms and comprehensive database, we
                provide a seamless experience for players, coaches, and sport
                organizations alike.
              </div>
            </div>
            <div className="item col-sm-4">
              <div className="number">4</div>
              <div className="description">
                Players can showcase their talents, highlight their
                achievements, and articulate their objectives on our platform,
                enabling them to be discovered by coaches and organizations
                seeking specific skill sets.
              </div>
            </div>
            <div className="item col-sm-4">
              <div className="number">5</div>
              <div className="description">
                Meanwhile, coaches and organizations can access a vast pool of
                talent, filtering through profiles to identify players who
                perfectly fit their teams requirements and philosophy.
              </div>
            </div>
            <div className="item col-sm-4">
              <div className="number">6</div>
              <div className="description">
                Our ultimate aim is to facilitate mutually beneficial
                connections that propel players towards their full potential,
                while also empowering coaches and organizations to discover the
                perfect talent for their teams.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
