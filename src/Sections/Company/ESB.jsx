import React, { useRef, useState } from "react";
import "./HMS.css";
import "./FeaturesPage.css";

import lab2 from "../../assets/lab2.jpg";
import img from "../../assets/img.jpeg";

export default function ESB() {
    const [activeSection, setActiveSection] = useState(0);
    const [openFeature, setOpenFeature] = useState(null);
    const titleRef = useRef(null);

const sections = [
  {
    id: "integration",
    title: "Seamless System Integration",
    description:
      "Karemind ESB is the connective layer behind intelligent clinics, linking the Karemind platform with Dubai health systems, insurers, medical devices, and business applications through a single integration engine.",
    features: [
      {
        title: "API-Based Integration",
        description:
          "Connect healthcare systems that provide APIs, including DHPO, eClaimLink, NABIDH, laboratory devices, and payment gateways for seamless data exchange.",
      },
      {
        title: "Multiple Integration Standards",
        description:
          "Karemind ESB supports HL7, FHIR, REST, SOAP, and SFTP, allowing different healthcare systems to communicate using the formats they already support.",
      },
      {
        title: "Centralized Connectivity",
        description:
          "Every system connects once to the ESB hub. Adding, removing, or upgrading a connector does not require changes to other existing integrations.",
      },
    ],
  },

  {
    id: "regulatory-connectors",
    title: "Dubai Regulatory Connectors",
    description:
      "Connect directly with Dubai regulatory and healthcare systems to simplify claims, health information exchange, electronic prescriptions, and regulatory reporting.",
    features: [
      {
        title: "DHPO",
        description:
          "Direct connectivity with the Dubai Health Provider Portal supports claim submission and eligibility checks directly from the patient record.",
      },
      {
        title: "eClaimLink",
        description:
          "Karemind formats and submits claims according to the structure required by Dubai's standard claims exchange between providers and insurers.",
      },
      {
        title: "NABIDH & ERx",
        description:
          "NABIDH supports health information exchange, while prescriptions created in Karemind can be routed directly to ERx.",
      },
      {
        title: "DHA Reporting",
        description:
          "Data captured during normal clinical workflows can be reused for DHA regulatory and quality reporting without repeated manual entry.",
      },
    ],
  },

  {
    id: "insurance-payments",
    title: "Insurance & Payment Integration",
    description:
      "Simplify insurance eligibility, approvals, reimbursement workflows, and payment processing by connecting payers and payment systems directly with Karemind.",
    features: [
      {
        title: "Insurance TPAs",
        description:
          "Connect with third-party administrators for eligibility, pre-approval, and reimbursement workflows, reducing manual portal checks and phone calls.",
      },
      {
        title: "Payment Gateways",
        description:
          "Support card and online payment processing at the front desk and through the patient application, with payments reconciled against patient invoices.",
      },
      {
        title: "Reduced Manual Work",
        description:
          "Insurance and payment information can move between connected systems without repeated manual entry.",
      },
    ],
  },

  {
    id: "clinical-devices",
    title: "Clinical Device Integration",
    description:
      "Connect laboratory analyzers, PACS, radiology systems, and patient identification devices to create a smoother flow of clinical information.",
    features: [
      {
        title: "Lab & Radiology",
        description:
          "Orders and results can move between laboratory and radiology devices and the patient record without manual re-typing.",
      },
      {
        title: "PACS Integration",
        description:
          "Connect imaging equipment and PACS systems to support the movement of diagnostic images and results within the connected healthcare workflow.",
      },
      {
        title: "Emirates ID",
        description:
          "Biometric and ID card readers can confirm patient identity and pre-fill demographic information during registration.",
      },
    ],
  },

  {
    id: "communication",
    title: "Communication Management",
    description:
      "Connect patient communication channels with Karemind to automate reminders, results, follow-ups, and other important patient notifications.",
    features: [
      {
        title: "SMS & WhatsApp",
        description:
          "Use SMS and WhatsApp for patient reminders, results, and follow-up communication without requiring staff to send messages individually.",
      },
      {
        title: "Automated Reminders",
        description:
          "Reminder batches can be triggered automatically on schedule, reducing manual communication work and helping reduce missed appointments.",
      },
      {
        title: "Patient Engagement",
        description:
          "Connect communication workflows directly with the healthcare platform to keep patients informed throughout their care journey.",
      },
    ],
  },

  {
    id: "rpa",
    title: "Robotic Process Automation",
    description:
      "When an external system does not provide an API, Karemind RPA bots can operate the system like a person by logging in, navigating, entering information, and extracting data automatically.",
    features: [
      {
        title: "Claim Status Checks",
        description:
          "RPA bots can access payer portals daily to check claim status and identify rejected claims for follow-up.",
      },
      {
        title: "Eligibility Verification",
        description:
          "Automatically verify patient insurance coverage before appointments without requiring staff to perform repeated manual checks.",
      },
      {
        title: "Remittance Reconciliation",
        description:
          "Download ERA or EOB files from payer portals and match them against billed claims.",
      },
      {
        title: "Government Portal Entry",
        description:
          "Automate data entry into regulator or payer portals that do not provide an integration API.",
      },
      {
        title: "Automated Reporting",
        description:
          "Compile operational and financial reports and distribute them automatically at the end of the day.",
      },
    ],
  },

  {
    id: "message-processing",
    title: "Intelligent Message Processing",
    description:
      "Every message passing through Karemind ESB follows a consistent four-step process to ensure reliable communication between connected systems.",
    features: [
      {
        title: "Receive",
        description:
          "Accept messages from connected systems using HL7, FHIR, REST, SOAP, or file-based formats.",
      },
      {
        title: "Transform",
        description:
          "Map fields and codes between systems so that patient IDs, diagnosis codes, claim formats, and other information are understood by each connected system.",
      },
      {
        title: "Route",
        description:
          "Deliver every message to the correct destination. If a system is temporarily unavailable, the message can be queued and automatically retried.",
      },
      {
        title: "Confirm",
        description:
          "Log every message with its timestamp and status, while alerting the operations team when delivery fails.",
      },
    ],
  },

  {
    id: "operations-console",
    title: "Operations Console",
    description:
      "Monitor connector health, message activity, failures, alerts, and system performance from a centralized operations console.",
    features: [
      {
        title: "Connector Monitoring",
        description:
          "View the health and status of connected systems from a single screen.",
      },
      {
        title: "Message Logs",
        description:
          "Track integration messages and their processing status for better operational visibility.",
      },
      {
        title: "Alerts & Incidents",
        description:
          "Identify connection problems and delivery failures through centralized alerts and incident monitoring.",
      },
      {
        title: "Analytics",
        description:
          "Monitor message volume, success rates, response times, and RPA bot activity.",
      },
    ],
  },

  {
    id: "queue-retry",
    title: "Queue & Retry Management",
    description:
      "Karemind ESB is designed to prevent integration failures from becoming silent failures by automatically managing unavailable systems and failed messages.",
    features: [
      {
        title: "Automatic Queueing",
        description:
          "Messages can be queued when the destination system is temporarily unavailable.",
      },
      {
        title: "Automatic Retry",
        description:
          "The system automatically retries failed or delayed connections instead of requiring manual intervention.",
      },
      {
        title: "Failure Alerts",
        description:
          "If an issue cannot be resolved automatically, the operations team is alerted so that it can be addressed promptly.",
      },
    ],
  },

  {
    id: "business-value",
    title: "Reduced Integration Risk",
    description:
      "Karemind ESB helps healthcare organizations scale their connected systems while reducing manual work, integration complexity, and operational risk.",
    features: [
      {
        title: "Add New Payers Easily",
        description:
          "New insurance connections and regulatory requirements can be configured through the ESB without changing the core clinic platform.",
      },
      {
        title: "One Record, Many Systems",
        description:
          "Patient, claim, and order information remains consistent across connected systems without repeated manual entry.",
      },
      {
        title: "Faster Go-Live",
        description:
          "Existing protocol adapters and mapping templates help make many new connections configuration-driven rather than requiring custom development.",
      },
      {
        title: "Complete Audit Trail",
        description:
          "Integration messages are logged with timestamps, status, and outcomes to support compliance and internal audits.",
      },
    ],
  },

  {
    id: "deployment",
    title: "Flexible Deployment",
    description:
      "Karemind ESB can run as part of the Karemind platform or as standalone middleware in front of existing clinic systems.",
    features: [
      {
        title: "Cloud SaaS",
        description:
          "Managed alongside the Karemind platform in a cloud-based environment.",
      },
      {
        title: "Private Cloud",
        description:
          "A dedicated environment suitable for multi-branch healthcare groups.",
      },
      {
        title: "On-Premise",
        description:
          "Runs within the clinic's own infrastructure for organizations that require an on-premise deployment.",
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
                         Karemind Enterprise Service Bus
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

                        <div >
                            <p> Connect every system. Automate every workflow. Karemind ESB provides a centralized integration and automation layer that connects the Karemind platform with healthcare systems, regulatory platforms, insurance providers, medical devices, payment gateways, communication channels, and business applications. It enables seamless data exchange, automated workflows, monitoring, and reliable connectivity across the connected healthcare ecosystem.</p>
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