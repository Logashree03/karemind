import React, { useState } from "react";






function FeaturesPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [openFeature, setOpenFeature] = useState(null);

  const section = sections[activeSection];

  const handleSectionChange = (index) => {
    setActiveSection(index);
    setOpenFeature(null);
  };

  const handleFeatureClick = (index) => {
    setOpenFeature((prev) => (prev === index ? null : index));
  };

  return (
    <div className="features-page">

     


      {/* ================= PAGE ================= */}

      <div className="features-layout">

        {/* ================= SIDEBAR ================= */}

        


        {/* ================= MAIN CONTENT ================= */}

        

      </div>

    </div>
  );
}

export default FeaturesPage;