import React from "react";
import "./LogoScrolling.css";

import TitleEcg from "../../Components/Underline/TitleEcg"; 

// Client Logos
import pic from "../../assets/ClientLogo/apex.png";
import pic1 from "../../assets/ClientLogo/karuna_hospital.png";
import pic2 from "../../assets/ClientLogo/omega.png";
import pic3 from "../../assets/ClientLogo/rajaclinic.png";
import pic4 from "../../assets/ClientLogo/sree_clinc.png";

export default function LogoScrolling() {
  const clients = [pic, pic1, pic2, pic3, pic4];

  // Duplicate for seamless infinite scrolling
  const scrollingClients = [...clients, ...clients];

  return (
    <section className="clients-section">

      <div className="clients-container">

        {/* Section Header */}
        <div className="clients-heading">

          <span className="label">
            TRUSTED BY
          </span>
          <TitleEcg/>

          <h2>
            Our <span> Clients </span>
          </h2>

          <p>
            Trusted by leading healthcare organizations
            <br className="desktop-break" />
            for reliable and innovative digital solutions.
          </p>

          

        </div>


        {/* Logo Slider */}
        <div className="client-slider">

          {/* Left Fade */}
          <div className="slider-fade slider-fade-left"></div>

          {/* Right Fade */}
          <div className="slider-fade slider-fade-right"></div>

          <div className="client-slider-track">

            {scrollingClients.map((logo, index) => (
              <div
                className="client-slide"
                key={index}
              >
                <div className="client-logo-wrapper">
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="client-logo"
                  />
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}