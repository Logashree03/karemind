import React, { useRef, useState } from "react";
import "./HMS.css";
import "./FeaturesPage.css";

import patient from "../../assets/patient.png";
import step01 from "../../assets/kma/step-01.png";
import step02 from "../../assets/kma/step-02.png";
import step03 from "../../assets/kma/step-03.png";
import step04 from "../../assets/kma/step-04.png";
import step05 from "../../assets/kma/step-05.png";
import step06 from "../../assets/kma/step-06.png";
import step07 from "../../assets/kma/step-07.png";
import step08 from "../../assets/kma/step-08.png";
import step09 from "../../assets/kma/step-09.png";
import step10 from "../../assets/kma/step-10.png";

import {
    ShieldCheck,
    FileText,
    Stethoscope,
    Smartphone,
} from "lucide-react";

/* =========================================================
   FEATURE SHOWCASE
========================================================= */

function FeatureShowcase({ section }) {
    const features = section.features || [];

    const cards = [
        {
            position: "top-left",
            icon: ShieldCheck,
            title: "Secure Access",
            subtitle: "Access & Assessment",
            accent: "blue",
            items: features.slice(0, 2),
        },
        {
            position: "bottom-left",
            icon: FileText,
            title: "Patient History",
            subtitle: "Clinical Timeline",
            accent: "green",
            items: features.slice(2, 4),
        },
        {
            position: "top-right",
            icon: Stethoscope,
            title: "Treatment",
            subtitle: "Management",
            accent: "purple",
            items: features.slice(0, 2),
        },
        {
            position: "bottom-right",
            icon: Smartphone,
            title: "Mobile-First",
            subtitle: "iOS · Android · Tablet",
            accent: "orange",
            items: features.slice(1, 4),
        },
    ];

    return (
        <div
            className="feature-showcase"
            key={section.id}
        >

            {/* =====================================================
          CONNECTING LINES
      ===================================================== */}

            <svg
                className="feature-connections"
                viewBox="0 0 1200 620"
                preserveAspectRatio="none"
                aria-hidden="true"
            >

                <line
                    className="connection-line line-blue"
                    x1="280"
                    y1="160"
                    x2="500"
                    y2="270"
                />

                <line
                    className="connection-line line-green"
                    x1="280"
                    y1="460"
                    x2="500"
                    y2="350"
                />

                <line
                    className="connection-line line-purple"
                    x1="920"
                    y1="160"
                    x2="700"
                    y2="270"
                />

                <line
                    className="connection-line line-orange"
                    x1="920"
                    y1="460"
                    x2="700"
                    y2="350"
                />

            </svg>


            {/* =====================================================
          FEATURE CARDS
      ===================================================== */}

            {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                    <div
                        key={`${section.id}-${card.position}`}
                        className={`showcase-card ${card.position} accent-${card.accent}`}
                        style={{
                            "--card-delay": `${index * 80}ms`,
                        }}
                    >

                        {/* TOP ACCENT LINE */}
                        <div className="showcase-card-top" />


                        {/* HEADER */}
                        <div className="showcase-card-header">

                            <div className="showcase-icon">
                                <Icon
                                    size={23}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div className="showcase-card-heading">

                                <h4>
                                    {card.title}
                                </h4>

                                <span>
                                    {card.subtitle}
                                </span>

                            </div>

                        </div>


                        {/* DIVIDER */}
                        <div className="showcase-divider" />


                        {/* CONTENT */}
                        <ul>

                            {card.items.length > 0 ? (

                                card.items.map((item, i) => (
                                    <li key={i}>
                                        <span className="feature-bullet" />
                                        {item.list}
                                    </li>
                                ))

                            ) : (

                                <li>
                                    <span className="feature-bullet" />
                                    {section.description}
                                </li>

                            )}

                        </ul>

                    </div>
                );
            })}


            {/* =====================================================
          CENTER PHONE
      ===================================================== */}

            <div className="showcase-phone">

                <div className="phone-glow" />

                <div className="phone-frame">

                    {/* PHONE TOP */}
                    <div className="phone-notch">

                        <span />

                        <b />

                    </div>


                    {/* PHONE SCREEN */}
                    <div className="phone-screen">
                        <img scr="lazy" src={section.image} alt="Patient Mobile App" />

                    </div>


                    {/* HOME BAR */}
                    <div className="phone-home-bar" />

                </div>

            </div>

        </div>
    );
}


/* =========================================================
   MAIN PATIENT COMPONENT
========================================================= */

export default function Doctor() {

    const [activeSection, setActiveSection] = useState(0);

    const titleRef = useRef(null);


    /* =======================================================
       SECTIONS
    ======================================================= */

     const sections = [
    {
      id: "doctor-dashboard",
      title: "Doctor’s Dashboard",
      image: patient,
      image: step02,
      description:
        "A dashboard interface that is easy to access and offers one-stop data availability to ease your patient’s data management.",

        features: [
            {
                list: "Keep track of your analytics and revenues.",
            },
            {
                list: "Pharmacy sales and purchase data.",  

            },
            {
                list: "Manage your OP and IP details under separate tabs.",
            },]
        },

    {
      id: "Appointments",
      title: "Appointments",
      image: patient,
      image: step02,
      description:
        "Appointment details of new and existing patients can be handled smoothly with the doctor’s mobile app at any time anywhere.",
        features: [
            {
                list: "Manage your appointments on the go.",
            },
            {
                list: "Get real-time appointment data.",  

            },
            {
                list: "Calendar view to assess your workload.",
            },]
        },

    {
      id: "Admission List and Discharge Summary",
      title: "Admission List and Discharge Summary",
      image: patient,
      description:
        "Here you can access separate admission detail lists and discharge summaries along with the doctor and nurse notes.",
        features: [
            {
                list: "Keep track of discharge summary and admission details on the go.",
            },
            {
                list: "Maintain nurse and doctor notes for important details regarding discharge and admission.",  

            },
            {
                list: "Update and add doctors and nurse notes easily with speech to text functionality.",
            },
             {
                list: "Allowing you to analyse inpatient medical records for better clarity.",
            },
        ]
        },

   {
      id: "Patient Vitals",
      title: "Patient Vitals",
      image: patient,
      image: step02,
      description:
        "Crucial information regarding every patient’s vital detail can be managed here with proper numeric and graphical demonstrations to keep an eye on every minute detail.",
        features: [
            {
                list: "Monitor patients’ vital details such as blood pressure, pulse rate, temperature, respiration rate, etc.  ",
            },
            {
                list: "Analyse vitals in a graphical format.",  

            },
            {
                list: "Filter data here according to time date and days of visits.",
            },]
        },

    {
      id: "EHR",
      title: "EHR (Electronic Health Record)",
      image: patient,
      image: step02,
      description:
        "EHR in hospital mobile app offers a user-friendly interface to standardize and store patient health records in a secure, practice-friendly manner. ",
    subheading: "Checkout our EHR Software",
        features: [
            
            {
                list: "Access patient’s medical history, current and previous case sheets, lab reports, radiology images, payments and more.",
            },
            {
                list: "Build a prescription in English or your regional language in less than a minute.",  

            },
            {
                list: "practice-specific case sheets. include- General, Dental, OBGYN, Paediatrics, and others.",
            },]
        },

    {
      id: "CRM Enquiry Master",
      title: "CRM Enquiry Master",
      image: patient,
      image: step02,
      description:
        "You can manage CRM enquiry by adding different filters and report fields for your effective follow-ups and lead management.",
        subheading: "Patient Relation Management System – Karemind",
        features: [
            {
                list: "Access enquires data; visualize the current status of each enquiry.",
            },
            {
                list: "Click a button to call a prospect lead or patient from your mobile app.",  

            },
            {
                list: "Create an estimate, and click a button to convert lead to patient.",
            },]
        },

    {
      id: "Lab Reports",
      title: "Lab Reports",
      image: patient,
      image: step02,
      description:
        "Lab reports and images can be attached here to analyse the data as needed.",
          subheading: "Checkout our Outpatient Management Software",
        features: [
            {
                list: "Order and get real-time access to lab reports.",
            },
            {
                list: "View patient’s lab reports and test-wise results for better diagnosis.",  

            },
            {
                list: "View a patient’s view and past lab reports in one place.",
            },]
        },

   {
      id: "Radiology",
      title: "Radiology",
      image: patient,
      image: step02,
      description:
        "Integrate Radiology and inpatient software to get the most out of the data, combine insights, and make healthcare seamless.",
        subheading: "Checkout our Outpatient Management Software",
        features: [
            {
                list: "Order OP or IP radiology orders.",
            },
            {
                list: "Manage radiology images and reports from the mobile app. ",  

            },
            {
                list: "Digital radiology images with the Mobile-DICOM viewer.",
            },]
        },

    {
      id: "OP Billing",
      title: "OP Billing",
      image: patient,
      image: step02,
      description:
        "The outpatient billing option helps you add unlimited services and manage outpatient billing costs department-wise.  ",
        subheading: "Checkout our Outpatient Management Software",
        features: [
            {
                list: "Generate OP bills.",
            },
            {
                list: "View OP revenue report and analytics on-the-go.",  

            },
            {
                list: "Access OP day-book transactions.",
            },]
        },

    {
      id: "Service Packages",
      title: "Service Packages",
      image: patient,
      image: step02,
      description:
        "Keep track of your patient service packages,current status,and next steps for better patient engagement and care.",
        features: [
            {
                list: "Track planned visits, completed visits and pending visits. ",
            },
            {
                list: "Track transaction summary and receipts.",  

            },
            {
                list: "Engage the right health and care professional based on the planned services.",
            },]
        },

    {
      id: "Tele-consultation",
      title: "Tele-consultation",
      image: patient,
      image: step02,
      description:
        "Patient care beyond hospital walls; use our virtual care platform with our mobile app.",
        subheading: "Checkout our Outpatient Management Software",
        features: [
            {
                list: "Stay connected with patients with a click of a button.",
            },
            {
                list: "Access the patient’s medical record while on the video call with the patient.",  

            },
            {
                list: "Helps you better patient engagement and retention.",
            },]
        },

        {
      id: "Tele-consultation",
      title: "Management of the patient on an overall basis",
      image: patient,
      image: step02,
      description:
        "It is possible to track and monitor patients using mobile devices, tablets, and wearables. Both patients and healthcare professionals benefit from the right diagnosis at the right time.",
        
        },

        {
      id: "Efficiency Enhancement for Physicians",
      title: "Efficiency Enhancement for Physicians",
      image: patient,
      image: step02,
      description:
        "Doctors, physicians, and healthcare professionals make up the core of the healthcare system, which requires them to work long hours and maintain hectic schedules. There are many benefits to using hospital mobile apps in healthcare. It is possible to automate paperwork effectively with these apps.",
    
        },

  ];




    /* =======================================================
       CURRENT SECTION
    ======================================================= */

    const section = sections[activeSection];


    /* =======================================================
       SECTION CHANGE
    ======================================================= */

    const handleSectionChange = (index) => {

        if (index === activeSection) {
            return;
        }

        setActiveSection(index);

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                if (titleRef.current) {

                    const elementTop =
                        titleRef.current.getBoundingClientRect().top +
                        window.scrollY;

                    window.scrollTo({
                        top: elementTop - 90,
                        behavior: "smooth",
                    });

                }

            });

        });

    };


    /* =======================================================
       JSX
    ======================================================= */

    return (

        <section className="blog-post-section">

            <div className="blog-post-container">


                {/* =================================================
            MAIN CONTENT
        ================================================= */}

                <main className="blog-main">


                    <article className="blog-content">

                        <div className="features-content">


                            {/* ==========================================
                  HEADING
              ========================================== */}

                            <div
                                className="section-intro"
                                ref={titleRef}
                            >

                                <span className="section-label">
                                    FEATURE{" "}
                                    {String(activeSection + 1).padStart(2, "0")}
                                </span>


                                <h1>
                                    {section.title}
                                </h1>


                                {/* ========================================
                    NEW FEATURE SHOWCASE
                ======================================== */}

                                <FeatureShowcase
                                    section={section}
                                />

                                <p>
                                    {section.description}
                                </p>


                                {section.subheading && (
                                    <h3>
                                        {section.subheading}
                                    </h3>
                                )}


                                {/* ========================================
                    FEATURES LIST
                ======================================== */}

                                {section.features?.length > 0 && (

                                    <ul className="features-list">

                                        {section.features.map(
                                            (feature, index) => (

                                                <li className="bullet-list" key={index}>
                                                    {feature.list}
                                                </li>

                                            )
                                        )}

                                    </ul>

                                )}

                            </div>


                            {/* ==========================================
                  NEXT SECTION
              ========================================== */}

                            <div className="next-section">

                                {activeSection <
                                    sections.length - 1 ? (

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSectionChange(
                                                activeSection + 1
                                            )
                                        }
                                    >

                                        <span>
                                            Next Feature
                                        </span>

                                        <strong>
                                            {
                                                sections[
                                                    activeSection + 1
                                                ].title
                                            }
                                        </strong>

                                        <span className="next-arrow">
                                            →
                                        </span>

                                    </button>

                                ) : (

                                    <span className="end-message">
                                        All Features
                                    </span>

                                )}

                            </div>

                        </div>

                    </article>

                </main>


                {/* =================================================
            SIDEBAR
        ================================================= */}

                <aside className="blog-sidebar">

                    <div className="features-sidebar">

                        <h2>
                            Features
                        </h2>

                        <div className="sidebar-line" />


                        <div className="sidebar-menu">

                            {sections.map(
                                (item, index) => (

                                    <button
                                        type="button"
                                        key={item.id}
                                        className={
                                            activeSection === index
                                                ? "sidebar-item active"
                                                : "sidebar-item"
                                        }
                                        onClick={() =>
                                            handleSectionChange(index)
                                        }
                                    >

                                        <span className="sidebar-number">
                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                        <span>
                                            {item.title}
                                        </span>

                                    </button>

                                )
                            )}

                        </div>

                    </div>

                </aside>

            </div>

        </section>

    );
}