import React, { useEffect, useRef, useState } from "react";
import "./Banner.css";
import "../../App.css";

import logo from "../../assets/logo-1.png";
import img from "../../assets/img.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const companyRef = useRef(null);

  const companyItems = [
    {
      name: "Hospital Management Software",
      path: "/Hospital",
    },
    {
      name: "Clinic Management Software",
      path: "#",
    },
    {
      name: "Doctor Mobile App",
      path: "/company/clinic-management",
    },
    {
      name: "Patient Mobile App",
      path: "/company/patient-management",
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
      path: "/company/diagnostic-reports",
    },
    {
      name: "Pharmacy Management System",
      path: "/pharmacy",
    },
  ];

  /* =========================================
     CLOSE DROPDOWN WHEN CLICK OUTSIDE
  ========================================= */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        companyRef.current &&
        !companyRef.current.contains(event.target)
      ) {
        setCompanyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* =========================================
     COMPANY TOGGLE
  ========================================= */

  const toggleCompany = () => {
    setCompanyOpen((prev) => !prev);
  };

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


            {/* =================================================
                DESKTOP NAV
            ================================================= */}

            <div className="hidden items-center gap-7 md:flex">

                {/* HOME */}

                <Link
                  to="/"
                  className="text-[#062c74] transition navbar-link"
                >
                  Home
                </Link>


                {/* =================================
                    ABOUT DROPDOWN
                ================================= */}

               {/* CAREERS */}

                <Link
                  to="/about"
                  className="text-[#062c74] transition navbar-link"
                >
                  About
                </Link>


                {/* =================================
                    COMPANY DROPDOWN
                ================================= */}

                <div
                  ref={companyRef}
                  className="relative"
                >

                  <button
                    type="button"
                    onClick={toggleCompany}
                    className="flex items-center gap-2 text-[#062c74] transition navbar-link dropdown-link"
                  >
                    Products

                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`text-[10px] transition-transform duration-300 ${
                        companyOpen
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>


                  {/* COMPANY MENU */}

                  {companyOpen && (
                    <div
                      className="menu-bar"
                    >

                      {companyItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() =>
                            setCompanyOpen(false)
                          }
                          className="menu-item"
                        >
                          {item.name}
                        </Link>
                      ))}

                    </div>
                  )}

                </div>


                {/* CAREERS */}

                <Link
                  to="/careers"
                  className="text-[#062c74]  transition navbar-link"
                >
                  Careers
                </Link>


                {/* CONTACT */}

                <Link
                  to="/contact"
                  className="text-[#062c74]  transition navbar-link"
                >
                  Contact
                </Link>

              </div>


            {/* =================================================
                RIGHT SIDE
            ================================================= */}

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


            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <div className="md:hidden">

              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-label="Toggle navigation"
                className="
                  rounded-md
                  p-2
                  text-slate-100
                  hover:bg-white/10
                  focus:outline-none
                "
              >

                {/* HAMBURGER */}

                <svg
                  className={`h-6 w-6 ${
                    open ? "hidden" : "block"
                  }`}
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


                {/* CLOSE */}

                <svg
                  className={`h-6 w-6 ${
                    open ? "block" : "hidden"
                  }`}
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

              </button>

            </div>

          </div>

        </div>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`
            ${
              open ? "block" : "hidden"
            }
            border-t
            border-white/10
            bg-slate-950/95
            md:hidden
          `}
        >

          <div className="space-y-1 px-4 py-3">

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="
                block
                rounded-md
                px-3
                py-2
                text-base
                font-medium
                text-slate-100
                hover:bg-white/10
              "
            >
              Home
            </Link>


            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="
                block
                rounded-md
                px-3
                py-2
                text-base
                font-medium
                text-slate-100
                hover:bg-white/10
              "
            >
              About
            </Link>


            {/* MOBILE COMPANY */}

            <button
              type="button"
              onClick={() => setCompanyOpen((prev) => !prev)}
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-md
                px-3
                py-2
                text-base
                font-medium
                text-slate-100
                hover:bg-white/10
              "
            >

              <span>Products</span>

              <FontAwesomeIcon
                icon={faChevronDown}
                className={`
                  text-xs
                  transition-transform
                  duration-300
                  ${
                    companyOpen
                      ? "rotate-180"
                      : "rotate-0"
                  }
                `}
              />

            </button>


            {companyOpen && (

              <div
                className="
                  ml-3
                  max-h-72
                  space-y-1
                  overflow-y-auto
                  border-l
                  border-white/10
                  pl-3
                "
              >

                {companyItems.map((item) => (

                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setCompanyOpen(false);
                      setOpen(false);
                    }}
                    className="
                      block
                      rounded-md
                      px-3
                      py-2
                      text-sm
                      text-slate-300
                      hover:bg-white/10
                      hover:text-indigo-400
                    "
                  >
                    {item.name}
                  </Link>

                ))}

              </div>

            )}


            <Link
              to="/careers"
              onClick={() => setOpen(false)}
              className="
                block
                rounded-md
                px-3
                py-2
                text-base
                font-medium
                text-slate-100
                hover:bg-white/10
              "
            >
              Careers
            </Link>


            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="
                block
                rounded-md
                px-3
                py-2
                text-base
                font-medium
                text-slate-100
                hover:bg-white/10
              "
            >
              Contact
            </Link>


            <button
              type="button"
              className="
                mt-2
                w-full
                rounded-md
                bg-indigo-500
                px-3
                py-3
                text-base
                font-medium
                text-white
                transition
                hover:bg-indigo-600
              "
              onClick={() => setOpen(false)}
            >
              Book a Demo
            </button>

          </div>

        </div>

      </nav>
    </div>

      {/* =====================================================
          YOUR EXISTING BANNER — UNCHANGED
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-glow glow-left" />

        <div className="about-hero-glow glow-right" />


        <div className="about-hero-content">

          <h1>
            We Build
            <br />

            <span>
              Digital Experiences
            </span>

            <br />

            That Matter.
          </h1>


          <p>
            We create innovative digital solutions and powerful
            mobile applications that help businesses grow,
            connect with people and move forward.
          </p>

        </div>


        <div className="about-phone-area">

          <div className="phone-glow" />

          <div className="phone-circle circle-a"></div>

          <div className="phone-circle circle-b"></div>


          <div className="phone-3d">

            <div className="phone-side"></div>

            <div className="phone-screen">

              <img
                src={img}
                alt="KareMind App"
              />

            </div>

          </div>


          <div className="phone-floating-card notification-card">

            <div className="floating-check">
              ✓
            </div>

            <div>

              <strong>
                Appointment Confirmed
              </strong>

              <span>
                Today · 10:30 AM
              </span>

            </div>

          </div>


          <div className="phone-floating-card stat-card">

            <strong>
              10K+
            </strong>

            <span>
              Happy Users
            </span>

          </div>

        </div>


        <div className="about-hero-wave">

          <svg
            viewBox="0 0 1440 130"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <path
              d="
                M0 70
                C220 35 420 40 610 68
                C820 100 980 100 1160 67
                C1270 48 1360 48 1440 65
                L1440 130
                L0 130
                Z
              "
            />

          </svg>

        </div>

      </section>

    </div>
  );
};

export default Banner;