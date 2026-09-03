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
            id: "FHIR Compliant RIS and PACS",
            title: "FHIR Compliant RIS and PACS",
            description:
                "Karemind RIS adheres to Fast Healthcare Interoperability Resources (FHIR) standards, promoting interoperability and data exchange of patient resources,Encounter Resources, Radiology Service Requests and Diagnostic Reports.",
            features: [
                {
                    title: "Efficient Data Exchange",
                    description:
                        "Karemind FHIR standards provide a standardized and efficient framework for data exchange. RIS, following FHIR, can easily communicate with Electronic Health Records (EHR), ensuring smooth data flow and reducing communication barriers.",
                },
                {
                    title: "Support for Modern Healthcare Initiatives",
                    description:
                        "FHIR compliance positions RIS to support modern healthcare initiatives, such as value-based care, patient engagement, and population health management.",
                },
                {
                    title: "Interoperable Healthcare Ecosystem",
                    description:
                        "This compliance ensures valued integration with other FHIR-compliant systems, contributing to a more interconnected and interoperable healthcare ecosystem.",
                },

            ],
        },

        {
            id: "Patient Engagement",
            title: "Patient Engagement",
            description:
                "Patient engagement in Karemind RIS offers active involvement of radiology technicians, radiologists, primary doctors, and patients in their diagnostic imaging experience.",
            features: [
                {
                    title: "Transparent Communication",
                    description:
                        "Transparent Communication By empowering patients with information, and appointment reminders and involving them starting from receiving orders to final radiology reports.",
                },
                {
                    title: "Patient Retention",
                    description:
                        "Healthcare providers aim to improve outcomes and foster a sense of a better environment in their healthcare journey.",
                },
                {
                    title: "Faster Interactions",
                    description:
                        "The integrated system allows overall radiology experience with RIS with two-way interaction with patients regarding reports and analysis contributing to a positive radiology experience.",
                },


            ],
        },

        {
            id: "Patient Engagement",
            title: "Patient Engagement",
            description:
                "Patient engagement in Karemind RIS offers active involvement of radiology technicians, radiologists, primary doctors, and patients in their diagnostic imaging experience.",
            features: [
                {
                    title: "Transparent Communication",
                    description:
                        "Transparent Communication By empowering patients with information, and appointment reminders and involving them starting from receiving orders to final radiology reports.",
                },
                {
                    title: "Patient Retention",
                    description:
                        "Healthcare providers aim to improve outcomes and foster a sense of a better environment in their healthcare journey.",
                },
                {
                    title: "Faster Interactions",
                    description:
                        "The integrated system allows overall radiology experience with RIS with two-way interaction with patients regarding reports and analysis contributing to a positive radiology experience.",
                },
            ],
        },

        {
            id: "Appointment management",
            title: "Appointment management",
            description:
                "In RIS (Radiology Information System), appointment management involves scheduling and organizing radiology appointments efficiently.",
            features: [
                {
                    title: "Receiving Radiology Orders",
                    description:
                        "Receiving radiology orders by RIS (Radiology Information System) is a crucial step. It helps to enter orders, scheduling, assigning and also provides reports and results.",
                },
                {
                    title: "Effective Booking Management",
                    description:
                        "It allows healthcare front desk support to book, reschedule, or cancel appointments",
                },
                {
                    title: "Time Management",
                    description:
                        "Ensuring optimal utilization of radiology resources and minimizing patient wait times by 20%.",
                },

            ],
        },

        {
            id: "Queue Management",
            title: "Queue Management",
            description:
                "RIS facilitates effective queue management by providing a systematic approach to handling patients in the radiology workflow.",
            features: [
                {
                    title: "Managing Radiology Orders",
                    description:
                        "RIS allows for the real-time tracking and monitoring of the status of radiology orders. It helps to enter orders, scheduling, assigning and also provides reports and results.",
                },
                {
                    title: "Improved TAT",
                    description:
                        "It ensures a smooth transition of patients through various stages, from check-in to check-out.",
                },
                {
                    title: "Optimization of efficiency",
                    description:
                        "LRIS software manages the overall efficiency of the radiology department with effective data flow.",
                },

            ],
        },

        {
            id: "Communication Management",
            title: "Communication Management",
            description:
                "RIS serves as a hub for communication within the radiology department. It enables seamless communication between healthcare professionals and patients.",
            features: [
                {
                    title: "Sharing Critical Patient Information",
                    description:
                        "RIS helps to maintain secured and safe information transfer and critical patient information between HIS, and RIS.",
                },
                {
                    title: "Updates on Examination Status",
                    description:
                        "It allows professionals to get better updates on critical cases for keen examinations.",
                },
                {
                    title: "Transparent Coordination",
                    description:
                        "RIS helps to maintain coordination of tasks among the radiology team.",
                },
              

            ],
        },

        {
            id: "Billing",
            title: "Billing",
            description:
                "RIS plays a role in billing processes associated with radiology services. It helps in managing and tracking billing information, ensuring accurate and timely invoicing.",
            features: [
                {
                    title: "Patient Billing Statements",
                    description:
                        "RIS generates patient billing statements that provide a clear breakdown of charges, services rendered, and any outstanding balances.",
                },
                {
                    title: "Integration with EHR/EMR",
                    description:
                        "Integration with Electronic Health Records (EHR) or Electronic Medical Records (EMR) systems ensures that billing information is synchronized with patient health records.",
                },
                {
                    title: "Real-time status updates",
                    description:
                        "Lab test result QC and Lab Director get real-time status updates.",
                },
                 {
                    title: "Payment Processing",
                    description:
                        "RIS includes features for processing payments, allowing healthcare facilities to efficiently manage financial transactions related to radiology services. ",
                },

            ],
        },

        {
            id: "Reporting via Department Specific Templates",
            title: "Reporting via Department Specific Templates",
            description:
                "You can find different templates based on different modalities which are specificallydesigned and well-structured based on the requirement of each modality like CT, MRI, Ultrasound, Doppler, PET scan and more",
            features: [
                {
                    title: "Workflow Management",
                    description:
                        "The use of templates helps to maintain the reporting workflow, reducing the likelihood of errors and enhancing the overall efficiency of the radiology department.",
                },
                {
                    title: "Quality Assurance",
                    description:
                        "By adhering to predefined templates, RIS systems contribute to quality assurance efforts. The standardized format helps in monitoring and improving the accuracy, completeness, and overall quality of radiology reports.",
                },
                {
                    title: "Modality-Specific Templates",
                    description:
                        "Karemind RIS systems often provide modality-specific templates for effortless reporting.",
                },
                
               
            ],
        },

        {
            id: "Role-Based Access",
            title: "Role-Based Access",
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
                "RIS incorporates role-based access control, allowing healthcare organizations to define and manage access permissions based on roles. This feature ensures data security and privacy.",
            features: [
                {
                    title: "Improved Security",
                    description:
                        "Modality-based access that aids in securing PACS & radiology data and in patient confidentiality.",
                },
                {
                    title: "Better Adaptability",
                    description:
                        "Create unlimited users like, radiologist, X-ray technician, sonologist’s, radiology head, consultant Doctor and grant access as per the role.",
                },
                {
                    title: "Efficient facility Administration",
                    description:
                        "Hospital admins can easily view and change the roles and access controls from the cloud-based platform.",
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
                            Radiology Information & Management Software
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
                        <h3>Innovative RIS and PACS Software for Medical Practices & Hospitals </h3>
                        <div >
                            <p> Karemind FHIR compliant RIS and PACS Software is an integrated medical image and administration management solution that is ideal for public, private practices hospitals and diagnostic centers. 

                                Our RIS software offers advanced assistance in patient engagement. In contrast, PACS software maintains medical image records generated from any digital X-ray, CT, MRI, and ultrasound machines that can be saved and easily accessible to doctors and patients from anywhere. </p>
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