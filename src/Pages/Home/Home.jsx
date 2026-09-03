import Navbar from '../../Components/Navbar/Navbar';
import LogoScrolling from '../../Sections/Home/LogoScrolling';
import AboutSec from '../../Sections/Home/AboutSec';
import Testimonials from '../../Sections/Home/Testimonials';
import NewsletterFooter from '../../Footer/NewsletterFooter';

import '../../App.css';
import AgencyIntro from '../../Sections/Home/AgencyIntro';

function Home() {
  return (
    <>
      <Navbar />
      <AgencyIntro />
      <AboutSec />
      <LogoScrolling />
      <Testimonials />
      <NewsletterFooter />
    </>
  );
}

export default Home;
