import React from "react";
import "./NewsletterFooter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faPhone,
  faMagnifyingGlass,
  faLocation, faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";


import pic1 from "../assets/mob1.png";

const NewsletterFooter = () => {
  return (
    <footer className="newsletter-wrapper">
      <div className="footer-container">

        {/* ================= NEWSLETTER ================= */}

        <section className="newsletter-card">

          <div className="newsletter-wave wave-one"></div>
          <div className="newsletter-wave wave-two"></div>


          {/* IMAGE */}
          <div className="newsletter-image">
            <img
              src={pic1}
              alt="Cleaning vacuum " width={25} height={55}
            />
          </div>


          {/* CONTENT */}
          <div className="newsletter-content">
            <h2>
              Subscribe to our newsletter to get
              <br />
              updates to our latest collections
            </h2>

            {/* <p className="newsletter-description">
              Get 20% off on your first order just by subscribing to our newsletter
            </p> */}


            {/* SUBSCRIBE */}
            <div className="subscribe-box">

              <div className="email-input">

                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="email-icon"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>


              <button className="subscribe-btn">
                Subscribe
              </button>

            </div>





          </div>

        </section>


        {/* ================= FOOTER CONTENT ================= */}

        <section className="footer-main">


          {/* ================= BRAND ================= */}

          <div className="footer-brand">

            <div className="brand-logo">
              <h3>
                Karemind Iscript Private Limited
              </h3>

            </div>


            <p>
              Headquartered in Chennai, Karemind Iscripts (P) Ltd. builds connected digital health platforms for hospitals, clinics, diagnostics and long-term care providers.
            </p>


            {/* SOCIAL ICONS */}

            <div className="social-icons">

              {/* Facebook */}
              <a
                href="/"
                aria-label="Facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                />
              </a>


              {/* Twitter / X */}
              <a
                href="/"
                aria-label="Twitter"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                />
              </a>


              {/* Instagram */}
              <a
                href="/"
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                />
              </a>


              {/* LinkedIn */}
              <a
                href="/"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                />
              </a>


              {/* Google */}
              <a
                href="/"
                aria-label="Google"
              >
                <FontAwesomeIcon
                  icon={faGoogle}
                />
              </a>

            </div>

          </div>



          {/* ================= COMPANY ================= */}

          <div className="footer-column">

            <h4>
              Home
            </h4>

            <a href="/">
              Product
            </a>

            <a href="/">
              Company
            </a>

            <a href="/">
              Community
            </a>

            <a href="/">
              Career
            </a>

            <a href="/">
              Contact
            </a>

          </div>



          {/* ================= SUPPORT ================= */}

          <div className="footer-column products-column">

            <h4>
              Products
            </h4>

            <div className="products-list">
              <a href="/">HIMS</a>
              <a href="/">Clinic OS</a>
              <a href="/">Doctor App</a>
              <a href="/">Patient App</a>
              <a href="/">Chain Console</a>
              <a href="/">LIMS</a>
              <a href="/">RIS / PACS</a>
              <a href="/">ESB</a>
              <a href="/">Pharmacy</a>
            </div>

          </div>







          {/* ================= CONTACT ================= */}

          <div className="footer-column contact-column">

            <h4>
              Contact Us
            </h4>


            {/* PHONE */}

            <div className="contact-item">

              <FontAwesomeIcon
                icon={faPhone}
              />


              (91) 78452 69901


            </div>


            {/* EMAIL */}

            <div className="contact-item">

              <FontAwesomeIcon
                icon={faEnvelope}
              />


              ceo@karemind.com


            </div>

            {/* ADDRESS */}

            <div className="contact-item">

              <FontAwesomeIcon
                icon={faMapLocation}
              />


              77, 2nd Floor, S.R. Nilayam,
              Venkateshwara Nagar, Maduravoyal,
              Chennai 600095, Tamil Nadu


            </div>

          </div>

        </section>



        {/* ================= BOTTOM FOOTER ================= */}

        <section className="footer-bottom ">

          <p className="text-5xl">
            © Copyright 2023 Karemind Iscripts Private Limited
          </p>


          <div className="bottom-links">

            <a href="/">
              Privacy Policy
            </a>

            <a href="/">
              Terms of Use
            </a>

            <a href="/">
              Legal
            </a>

            <a href="/">
              Site Map
            </a>

          </div>

        </section>

      </div>
    </footer>
  );
};


export default NewsletterFooter;