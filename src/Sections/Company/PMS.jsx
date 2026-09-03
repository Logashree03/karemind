import React, { useRef, useState } from "react";
import "./HMS.css";
import "./FeaturesPage.css";

import lab2 from "../../assets/lab2.jpg";
import img from "../../assets/img.jpeg";

export default function PMS() {
    const [activeSection, setActiveSection] = useState(0);
    const [openFeature, setOpenFeature] = useState(null);
    const titleRef = useRef(null);

    const sections = [
        {
            id: "Masters Data Load",
            title: "Masters Data Load",
            description:
                "Loading master data is critical for accurate pharmacy purchases, sales, and stock transaction karemind pharmacy management system support team will assist in loading master data, which is a one-time work before you make pharmacy transactions. Below data must be loaded. </br> Pharmacy employees, Pharmacy Locations, Medicine, Store, Suppliers, Storage, Shelf etc.",
            features: [
                {
                    title: "Highly configurable",
                    description:
                        "I Configure and customize the Karemind Pharmacy management software the way you wanted, and with great attention to detail. Add open stocks, and drug locations in the racks, set minimum and maximum quantity for stock management and access any information about your pharmacy in a few clicks.",
                },
                {
                    title: "Rack management",
                    description:
                        "Easily maintain stock of multiple items rack-wise which helps to identify which item is kept in which rack at the time of billing & generate rack-wise stock reports.",
                },
                {
                    title: "Detailed medicine information",
                    description:
                        "Add details such as medicine name, type, Manufacturer, category, rack name, schedule type of drug which can be detailed down for submitting to inspectors.",
                },

            ],
        },

        {
            id: "Pharmacy Indent Management",
            title: "Pharmacy Indent Management",
            description:
                "Track all your pharmacy indent in a single platform such as Indent requests, approval, arrivals with our intelligent pharmacy management system.",
            features: [
                {
                    title: "Pharmacy Indent Request & Approvals Workflow",
                    description:
                        "Pharmacist can raise indent request for the medicines and other pharmacy supplies that are low in stock, and the authorized person can approve it and order to the stockiest, or the vendor.",
                },
                {
                    title: "Pharmacy Purchase",
                    description:
                        "The arrived medicines and other supplies are quality checked and added to the stock with supplier names, expiry dates and more.",
                },
                {
                    title: "Centralized Management",
                    description:
                        "You can now generate customizable OPD slips from the dashboard directly. This feature is helpful for those who want to write case sheets as hardcopy.",
                },


            ],
        },

        {
            id: "Pharmacy Purchase Management",
            title: "Pharmacy Purchase Management",
            description:
                "In this Pharmacy Purchase Management start with indents create and manage indents for purchasing requests coming from any department, or location. Maintain the requisition order for medicine, supplies, etc with high flexibility. Go through",
            features: [
                {
                    title: "Add products with ease",
                    description:
                        "Generate tokens in advance or in real-time. Customize your own token numbers and set up the monitors. Immediately after the token generation, the information will be redirected to the queue manager, front desk, doctors, and patients through the screencast.",
                },
                {
                    title: "Purchase Order",
                    description:
                        "Easily add suppliers and invoices in click of a button provided it is added in the master set-up. Add details such as invoice due date, invoice date, invoice amount, GRN date.",
                },
                {
                    title: "Purchase Return",
                    description:
                        "The Pharmacy management system can execute the return of medicines to suppliers with a comprehensive system that tracks inventory, adds details of return, eliminates products and calculates the amount to return.",
                },
                 {
                    title: "Stop Purchase Errors",
                    description:
                        "Pharmacy in charge can approve the process and then save the invoice for further use. Helps you reduces purchase errors.",
                },
                 {
                    title: "Real-time tracking",
                    description:
                        "The details of purchases and purchase returns are Auto-updated in the Stock/ sales dashboard for the particular day or custom-set range.",
                },
            ],
        },

        {
            id: "Shift Management",
            title: "Shift Management",
            description:
                "Shift management via pharmacy management system streamlines scheduling, improves workflow, pharmacy sales management and enhances operational efficiency for pharmacy.",
            features: [
                {
                    title: "Dispensing Hours",
                    description:
                        "The software allows pharmacy managers to define the dispensing hours to ensure that there is adequate coverage during operational hours to serve patients.",
                },
                {
                    title: "Prescription Processing",
                    description:
                        "The software assists in managing the processing of prescriptions by assigning personnel to different shifts.",
                },
                {
                    title: "Workflow Optimization",
                    description:
                        "Pharmacy managers can optimize workflow by aligning shifts with peak customer traffic and prescription volumes.",
                },

            ],
        },

        {
            id: "Shipping Management",
            title: "Shipping Management",
            description:
                "HIMS software plays a significant role in shipping and tracking management for Pharmacies by providing a centralized platform to streamline and optimize various aspects of the shipping process.",
            features: [
                {
                    title: "Tracking and Delivery Notifications",
                    description:
                        "The software provides real-time tracking of shipments, reduces package losses and revenue loss, enabling pharmacies and patients to monitor.",
                },
                {
                    title: "Shipping Label Generation",
                    description:
                        "The software generates shipping labels and necessary documentation, streamlining the labelling process.",
                },
                {
                    title: "Customer Satisfaction",
                    description:
                        "Improved shipping management through the software ensures timely and accurate deliveries, enhancing customer satisfaction.",
                },

            ],
        },

        {
            id: "Sales",
            title: "Sales",
            description:
                "Make counter sales seamless by building a comprehensive database patient by patient by adding details of patients, medicine purchased, billing generated.",
            features: [
                {
                    title: "Integrated with IP/OP",
                    description:
                        "Any transaction made is tracked on the Pharmacy management software’s sales dashboard. Whenever a doctor sends a prescription to sales, the dashboard will be populated with a prescription list. Pharmacists can generate a bill by selecting a patient.",
                },
                {
                    title: "Custom Sale Receipt",
                    description:
                        "Design your own Sale Receipt templates for custom prints, easy to create, edit and use the templates.",
                },
                {
                    title: "Sales Return",
                    description:
                        "Ability to return the medicines with completed payments, complete with credits pharmacy-wise or customer wise.",
                },
                {
                    title: "Payment modes",
                    description:
                        "Add payment types, track patients who have opted to pay later using credits, amount returns, calculate deductions automatically.",
                },
                 {
                    title: "Hold bill",
                    description:
                        "In case of situations where you cannot complete the bill, you can choose to hold the bill and save it for later use. The hold bill will be moved to the unbilled history of the day in the sales dashboard.",
                },
                 {
                    title: "Direct Counter Sales",
                    description:
                        "Add patient details who have not registered with any doctor and are making a direct purchase at the counter. Add mobile number details and use it to search the particular patient in the pharmacy management system.",
                },
                 {
                    title: "Pharmacy Sales bill",
                    description:
                        "Pharmacists can add pharmacy or hospital logo, print bill in desired size and share it to customers.",
                },
              

            ],
        },

        {
            id: "Stock Management",
            title: "Stock Management",
            description:
                "Track your stock , set minimum and maximun stock levels and make inventory up to date. Our pharmacy oftware with advanced inventory tracking helps to streamline your entire pharmacy.",
            features: [
                {
                    title: "Opening Stock",
                    description:
                        "Make an opening stock entry for medicines that do not have an invoice, first time entry, own medicines or those purchased from the retail shop. Add details same as master set-up. Can add intricate details such as the number of units that is loose.",
                },
                {
                    title: "Stock List",
                    description:
                        "Whenever a medicine is added to or removed from Pharmacy management software, the exact amount, selling price, the batch number will be updated in the stock list. The pharmacy in charge can make stock and selling price adjustments.",
                },
                {
                    title: "Expiry List",
                    description:
                        "Keeps track of expired products so that you can return them to the supplier to save your product-based losses. The software can extract the medicine expiration data from a pre-uploaded Excel sheet which will then indicate the expiration details of medicines in a category-wise manner.",
                },
                 {
                    title: "Low/Excess Stock List",
                    description:
                        "Some medicines are there beyond the number of units set in the medicine master. Track the stock with alerts. ",
                },
                  {
                    title: "Synchronized Inventory management",
                    description:
                        "Keep shelves stocked with products your patients need, whether in a single store or across multiple sites, with integrated, automated ordering between our systems.",
                },

            ],
        },

        {
            id: "Account Management",
            title: "Account Management",
            description:
                "The accounts module under the pharmacy management system provides a complete accounts system. Using this module, users can pay the manufacturer s bill after receiving the payment from customers.",
            features: [
                {
                    title: "Credit Bill",
                    description:
                        "Track patients who have not made the payment or made partial payments yet using credit bills via pharmacy management software.",
                },
                {
                    title: "Receipt List",
                    description:
                        "Any credit payment has been done; the receipt is moved to the receipt list.",
                },
                {
                    title: "Supplier Due",
                    description:
                        "List of all supplier dues, purchase amount, purchase return amount, paid and balance to be paid in the particular time frame.",
                },
                {
                    title: "Supplier Payment",
                    description:
                        "Ability to make partial or full payments to suppliers will be tracked for supplier and displayed on the dashboard.",
                },
                
                
               
            ],
        },

        {
            id: "Analytics and Reports",
            title: "Analytics and Reports",
            description:
                "software. Robust search helps you to narrow down details and access in a few clicks. Add closing balance, sales report of users, product and medicine category-wise. <br/>Purchase report, profit or loss account (invoice-wise, medicine-wise, manufacturer-wise), the list of buy-sells in the remainder of the package, according to customers and suppliers..",
            features: [
                {
                    title: "Purchase List",
                    description:
                        "Build a comprehensive list of medicines purchased with Pharmacy management software. Track through the period, supplier, invoice number, GRN number and more. Demonstrate the time of selling, and the discount amount, and make the sale price as required. Hold any bill according to need and then recall.",
                },
                {
                    title: "Return Management",
                    description:
                        "Users can insert the invoice number of the returned goods, and it will automatically save to the bulk return list. Karemind also offers the option to add the product list that had been returned to the manufacturer and a complete list of a damaged medicine.",
                },
                {
                    title: "Consolidated Sales List",
                    description:
                        "Our pharmacy management system helps you to track which items are moving fastly based on quantity and amount sold for a particular period.",
                },
                  {
                    title: "Consolidated Purchase List",
                    description:
                        "Track which items from suppliers are moving fast based on Quantity and amount sold for the particular period.",
                },
                 {
                    title: "Closing Stock List",
                    description:
                        "View some high-value medicines movement around the particular period. Complete details of all medicines can be seen and can be cross checked with transaction records.",
                },
                {
                    title: "Stock Update History",
                    description:
                        "Streamline Stock adjustments made, selling price updates by medicine, supplier or customer.",
                },
                {
                    title: "Product Wise Sales",
                    description:
                        "View the product wise sale set for a custom range and analyze trends over time.",
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
                            Pharmacy Management System
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
                        <h3>Make your Pharmacy store Management profitable with Karemind</h3>
                        <div >
                            <p> Managing a medical store requires vigilance and strict adherence to standard rules and norms, such as remembering the expiry date of available medicines in stock and the ability to decipher doctor prescriptions. karemind pharmacy management system software is integrated with OP, IP department, and all-around management of pharmacy right from purchase management system , customer management, drug management and multi-location pharmacy sales management.
                            <b/>pharmacy management software addresses pain points such as batch tracking, drug billing blockage, GST, customer engagement, sharing of alerts for medicines/drugs that are about to expire, over/low stock and more. Pave way for smarter pharmacy management with Karemind.</p>
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