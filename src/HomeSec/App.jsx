import Navbar from './Components/Navbar'

import LogoScrolling from './Home/LogoScrolling'
import AppScrollSection from './Components/AppScrollSection'
import AboutSec from './Home/AboutSec'
import WhyAnalyticsPro from './Home/WhyAnalyticsPro'
import Testimonials from './Home/Testimonials'
import NewsletterFooter from './Footer/NewsletterFooter'

import './App.css'




function App() {
  return (
    <>
      <Navbar />
      <LogoScrolling />
      <AboutSec />
      <WhyAnalyticsPro />
      <Testimonials />
      <NewsletterFooter />

    </>
  )
}

export default App
