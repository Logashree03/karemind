import Banner from '../../Components/Banner/Banner.jsx';


import '../../App.css';
import AboutInfo from '../../Sections/AboutUs/AboutInfo.jsx';
import NewsletterFooter from '../../Footer/NewsletterFooter.jsx'
import TeamInfo from '../../Sections/AboutUs/TeamInfo.jsx';


function About() {
  return (
    <>
      <Banner />
      <AboutInfo/>
      <TeamInfo />
      <NewsletterFooter/>

    </>
  );
}

export default About;
