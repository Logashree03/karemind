import '../../App.css';


import DoctorBanner from '../../Components/Banner/ServiceBanner/DoctorBanner.jsx';
import Doctor from '../../Sections/Company/DoctorMob.jsx';
import NewsletterFooter from '../../Footer/NewsletterFooter.jsx'


function DoctorMobile() {
  return (
    <>
        <DoctorBanner />
        <Doctor/>
        <NewsletterFooter/>

    </>
  );
}

export default DoctorMobile;
