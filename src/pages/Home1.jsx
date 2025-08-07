import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import Header from "../components/Header";
import profile2 from "../assets/profile2.png";
import "boxicons/css/boxicons.min.css";
import "../styles/home1.css";
import Skills from "../components/Skills";
import ProjectSection from "../components/ProjectSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WorkSection from "../components/Worksection";
// import DesignCarousel from "../components/DesignCarousel";
// import Internship from "../components/Internship";

const Home1 = () => {
  const handleDownloadCV = () => {
    window.open("./Raghul R-2.pdf", "_blank");
  };

  return (
    <>
      <Header />
      <div className="home-content">
        <div className="home-left">
          <h1>Hi, I'm Raghul Ramakrishnan</h1>
          <h5>MERN Stack Developer | UI/UX Designer</h5>
          <p>
            I build robust web applications with seamless user experiences,
            leveraging MERN stack expertise and UI/UX design skills in Figma.
            Focused on delivering intuitive, high-quality solutions, I'm eager
            to bring fresh perspectives to a dynamic team.
          </p>

          <div className="home-buttons">
            <div className="contact-icons">
              <div className="icon">
                <a
                  href="https://www.linkedin.com/in/raghul-ram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="banner-icons"
                >
                  <i class="bx bxl-linkedin"></i>
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://github.com/raghul1217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="banner-icons"
                >
                  <i class="bx bxl-github"></i>
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://www.instagram.com/raghul_ramm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="banner-icons"
                >
                  <i class="bx bxl-instagram"></i>
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://wa.me/9345546946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="banner-icons"
                >
                  <i class="bx bxl-whatsapp"></i>
                </a>
              </div>
              {/* <div className="icon">
                <a
                  href="https://www.figma.com/@renderspark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="banner-icons"
                >
                  <i class="bx bxl-figma"></i>
                </a>
              </div> */}
            </div>

            <div className="combine-homebtn">
              <div className="home-download-cv">
                <button onClick={handleDownloadCV} className="download-btn">
                  <FontAwesomeIcon icon={faDownload} /> Download CV
                </button>
              </div>
              <div className="home-download-cv">
                
                  <a
                    href="https://www.figma.com/@renderspark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn1"
                  >
                    <FontAwesomeIcon icon={faFigma} className="figma-icon" />{" "}
                    Figma Designs
                  </a>
                
              </div>
            </div>
          </div>
        </div>

        <div className="home-right">
          <div className="img-box">
            <div className="img-item">
              <img src={profile2} alt="Profile-pic1" className="profile1" />
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <WorkSection />
      <ProjectSection />
      {/* <Internship/> */}
      {/* <DesignCarousel/> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home1;
