import { useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import logo from "../../assets/logo-1.png";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

import "../../App.css";

import AppScrollSection from "../../Components/AppScrollSection/AppScrollSection";
import ECGBackground from "../../Components/ECGBackground/ECGBackground";


gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const [open, setOpen] = useState(false);

  /* =========================================
     DROPDOWN STATES
  ========================================= */

  const [aboutOpen, setAboutOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const aboutRef = useRef(null);
  const companyRef = useRef(null);

  /* =========================================
     GSAP REFS
  ========================================= */

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const appSectionRef = useRef(null);

  /* =========================================
     ABOUT DROPDOWN ITEMS
  ========================================= */

  // const aboutItems = [
  //   {
  //     name: "About KareMind",
  //     path: "/about",
  //   },
  //   {
  //     name: "Our Vision",
  //     path: "/about/vision",
  //   },
  //   {
  //     name: "Our Mission",
  //     path: "/about/mission",
  //   },
  //   {
  //     name: "Our Team",
  //     path: "/about/team",
  //   },
  // ];

  /* =========================================
     COMPANY - 11 DROPDOWN ITEMS
  ========================================= */

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
      path: "enterprise",
    },
    {
      name: "Pharmacy Management System",
      path: "/pharmacy",
    },

  ];

  /* =========================================
     GSAP + CLICK OUTSIDE
  ========================================= */

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const intro = introRef.current;
    const appSection = appSectionRef.current;

    /* -----------------------------------------
       CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
    ----------------------------------------- */

    const handleClickOutside = (event) => {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target)
      ) {
        setAboutOpen(false);
      }

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

    /* -----------------------------------------
       GSAP SAFETY
    ----------------------------------------- */

    if (!hero || !intro || !appSection) {
      return () => {
        document.removeEventListener(
          "mousedown",
          handleClickOutside
        );
      };
    }

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(
        ".app-scroll-slide"
      );

      /* =========================================
         INITIAL STATES
      ========================================= */

      gsap.set(intro, {
        opacity: 1,
        x: 0,
      });

      gsap.set(slides, {
        opacity: 0,
        x: 80,
        scale: 0.96,
      });

      /* =========================================
         FIRST APPLICATION
      ========================================= */

      if (slides[0]) {
        gsap.set(slides[0], {
          opacity: 0,
          x: 80,
          scale: 0.96,
        });
      }

      /* =========================================
         MAIN SCROLL TIMELINE
      ========================================= */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=3000",
          pin: true,
          scrub: 1.3,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* =========================================
         BANNER → APP 1
      ========================================= */

      tl.to(intro, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: "power2.inOut",
      });

      if (slides[0]) {
        tl.to(
          slides[0],
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "<"
        );
      }

      /* =========================================
         APP 1 → APP 2
      ========================================= */

      if (slides[0] && slides[1]) {
        tl.to(
          slides[0],
          {
            opacity: 0,
            x: -100,
            scale: 0.96,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "+=0.8"
        );

        tl.fromTo(
          slides[1],
          {
            opacity: 0,
            x: 100,
            scale: 0.96,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "<"
        );
      }

      /* =========================================
         APP 2 → APP 3
      ========================================= */

      if (slides[1] && slides[2]) {
        tl.to(
          slides[1],
          {
            opacity: 0,
            x: -100,
            scale: 0.96,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "+=0.8"
        );

        tl.fromTo(
          slides[2],
          {
            opacity: 0,
            x: 100,
            scale: 0.96,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "<"
        );
      }
    }, hero);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      ctx.revert();
    };
  }, []);

  /* =========================================
     DROPDOWN HANDLERS
  ========================================= */

  const toggleAbout = () => {
    setAboutOpen((prev) => !prev);
    setCompanyOpen(false);
  };

  const toggleCompany = () => {
    setCompanyOpen((prev) => !prev);
    setAboutOpen(false);
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <header
      ref={heroRef}
      className="main-hero"
    >

      {/* =========================================
          ECG BACKGROUND
      ========================================= */}

      <ECGBackground />

      {/* =========================================
          ALL CONTENT
      ========================================= */}

      <div className="hero-content">

        {/* =========================================
            NAVBAR
        ========================================= */}
        <div className="navbar-wrapper">

          <nav className="relative z-20 navbar">

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

              <div className="flex items-center justify-between h-18">

                {/* =====================================
                  LOGO
              ===================================== */}

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

                {/* =====================================
                  DESKTOP NAV
              ===================================== */}

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
                        className={`text-[10px] transition-transform duration-300 ${companyOpen
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


                {/* =====================================
                  RIGHT SIDE
              ===================================== */}

                <div className="hidden items-center gap-4 md:flex">

                  <FontAwesomeIcon
                    icon={faUser}
                    className="h-6 w-6  text-[#062c74] transition hover:text-indigo-400"
                  />

                  <button
                    type="button"
                    className="button"
                  >
                    Book a Demo
                  </button>

                </div>


                {/* =====================================
                  MOBILE MENU BUTTON
              ===================================== */}

                <div className="md:hidden">

                  <button
                    onClick={() => setOpen(!open)}
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
                      className={`h-6 w-6 ${open ? "hidden" : "block"
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
                      className={`h-6 w-6 ${open ? "block" : "hidden"
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


            {/* =========================================
              MOBILE MENU
          ========================================= */}

            <div
              className={`${open ? "block" : "hidden"
                } border-t border-white/10 bg-slate-950/95 md:hidden`}
            >

              <div className="space-y-1 px-4 py-3">

                {/* HOME */}

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


                {/* =================================
                  MOBILE ABOUT
              ================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setAboutOpen(!aboutOpen)
                  }
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

                  <span>About</span>

                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-xs transition-transform ${aboutOpen
                        ? "rotate-180"
                        : ""
                      }`}
                  />

                </button>


                {aboutOpen && (
                  <div className="ml-3 space-y-1 border-l border-white/10 pl-3">

                    {aboutItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => {
                          setAboutOpen(false);
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


                {/* =================================
                  MOBILE COMPANY
              ================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setCompanyOpen(!companyOpen)
                  }
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
                    className={`text-xs transition-transform ${companyOpen
                        ? "rotate-180"
                        : ""
                      }`}
                  />

                </button>


                {companyOpen && (
                  <div className="ml-3 max-h-72 space-y-1 overflow-y-auto border-l border-white/10 pl-3">

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


                {/* CAREERS */}

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


                {/* CONTACT */}

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


                {/* BOOK DEMO */}

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



        {/* =========================================
            HERO AREA
        ========================================= */}

        <AppScrollSection />

      </div>

    </header>
  );
}

export default Navbar;