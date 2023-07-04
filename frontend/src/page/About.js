import React from "react";
import "./aboutSection.css";
import deepakSharma from "../assest/deepakSharma.jpg"
import {AiOutlineYoutube} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/d.e.e.p.a.k._sharma/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <h1>About Us</h1>

        <div>
          <div>
            <img
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={deepakSharma}
              alt="Founder"
            />
            <p>Deepak Sharma</p>
            <button onClick={visitInstagram} color="primary">
              Visit Instagram
            </button>
            <span>
              This is a Ecommerce Website.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <h2>Our Brands</h2>
            <a
              href="#"
              target="blank"
            >
              <AiOutlineYoutube className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/d.e.e.p.a.k._sharma/" target="blank">
              <AiOutlineInstagram className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;