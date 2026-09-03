import React, { useEffect, useRef, useState } from "react";

import "../Banner.css";
import "./Hos.css";
import "../../../App.css";

import logo from "../../../assets/logo-1.png";
import hospital from "../../../assets/radiology1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";


const EnterpriseBanner = ({
  titleTop = "Enterprise Service",
  titleHighlight = "Bus (ESB)",
  titleBottom = "",
  description = "Manage your hospital on the go with the Karemind Doctor Application",

  image = hospital,
  imageAlt = "Hospital Management System",

}) => {

  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const companyRef = useRef(null);

  const companyItems = [
    {
      name: "Hospital Management Software",
      path: "/Hospital",
    },
    
    
    {
      name: "Doctor Mobile App",
      path: "/DoctorMobile",
    },
    
    {
      name: "Patient Mobile App",
      path: "/PatientMobile",
    },
    
    {
      name: "Hospital Chain",
      path: "/company/doctor-management",
    },
    {
      name: "Laboratory Information Management System",
      path: "/Laboratory",
    },
    {
      name: "Radiology Information & Management Software",
      path: "/radiology",
    },
    {
      name: "Enterprise Service Bus (ESB)",
      path: "/enterprise",
    },
    {
      name: "Pharmacy Management System",
      path: "/pharmacy",
    },
  ];


  /* =========================================================
     CLOSE COMPANY MENU WHEN CLICKING OUTSIDE
  ========================================================= */

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        companyRef.current &&
        !companyRef.current.contains(event.target)
      ) {
        setCompanyOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);


  return (

    <div className="banner-wrapper">

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <div className="navbar-wrapper">

      <nav className="relative z-50 navbar">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16">

            {/* LOGO */}

            <div className="flex items-center">

              <Link
                to="/"
                className="flex items-center gap-3"
              >

                <img
                  src={logo}
                  alt="KareMind Logo"
                  className="h-12 w-auto"
                />

              </Link>

            </div>


            {/* DESKTOP NAVIGATION */}

           <div className="hidden items-center gap-7 md:flex">
          
                        <Link
                          to="/"
                          className="text-[#062c74] transition hover:text-indigo-400"
                        >
                          Home
                        </Link>
          
          
                        <Link
                          to="/about"
                          className="text-[#062c74] transition hover:text-indigo-400"
                        >
                          About
                        </Link>
          
          
                        {/* COMPANY */}
          
                        <div
                          ref={companyRef}
                          className="relative"
                        >
          
                          <button
                            type="button"
                            onClick={() =>
                              setCompanyOpen((prev) => !prev)
                            }
                            className="
                              flex
                              items-center
                              gap-2
                              bg-transparent
                              border-0
                              p-0
                              text-[#062c74]
                              transition
                              hover:text-indigo-400
                              cursor-pointer dropdown-link
                            "
                          >
          
                            Products
          
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className={`
                                text-[10px]
                                transition-transform
                                duration-300
                                ${companyOpen
                                  ? "rotate-180"
                                  : "rotate-0"
                                }
                              `}
                            />
          
                          </button>
          
          
                          {companyOpen && (
          
                            <div className="menu-bar">
          
                              {companyItems.map((item) => (
          
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="menu-item"
                                  onClick={() =>
                                    setCompanyOpen(false)
                                  }
                                >
                                  {item.name}
                                </Link>
          
                              ))}
          
                            </div>
          
                          )}
          
                        </div>
          
          
                        <Link
                          to="/careers"
                          className="text-[#062c74] transition hover:text-indigo-400"
                        >
                          Careers
                        </Link>
          
          
                        <Link
                          to="/contact"
                          className="text-[#062c74] transition hover:text-indigo-400"
                        >
                          Contact
                        </Link>
          
                      </div>


            {/* RIGHT SIDE */}

            <div className="hidden items-center gap-4 md:flex">

              <FontAwesomeIcon
                icon={faUser}
                className="
                  h-6
                  w-6
                  text-[#062c74]
                  transition
                  hover:text-indigo-400
                "
              />


              <button
                type="button"
                className="button"
              >
                Book a Demo
              </button>

            </div>


            {/* MOBILE MENU BUTTON */}

            <div className="md:hidden">

              <button
                type="button"
                onClick={() =>
                  setOpen((prev) => !prev)
                }
                aria-expanded={open}
                className="
                  rounded-md
                  p-2
                  text-slate-100
                  hover:bg-white/10
                  focus:outline-none
                "
              >

                {!open ? (

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />

                  </svg>

                ) : (

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />

                  </svg>

                )}

              </button>

            </div>

          </div>

        </div>


        {/* MOBILE MENU */}

        {open && (

          <div className="mobile-menu md:hidden">

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="mobile-nav-item"
            >
              Home
            </Link>


            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="mobile-nav-item"
            >
              About
            </Link>


            <button
              type="button"
              onClick={() =>
                setCompanyOpen((prev) => !prev)
              }
              className="mobile-company-button"
            >

              <span>Products</span>

              <FontAwesomeIcon
                icon={faChevronDown}
                className={
                  companyOpen
                    ? "rotate-180"
                    : ""
                }
              />

            </button>


            {companyOpen && (

              <div className="mobile-company-list">

                {companyItems.map((item) => (

                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setCompanyOpen(false);
                      setOpen(false);
                    }}
                    className="mobile-company-item"
                  >
                    {item.name}
                  </Link>

                ))}

              </div>

            )}


            <Link
              to="/careers"
              onClick={() => setOpen(false)}
              className="mobile-nav-item"
            >
              Careers
            </Link>


            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mobile-nav-item"
            >
              Contact
            </Link>


            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mobile-demo-button"
            >
              Book a Demo
            </button>

          </div>

        )}

      </nav>

      </div>


      {/* =====================================================
          HOSPITAL BANNER
          REFERENCE DESIGN:
          LEFT CONTENT + RIGHT MEDICAL IMAGE
      ===================================================== */}

      <section className="hospital-reference-banner">

        {/* ===================================================
            TOP BANNER AREA
        =================================================== */}

        <div className="hospital-banner-main">


          {/* LEFT CONTENT */}

          <div className="hospital-banner-content">

            <h1>

              {titleTop}

              <br />

              <span>
                {titleHighlight}
              </span>

              {titleBottom && (
                <>
                  <br />
                  {titleBottom}
                </>
              )}

            </h1>


            <p>
              {description}
            </p>

          </div>


          {/* RIGHT IMAGE */}

          <div className="hospital-banner-image">

            {image && (

              <img
                src={image}
                alt={imageAlt}
              />

            )}

          </div>

        </div>


        {/* ===================================================
            BOTTOM WHITE CTA AREA
        =================================================== */}

        <div className="hospital-banner-footer">


          {/* =====================================================
    PREMIUM WHITE BOTTOM SECTION
===================================================== */}

          <div className="hospital-bottom-panel">


            <div className="hospital-bottom-features">

              <div className="hospital-bottom-item">
                <span className="feature-number">01</span>

                <div>
                  <h4>Patient Management</h4>
                  <p>
                      Insightful analytics to improve your care process and performance
                  </p>
                </div>
              </div>


              <div className="hospital-bottom-item">
                <span className="feature-number">02</span>

                <div>
                  <h4>OPD & Appointments</h4>
                  <p>
                    Practice-specific customizable case sheets
                  </p>
                </div>
              </div>


              <div className="hospital-bottom-item">
                <span className="feature-number">03</span>

                <div>
                  <h4>Billing & EHR</h4>
                  <p>
                    Integrated with pharmacy, lab, and radiology departments
                  </p>
                </div>
              </div>

              

            </div>

          </div>


        </div>

      </section>

    </div>

  );

};


export default EnterpriseBanner;