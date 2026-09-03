import "../../Section/ComSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding,faArrowRight, faUserDoctor, faMobileScreenButton, faFlaskVial, faXRay, faPills } from "@fortawesome/free-solid-svg-icons";
import TitleEcg from "../../Components/Underline/TitleEcg"; 


const features = [
  {
    title: "Karemind Hospital Information System",
    text: "A solution for medical facilities to provide excellent patient care and reduce operational costs.",
    icon: faBuilding,
    arrow: faArrowRight,
    redirect: "/hospital-information-system",
    readmore: "Read More",
  },
  {
    title: "Karemind Clinical Management Software",
    text: "A voice-controlled solution that allows clinicians to both input and access patient data at the point of care.",
    icon: faUserDoctor,
    arrow: faArrowRight,
    readmore: "Read More",
  },
  {
    title: "Karemind Doctor Mobile App",
    text: "A mobile EMR that keeps you informed anytime, anywhere. Available on the Google Android & Apple iOS platform.",
    arrow: faArrowRight, 
    icon: faMobileScreenButton,
    readmore: "Read More",
  },
  {
    title: "Karemind Laboratory Information System",
    text: "Fully Automated Lab Management System Designed to Meet All of Your Laboratory Needs.",
    icon: faFlaskVial,
    arrow: faArrowRight,
    readmore: "Read More",
  },
  {
    title: "Karemind Radiology Information System & PACS",
    text: "FHIR Compliant RIS and PACS. Connect applications, devices and data to create seamless digital experiences.",
    icon: faXRay,
    arrow: faArrowRight,
    readmore: "Read More",
  },
  {
    title: "Karemind Pharmacy Management System",
    text: "Managing a medical store requires vigilance and strict adherence to standard rules and norms.",
    icon: faPills,
    arrow: faArrowRight,
    readmore: "Read More",
  },

];

export default function AboutSec() {
  return (
    <section className="section about-section">
      <div className="container about-intro">
        <div className="sm:text-center">
          <h5 className="label">Products</h5>
           <TitleEcg/>
          <h2 className="">
            Built for how you actually <br />
            <span >live your health</span>
          </h2>
         
          <p className="section-copy">
            We blend thoughtful design, clear guidance, and adaptive support into every step of your wellbeing journey.
          </p>
        </div>

        <div className="card-list">
          {features.map((feature, index) => (
            <article key={feature.title} className="card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="about-card__icon">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <div>
                    <h3 className="heading">{feature.title}</h3>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="card-content">
                  <p className="card-description">{feature.text}</p>
                </div>

                <div className="card-footer">
                  <span className="card-link">{feature.readmore}</span>
                  <FontAwesomeIcon icon={feature.arrow} className="card-arrow" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>



    </section>
  );
}