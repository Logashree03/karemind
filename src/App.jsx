import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Hospital from "./Pages/Company/Hospital";
import Laboratory from "./Pages/Company/Laboratory";
import Radiology from "./Pages/Company/Radiology";
import Pharmacy from "./Pages/Company/Pharmacy";
import Enterprise from "./Pages/Company/Enterprise";
import DoctorMobile from "./Pages/Company/DoctorMobile";
import PatientMobile from "./Pages/Company/PatientMobile";

import ECGBackground from "./Components/ECGBackground/ECGBackground";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app-wrapper">
        {/* Global Animated Background */}
        <ECGBackground />


        {/* Website Content */}
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/Laboratory" element={<Laboratory />} />
            <Route path="/radiology" element={<Radiology/>} />
            <Route path="/pharmacy" element={<Pharmacy/>} />
            <Route path="/enterprise" element={<Enterprise/>} />
            <Route path="/DoctorMobile" element={<DoctorMobile/>} />
            <Route path="/PatientMobile" element={<PatientMobile/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

    // <Blog/>

  );
}

export default App;