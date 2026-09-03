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

export default function Patient() {

    const [activeSection, setActiveSection] = useState(0);

    const titleRef = useRef(null);


    /* =======================================================
       SECTIONS
    ======================================================= */

    const sections = [

        {
            id: "patient-dashboard",

            title: "Patient’s Dashboard",

            image: step02,

            description:
                "Patient can access their hospital visit details in a easy-to-esay understand dashboard on our mobile app.",

            features: [
                {
                    list:
                        "Holistic view of your health records and vitals.",
                },
                {
                    list:
                        "Connect your glucose meter via device integration system.",
                },
                {
                    list:
                        "View appointment or medication reminders.",
                },
            ],
        },


        {
            id: "Appointments",

            title: "Appointments",

            image: step09,

            description:
                "Making an appointment and keeping track via getting reaminders has now become esay with our patient mobile app.",

            features: [
                {
                    list:
                        "Make video consulting or in-clinic appointment.",
                },
                {
                    list:
                        "Check for slot availability.",
                },
                {
                    list:
                        "View past and future appointments.",
                },
                {
                    list:
                        "Register offline and confirm your appointment.",
                },
            ],
        },


        {
            id: "Admission List and Discharge Summary",

            title: "Prescription, Lab and Radiology Reports",

            image: step03,

            description:
                "View your prescription, lab reports and radiology reports with images, You can connect anytime with your doctor via teleconsultation feature.",

            features: [
                {
                    list:
                        "Receive prescriptions and reports in real-time.",
                },
                {
                    list:
                        "View, download, share your reports.",
                },
                {
                    list:
                        "View your radiology images and analysis under the DICOM viewer.",
                },
            ],
        },


        {
            id: "Bills and Payment",

            title: "Bills and Payment",

            image: step04,

            description:
                "The patients can access the billing details here and access the records anytime.",

            features: [
                {
                    list:
                        "Pay bills with an integrated payment gateway.",
                },
                {
                    list:
                        "View payment receipts in real time.",
                },
                {
                    list:
                        "Manage past bills, view, download and share.",
                },
            ],
        },


        {
            id: "Vital",

            title: "Vital Device Integration",

            image: step05,

            description:
                "Are you a diabetic and tired of keeping manual blood glucose records? Try Karemind vital device integration to track and keep your doctor informed of your blood glucose levels.",

            subheading:
                "Checkout our EHR Software",

            features: [
                {
                    list:
                        "Safe AQ Smart Blood Glucose Monitoring System by SinoCare to connect with the Karemind mobile app.",
                },
                {
                    list:
                        "Keep your doctors informed by your real-time Blood glucose readings for keen observation.",
                },
                {
                    list:
                        "Make your details automatically available for doctors’ access to prescribe you the appropriate dosage of medications.",
                },
            ],
        },


        {
            id: "Management of the patient on an overall basis",

            title: "Management of the patient on an overall basis",

            image: step06,

            description:
                "It is possible to track and monitor patients using mobile devices, tablets, and wearables. Both patients and healthcare professionals benefit from the right diagnosis at the right time.",

            features: [],
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