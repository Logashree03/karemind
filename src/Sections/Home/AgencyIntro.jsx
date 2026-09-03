import React from "react";
import "./AgencyIntro.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hospital from "../../assets/hospital1.jpg";
import ban from "../../assets/ban.png";

import {
  faHandHoldingHeart,
  faScrewdriverWrench,
  faUserGroup,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";

const AgencyIntro = () => {
  return (
    
        <section className="agency-intro">

      <div className="agency-container">

        {/* =========================
            TOP CONTENT
        ========================== */}

        <div className="intro-top">

          {/* LEFT HEADING */}
          <div className="intro-heading">

            <div className="about-label">
              <span className="about-dot"></span>
              Who We Are
              <span className="about-dot"></span>
            </div>

            <h2 style={{ color: "#331040" }}>
              <span>Redefining digital health</span> one connected
              <br />
              record at a time.
            </h2>

          </div>


          {/* MIDDLE TEXT */}
          <div className="intro-description">

            <p>
              With over 17 years of collective expertise in healthcare technology, we founded Karemind Iscripts Private Limited in 2018 to transform how hospitals, clinics and healthcare networks deliver care.
            </p>

          </div>

        </div>


        {/* =========================
            FEATURE CARDS
        ========================== */}

        <div className="feature-cards">

          {/* CARD 01 */}
          <div className="feature-card">

            <div className="feature-icon orange">
              <FontAwesomeIcon icon={faHandHoldingHeart} />
            </div>

            <div className="feature-content">

              <h3
                style={{
                  color: "#331040",
                  fontSize: "20px",
                }}
              >
                Cloud-native, always on
              </h3>

              <p>
                Access patient data securely from any facility, any device, any time.
              </p>

            </div>

          </div>


          {/* CARD 02 */}
          <div className="feature-card">

            <div className="feature-icon black">
              <FontAwesomeIcon icon={faScrewdriverWrench} />
            </div>

            <div className="feature-content">

              <h3
                style={{
                  color: "#331040",
                  fontSize: "20px",
                }}
              >
                FHIR & ABHA ready
              </h3>

              <p>
                Interoperable by design, built to India's evolving digital health standards.
              </p>

            </div>

          </div>


          {/* CARD 03 */}
          <div className="feature-card">

            <div className="feature-icon orange">
              <FontAwesomeIcon icon={faUserGroup} />
            </div>

            <div className="feature-content">

              <h3
                style={{
                  color: "#331040",
                  fontSize: "20px",
                }}
              >
                Role-based access
              </h3>

              <p>
                Every user sees exactly what their role requires — nothing more.
              </p>

            </div>

          </div>

          <div className="feature-card">

            <div className="feature-icon orange">
              <FontAwesomeIcon icon={faUserGroup} />
            </div>

            <div className="feature-content">

              <h3
                style={{
                  color: "#331040",
                  fontSize: "20px",
                }}
              >
                Role-based access
              </h3>

              <p>
                Case sheets, prescriptions and patient communication in regional languages.
              </p>

            </div>

          </div>
        </div>


        {/* =========================
            IMAGE SECTION
        ========================== */}

        <div className="intro-images">

          {/* MAIN IMAGE */}
          <div className="main-image">

            <img
              src={ban} width={58} height={58}
              alt="Digital agency team"
            />

          </div>


          {/* FLOATING VIDEO IMAGE */}
          <div className="video-image">

            <img
              src={hospital}
              alt="Agency video"
            />
          </div>

        </div>

      </div>

    </section>
   
    
  );
};

export default AgencyIntro;