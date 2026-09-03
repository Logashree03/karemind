import React, { useRef, useState } from "react";
import "./HMS.css";
import "./FeaturesPage.css";

import lab2 from "../../assets/lab2.jpg";
import img from "../../assets/img.jpeg";

export default function LIMS() {
    const [activeSection, setActiveSection] = useState(0);
    const [openFeature, setOpenFeature] = useState(null);
    const titleRef = useRef(null);

    const sections = [
        {
            id: "patient-registration",
            title: "Patient Registration",
            description:
                "Make either quick registration with minimum details or detailed patient registration; an UHID has been assigned to the patients automatically in the Karemind laboratory information system.",
            features: [
                {
                    title: "Referral Details",
                    description:
                        "Easy referral management and referral report for easy settlement.",
                },
                {
                    title: "Real-time Dashboard",
                    description:
                        "Received lab orders in real-time from the front desk or doctor.",
                },
                {
                    title: "Comprehensive Details",
                    description:
                        "Easily include comprehensive patient registration details, such as ABHA, Aadhar, and other necessary information.",
                },

            ],
        },

        {
            id: "Lab Billing",
            title: "Lab Billing",
            description:
                "Lab tests, groups, and package-wise billing with custom lab billing software to assist you for accurate revenue tracking.",
            features: [
                {
                    title: "Payer Billing",
                    description:
                        "Incorporate payer-related data effortlessly, facilitating streamlined insurance processing for lab billing.",
                },
                {
                    title: "Digital and Print Formats",
                    description:
                        "Print bills or share via email, WhatsApp, or SMS according to your convenience.",
                },
                {
                    title: "Customized Bills",
                    description:
                        "Customize bills to meet the unique needs of your lab facility effortlessly.",
                },


            ],
        },

        {
            id: "Shift Management",
            title: "Shift Management",
            description:
                "Shift management facility via Karemind laboratory information management system for laboratory management refers to the capability of using a software system to efficiently manage and organize shifts or work schedules.",
            features: [
                {
                    title: "Shift Scheduling",
                    description:
                        "LIMS allows laboratory managers to create and manage shift schedules for different staff members by defining shift timings, assigning personnel shifts, and more.",
                },
                {
                    title: "Staff Tracking",
                    description:
                        "The software enables tracking of staff members during their shifts. It provides real-time information on who is currently on duty and who is scheduled for the next shift.",
                },
                {
                    title: "Performance Monitoring",
                    description:
                        "LIMS can provide performance metrics and reports based on shift data. These insights help laboratory managers assess productivity, efficiency, and workload distribution.",
                },
            ],
        },

        {
            id: "Queue Management",
            title: "Queue Management",
            description:
                "Manage lab queues efficiently to streamline the process and reduce wait times.",
            features: [
                {
                    title: "Queue Optimization",
                    description:
                        "Optimize lab queues to enhance efficiency and minimize patient wait times.",
                },
                {
                    title: "Real-time Tracking",
                    description:
                        "Track queue status in real-time to manage and adjust lab processes effectively.",
                },
                {
                    title: "Queue Analytics",
                    description:
                        "Analyze queue data to identify trends and make informed decisions for process improvement.",
                },

            ],
        },

        {
            id: "Sample Collection",
            title: "Sample Collection",
            description:
                "With the Karemind laboratory information management system, you can deploy a systematic strategy for organized sample collection management, with integrated labeling, printing, and sorting functions, as well as custom templates based on order and sample matching for simpler backend processing.",
            features: [
                {
                    title: "Batch Your Samples",
                    description:
                        "Phlebotomists can collect samples in part or for all the tests and track them on the go using LIMS software.",
                },
                {
                    title: "Digital Tracking",
                    description:
                        "Generate and print barcodes with patient and lab order data. Get timely notifications and send them to patients via SMS/WhatsApp.",
                },
                {
                    title: "Report Tracking",
                    description:
                        "Lab technicians can efficiently track report statuses by providing an approximate report generation time.",
                },

            ],
        },

        {
            id: "Department Wise Sample Routing",
            title: "Department Wise Sample Routing",
            description:
                "Karemind Laboratory Information System incorporates a map to track which samples go to which departments, eliminating the need for time-consuming manual sample routing.",
            features: [
                {
                    title: "Get Notifications",
                    description:
                        "Department technicians receive confirmation post-sample collection and at all stages of sample collection.",
                },
                {
                    title: "Real-time Analytics and Status",
                    description:
                        "Lab order status is updated in real-time as it progresses through its life cycle. You can rely on analytics anytime to get insights on your order.",
                },
                {
                    title: "External Lab Reporting",
                    description:
                        "Samples that have been collected can also be sent to external laboratories. Once the report from these labs is received, it can be uploaded directly or the resulting values can be entered into the report entry.",
                },
              

            ],
        },

        {
            id: "Lab Machine Interfacing",
            title: "Lab Machine Interfacing",
            description:
                "Organize and automate the testing process with the assistance of a laboratory information management system with connected lab machines and pave the way for faster and more accurate testing in a cost-effective way or without additional other operational costs.",
            features: [
                {
                    title: "Ready to implement",
                    description:
                        "The LIMS software is ready to implement on major laboratory machine brands and models.",
                },
                {
                    title: "Support",
                    description:
                        "Laboratory information system supports any unidirectional and bidirectional analysers.",
                },
                {
                    title: "Real-time status updates",
                    description:
                        "Lab test result QC and Lab Director get real-time status updates.",
                },
                 {
                    title: "Centralised Controls",
                    description:
                        "Get to know the active and inactive lab device with centralised monitoring and controls for better lab management.",
                },
                {
                    title: "Reagent Tracking",
                    description:
                        "Tracking reagent or testing agent’s availability, consumption and expiry dates on the fly.",
                },
                {
                    title: "Automated test Results",
                    description:
                        "With the lab device interface, test results are generated automatically in single click without human interventions.",
                },

            ],
        },

        {
            id: "Report Entry",
            title: "Report Entry",
            description:
                "With an easy-to-use lab reporting system, you may automate your report entry process by connecting lab machines to LIMS software. Just a few clicks, you may quickly and easily find out all details about the patients and the test.",
            features: [
                {
                    title: "Outside lab orders",
                    description:
                        "Consolidated reporting view from various departments, including outside labs in one place.",
                },
                {
                    title: "Auto reporting and Manual reporting",
                    description:
                        "Configure reporting as desired and get custom-analytics, data insights that matter the most to your business.",
                },
                {
                    title: "Show all history",
                    description:
                        "Access report history for returning patients; view test-specific reports by clicking 'show all'.",
                },
                {
                    title: "Centralised Controls",
                    description:
                        "Get to know the active and inactive lab device with centralised monitoring and controls for better lab management.",
                },
                {
                    title: "Reagent Tracking",
                    description:
                        "Tracking reagent or testing agent’s availability, consumption and expiry dates on the fly.",
                },
                {
                    title: "Automated test Results",
                    description:
                        "With the lab device interface, test results are generated automatically in single click without human interventions",
                },
               
            ],
        },

        {
            id: "QC Approval",
            title: "QC Approval",
            description:
                "Pathologists can leverage the digital route of multiple authorization levels and approvals and eliminate inaccuracies down the route. Our laboratory information management system is Simplified, efficient and quick.",
            features: [
                {
                    title: "Configure Digital auto-approvals",
                    description:
                        "No more hassle in approvals from desk to desk. Configure digital approvals for simplified processing..",
                },
                {
                    title: "Multi-Level Approval",
                    description:
                        "Get approvals from Lab QC and Lab directors from the software itself. Stakeholders get a detailed view at any point of lab order/reports. ",
                },
                {
                    title: "Communicate with all stakeholders",
                    description:
                        "Real-time communications management across all the stakeholders to ensure transparency and connectivity.",
                },

            ],
        },

        {
            id: "Dispatch",
            title: "Dispatch",
            description:
                "Go paperless with Karemind LIMS software, and deliver lab reports to patients via SMS/ WhatsApp with ease. Print lab reports in custom templates if needed.",
            features: [
                {
                    title: "Digital and print-friendly",
                    description:
                        "Send reports to patients easily via SMS/WhatsApp/Mail or print on-demand.",
                },
                {
                    title: "Improve Post-analytical TAT",
                    description:
                        "Digital lab Reports streamlines dispatch processes, makes reports instantly available to patients and improves post-analytical TAT.",
                },
                {
                    title: "Custom Print Option",
                    description:
                        "Sort, Arrange your data as per your requirements and print.",
                },

            ],
        },

        {
            id: "Lab Inventory Management",
            title: "Lab Inventory Management",
            description:
                "Karemind Laboratory Information System allows you to manage lab inventories such as reagents and other consumables. Increase efficiency, streamline operations for Phlebotomists and lab technicians, and understand the state of your lab with the comfort of a single dashboard.",
            features: [
                {
                    title: "Lab Inventory Indent",
                    description:
                        "Manage indent request, approvals, received for all modalities in a single interface.",
                },
                {
                    title: "Lab Consumable purchase management",
                    description:
                        "Generate your standardized Clinical Establishment Act reports for submitting them to the govtSystematically procuring necessary supplies, comparing prices, negotiating terms, placing orders, verifying received items, and maintaining documentation for budgeting and auditing purposes.",
                },
                {
                    title: "Track Inventory ",
                    description:
                        "Track all the labs inventory from active/inactive lab machines, reagent and consumables, their expiry dates and more with robust LIMS Software.",
                },

            ],
        },

          {
            id: "Laboratory Groups and Packages",
            title: "Laboratory Groups and Packages",
            description:
                "Karemind LIMS Software includes service groups and package features that allow users to create an unlimited number of test packages to attract patients.",
            features: [
                {
                    title: "Custom-Built",
                    description:
                        "All medical tests required for a certain diagnosis or treatment can be bundled into a single custom-designed package, allowing patients and clinicians to get uninterrupted care.",
                },
                {
                    title: "Easy Billing",
                    description:
                        "Billing is made simple by choosing one service package for all completed tests rather of having to select each test individually.",
                },
                {
                    title: "User Friendly",
                    description:
                        "The packages may be built on the fly with little effort and knowledge, allowing the lab to develop a variety of promotional packages to attract patients.",
                },

            ],
        },

         {
            id: "Analytics (TAT and Other Reports)",
            title: "Analytics (TAT and Other Reports)",
            description:
                "Gain visibility of all your finances and keep track of your reports on the go. Karemind LIMS software gives you real-time insights to help you make decisions.",
            features: [
                {
                    title: "Detailed TAT Report",
                    description:
                        "Keep 100% accurate records of samples collected, report generated, and all other processes for ready reference. Optimize Costs.",
                },
                {
                    title: "Customizable Report Formats",
                    description:
                        "Fully customizable report formats such as IP, OP Lab Revenue, Doctor investigation revenue reports, Lab Statistics Reports and more for a deeper view into reporting.",
                },
                {
                    title: "CEA Lab Register Report",
                    description:
                        "Generate your customizable CEA Lab reports for submitting them to the government directly through the laboratory information system.",
                },

            ],
        },
    ];

    // Current active section
    const section = sections[activeSection];

    // Feature open / close
    const handleFeatureClick = (index) => {
        setOpenFeature((current) =>
            current === index ? null : index
        );
    };

    // Section change
    const handleSectionChange = (index) => {
        setActiveSection(index);
        setOpenFeature(null);

        setTimeout(() => {
            if (!titleRef.current) return;

            const headerOffset = 110;

            const top =
                titleRef.current.getBoundingClientRect().top +
                window.scrollY -
                headerOffset;

            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }, 100);
    };
    return (
        <section className="blog-post-section">
            <div className="blog-post-container">

                {/* ================= MAIN CONTENT ================= */}
                <main className="blog-main">

                    {/* ================= TITLE ================= */}
                    <div className="blog-header">
                        <h1>
                            Laboratory Information Management System
                        </h1>


                    </div>

                    {/* ================= HERO IMAGE ================= */}
                    <div className="blog-hero-image">
                        <img
                            src={lab2}
                            alt="Karemind Hospital Information Management System"
                        />
                    </div>

                    {/* ================= ARTICLE ================= */}
                    <article className="blog-content">
                        <h3>Fully Automated Lab Management System Designed to Meet All of Your Laboratory Needs </h3>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2" style={{ padding: "8px 0 12px 25px" }}>

                            {/* LEFT LIST */}
                            <div>
                                <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-600">
                                    <li>Sample Tracking and Management</li>
                                    <li>Test Scheduling and Workflow Automation</li>
                                    <li>Data Management and Integration</li>
                                    <li>Quality Control and Compliance</li>
                                </ul>
                            </div>


                            {/* RIGHT LIST */}
                            <div>
                                <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-600">
                                    <li>User and Access Management</li>
                                    <li>Client and Vendor Integration</li>
                                    <li>Maintenance and Support Automation</li>
                                    <li>Mobile and Remote Access</li>
                                </ul>
                            </div>

                        </div>

                        <div className="features-content">

                            {/* HEADING */}
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

                                <p>
                                    {section.description}
                                </p>
                            </div>


                            {/* FEATURES */}

                            <div className="feature-list">

                                {section.features.map((feature, index) => {

                                    const isOpen = openFeature === index;

                                    return (
                                        <div
                                            className={
                                                isOpen
                                                    ? "feature-row open"
                                                    : "feature-row"
                                            }
                                            key={feature.title}
                                        >

                                            <button
                                                type="button"
                                                className="feature-main"
                                                onClick={() =>
                                                    handleFeatureClick(index)
                                                }
                                            >

                                                <span className="feature-number">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>

                                                <span className="feature-text">

                                                    <span className="feature-title">
                                                        {feature.title}
                                                    </span>

                                                    <span className="feature-description">
                                                        {feature.description}
                                                    </span>

                                                </span>

                                                <span className="feature-arrow">
                                                    {isOpen ? "↘" : "↗"}
                                                </span>

                                            </button>

                                            <div
                                                className={
                                                    isOpen
                                                        ? "feature-details visible"
                                                        : "feature-details"
                                                }
                                            >
                                                <div className="feature-details-inner">

                                                    <span className="detail-dot">
                                                        ✓
                                                    </span>

                                                    <p>
                                                        {feature.description}
                                                    </p>

                                                </div>
                                            </div>

                                        </div>
                                    );
                                })}

                            </div>


                            {/* NEXT FEATURE */}

                            {/* ================= NEXT FEATURE ================= */}

                            <div className="next-section">

                                {activeSection < sections.length - 1 ? (

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSectionChange(activeSection + 1)
                                        }
                                    >

                                        <span>
                                            Next Feature
                                        </span>

                                        <strong>
                                            {sections[activeSection + 1].title}
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

                {/* ================= SIDEBAR ================= */}
                <aside className="blog-sidebar">

                   
                    {/* ================= FEATURES SIDEBAR ================= */}
                    <div className="features-sidebar">

                        <h2>
                            Features
                        </h2>

                        <div className="sidebar-line"></div>

                        <div className="sidebar-menu">

                            {sections.map((item, index) => (

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
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span>
                                        {item.title}
                                    </span>

                                </button>

                            ))}

                        </div>

                    </div>

                </aside>

            </div>
        </section>
    );
}