import '../../App.css';


import LaboratoryBanner from '../../Components/Banner/ServiceBanner/LaboratoryBanner.jsx';
import LIMS from '../../Sections/Company/LIMS.jsx';
import NewsletterFooter from '../../Footer/NewsletterFooter.jsx'


function Laboratory() {
  return (
    <>
        <LaboratoryBanner />
        <LIMS />
        <NewsletterFooter/>

    </>
  );
}

export default Laboratory;
