import React, { useRef, useState } from "react";
import "./HMS.css";
import "./FeaturesPage.css";


import patient from "../../assets/patient.png";
import appointment from "../../assets/appointment.png";
import { Hospital } from "lucide-react";

export default function BlogPost() {
  const [activeSection, setActiveSection] = useState(0);
  const [openFeature, setOpenFeature] = useState(null);
  const titleRef = useRef(null);

  const sections = [
    {
      id: "patient-registration",
      title: "Patient Registration",
      image: patient,
      description:
        "Experience a quick and detailed registration process to document patient information, including demographics, health insurance, identity, and other relevant information.",
      features: [
        {
          title: "Quick & Easy Process",
          description:
            "Interactive front desk dashboard makes it fast and efficient for patient registration.",
        },
        {
          title: "Comprehensive Patient List",
          description:
            "Detailed list of patients is available for easy reach and communication.",
        },
        {
          title: "Unique Numbers",
          description:
            "Customized UHID, document ABHA number and Aadhaar card data.",
        },

      ],
    },

    {
      id: "appointment",
      title: "Appointment",
      image: appointment,
      description:
        "Booking an appointment has Never Been So Easy! Make appointments for either registered or unregistered patients with robust OPD Management Software. One screen to create, view, and manage appointments for various",
      features: [
        {
          title: "Detailed Metrics",
          description:
            "Real-time appointment front desk dashboard for efficient appointment management.",
        },
        {
          title: "Grace Period Record",
          description:
            "Patients can book appointments via patient portal or mobile app or calendar plugin. Quick scheduling and rescheduling with SMS/ What's App push notifications.",
        },
        {
          title: "OPD Slips",
          description:
            "You can now generate customizable OPD slips from the dashboard directly. This feature is helpful for those who want to write case sheets as hardcopy.",
        },
        {
          title: "Appointment reminders",
          description:
            "Send appointment reminders to your patients as per preference and better patient engagement.",
        },
        {
          title: "Easy Booking & Scheduling",
          description:
            "Patients can book appointments via patient portal or mobile app or calendar plugin. Quick scheduling and rescheduling with SMS/ What's App push notifications.",
        },
        {
          title: "Unique Numbers",
          description:
            "Customized UHID, document ABHA number and Aadhar card data.",
        },

      ],
    },

    {
      id: "service-packages",
      title: "Service Packages",
      description:
        "The Package Designer feature in Karemind OPD Management Software provides customers with considerable flexibility in designing any form of Healthcare Services Packages in an easy-to-use manner.",
      features: [
        {
          title: "Customizable",
          description:
            "Allows a hospital to create any type of package and provide criteria like validity, special price, inclusions, exclusions, and so on.",
        },
        {
          title: "Easy to Build",
          description:
            "The packages may be created on the fly with minimal effort, allowing the hospital to create different promotional packages throughout the year.",
        },
        {
          title: "Aid in Patients Retention",
          description:
            "Coordination between doctors and patients is possible and allows for improved patient treatment, which aids in patient retention",
        },
      ],
    },

    {
      id: "shift-management",
      title: "Shift Management",
      description:
        "The hospital shift management feature within HIMS software for outpatient (OP) department is instrumental in promoting smooth operations and optimal management for your hospital.",
      features: [
        {
          title: "Efficient Shift Management",
          description:
            "Streamline and optimize various aspects of the shift scheduling process.",
        },
        {
          title: "Proper Staffing Levels",
          description:
            "It allows hospital admin to manage their work shifts efficiently and ensures proper staffing levels to meet patient needs.",
        },
        {
          title: "Multiple Tasks for Shift Management",
          description:
            "The hospital shift management software enables features such as shift planning, automated shift allocation, shift swapping, and real-time visibility of schedules.",
        },

      ],
    },

    {
      id: "queue-management",
      title: "Queue Management",
      description:
        "In this Pharmacy Purchase Management start with indents create and manage indents for purchasing requests coming from any department, or location. Maintain the requisition order for medicine, supplies, etc with high flexibility. Go through",
      features: [
        {
          title: "Token Generation",
          description:
            "Generate tokens in advance or in real-time. Customize your own token numbers and set up the monitors. Immediately after the token generation, the information will be redirected to the queue manager, front desk, doctors, and patients through the screencast.",
        },
        {
          title: "Screencast Facility",
          description:
            "Screencast feature helps to display real-time token queue information and booking status with either audio announcements or with display functions in multiple displays. Information Visibility Control helps you control what you want to show.",
        },
        {
          title: "Appointment Dashboard",
          description:
            "The front desk can manage all the scheduled appointments for the day along with patient priority management. Doctor dashboard helps see their patient's appointments and can manage their schedules accordingly.",
        },

      ],
    },

    {
      id: "op-billing",
      title: "OP Billing",
      description:
        "The hospital shift management feature within HIMS software for outpatient (OP) department is instrumental in promoting smooth operations and optimal management for your hospital.",
      features: [
        {
          title: "Peak Hour",
          description:
            "User-friendly interfaces and keyboard only for data entry to create bills faster.",
        },
        {
          title: "End-to-end Billing",
          description:
            "OP billing, pending bills, hold bills, canceled bills, and much more. Share bills via SMS, and WhatsApp.",
        },
        {
          title: "Reports and Analytics",
          description:
            "OP revenue, referrals and consulting doctor revenue split, payment, and much more.",
        },
        {
          title: "Bill Summary",
          description:
            "Know the billing history and credit, debit details of your perticular patient for smooth billing management.",
        },

      ],
    },

    {
      id: "templates",
      title: "Templates",
      description:
        "Issue medical certificates, consent forms, fitness certificates, daycare summaries and other health certificates using the templates in our OPD Management Software.",
      features: [
        {
          title: "Easy Customization",
          description:
            "The certificates can be issued on customized templates including the custom details and the department for which they are issued.",
        },
        {
          title: "Instant Use",
          description:
            "The templates are easy to load, and patient data will be automatically loaded.",
        },
        {
          title: "Multi-language support",
          description:
            "Our OPD Management Software offers multi-language support so that healthcare providers can communicate in their respective local languages.",
        },

      ],
    },

    {
      id: "ehr",
      title: "EHR (Electronic Health Care)",
      description:
        "Karemind EHR is a modern-day solution for maintaining ingprimary care primary care data storing and standardizing of patient health records in a secure, practice-friendly manner with an intuitive user interface at the click of a button.",
      features: [
        {
          title: "Case Sheet",
          description:
            "Karemind EHR has practice-specific standardized case sheets. General, Dental, OBGYC, IVF, Pediatric, and other major healthcare practices.",
        },
        {
          title: "Prescription",
          description:
            "The platform facilitates multi-lingual prescriptions wherein doctors can assign prescriptions in English or in a regional language to patients. Build a prescription in less than a minute!",
        },
        {
          title: "Documentation and Attachments",
          description:
            "For prompt primary care record maintenance attach lab reports, radiology images, and other health records via attachments.",
        },
        {
          title: "Multiple Language Support",
          description:
            "Create EHR in multiple language language or in your regional language for effective communication with patients.",
        },
        {
          title: "Visit Summary",
          description:
            "Track visit history of your patients and check the previous visit details under visit summary tab.",
        },
        {
          title: "Clinical or Medical History",
          description:
            "Know your patients more by tracking their current and previous medical conditions for effective primary care by using medical history details.",
        },
        {
          title: "Customisable case sheets",
          description:
            "Edit your patient's case sheet as per your needs with our customised case sheet feature that helps to manage patient details effectively.",
        },
      ],
    },

    {
      id: "role-access",
      title: "Role Based Access Management",
      description:
        "Secure your data with our robust Role Based Access Management! Requesting and granting access requests for different roles is a tiring process. Karemind online Outpatient management innovates a guided framework to enhance the efficiency of user access management.",
      features: [
        {
          title: "Better Flexibility",
          description:
            "Create an unlimited number of users, and user roles and grant access as per the user role.",
        },
        {
          title: "Better Security",
          description:
            "Karemind online outpatient management platform enhances the security of a hospital in every form- be it compliance, privacy, or confidentiality.",
        },
        {
          title: "Better Access",
          description:
            "Super administrators can easily view the roles and functionalities across a cloud-based platform.",
        },

      ],
    },

    {
      id: "Communication Management",
      title: "Communication Management",
      description:
        "Seamless Communication between providers and patients for effective engagement, thereby boosting the quality of patient care and improving patient retention. Karemind outpatient software enables Registration, updates, billing, appointments, changes in appointments, and bulk SMS to all or selected patients.",
      features: [
        {
          title: "Bulk Message Scheduling",
          description:
            "Hospitals can schedule bulk auto-messaging in advance easily using custom SMS templates.",
        },
        {
          title: "End-to-end Messaging",
          description:
            "Registration, updates, billing, appointments, changes in appointments, and send appointment reminders to the patients.",
        },
        {
          title: "Multi-channel Communication",
          description:
            "Our Online OPD Management Software enables providers to send texts, emails, Whatsapp, or even a combination of all three forms to patients.",
        },

      ],
    },

    {
      id: "reports",
      title: "Report & Analytics",
      description:
        "Over 50 outpatient-related reports and analytics are available. All the critical reports are listed handy, one can visualize the data in chart form for easy inferences.",
      features: [
        {
          title: "Feedback and Queries",
          description:
            "Can easily analyze data and offer proactive solutions for efficient outpatient department performance.",
        },
        {
          title: "CEA Patient Register Report",
          description:
            "Generate your standardized Clinical Establishment Act reports for submitting them to the govt.",
        },
        {
          title: "Overview Analytics",
          description:
            "Attain insight into the effectiveness of their services in terms of overall productivity, costs, and their performance. with our OPD Management Software.",
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
    setOpenFeature(null);
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

  return (
    <section className="blog-post-section">




      <div className="blog-post-container">


        {/* ================= MAIN CONTENT ================= */}
        <main className="blog-main">




          {/* ================= HERO IMAGE ================= */}

          {/* ================= ARTICLE ================= */}
          <article className="blog-content">



            {/* ================= FEATURES CONTENT ================= */}
            <div className="features-content">

              {/* ================= HEADING ================= */}
              <div className="section-intro" ref={titleRef}>

                <span className="section-label" >
                  FEATURE{"  "}
                  {String(activeSection + 1).padStart(2, "0")}
                </span>

                <h1>{section.title}</h1>

                <div className="blog-hero-image">
                  <img
                    src={section.image}
                    alt="Karemind Hospital Information Management System"
                  />
                </div>

                <p>{section.description}</p>
              </div>

              {/* ================= FEATURE ROWS ================= */}
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

                      {/* ================= MAIN ROW ================= */}
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

                      {/* ================= EXPANDED CONTENT ================= */}
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

              {/* ================= NEXT SECTION ================= */}
              <div className="next-section">

                {activeSection < sections.length - 1 ? (

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