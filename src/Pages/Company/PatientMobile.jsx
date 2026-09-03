import '../../App.css';


import PatientBanner from '../../Components/Banner/ServiceBanner/PatientBanner.jsx';
import Patient from '../../Sections/Company/PatientMob.jsx';
import NewsletterFooter from '../../Footer/NewsletterFooter.jsx'


function PatientMobile() {
  return (
    <>
        <PatientBanner />
        <Patient/>
        <NewsletterFooter/>

    </>
  );
}

export default PatientMobile;
