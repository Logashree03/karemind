 import React from "react";
import "./AboutInfo.css";

import img from "../../assets/img.jpeg";


const WhoYouAre = () => {
    return (
        <section className="fitness-section">

           


            <div className="fitness-container">
                <div className="-flex flex-col justify-between">
                    {/* =====================================
            TOP LEFT — IMAGE ====================================== */}

                    <div className="progress-visual">

                        <div className="blue-shape blue-top"></div>



                        {/* Main Image Card */}
                        <div className="phone-card">

                            <div className="phone-notch"></div>

                            <img
                                src={img}
                                alt="Healthcare App"
                                className="phone-image"
                            />

                        </div>

                    </div>


                    {/* =====================================
            TOP RIGHT — CONTENT
        ====================================== */}

                    <div className="progress-content">

                        <span className="label">
                            HEALTHCARE PLATFORM
                        </span>

                        <h2>
                            Track your healthcare
                            <br />
                            with our platform.
                        </h2>

                        <p>
                          Our advanced, scalable platform is crafted to enhance patient care, improve operational efficiency, and drive revenue growth. By blending modern digital tools with the specific needs of healthcare, we help providers streamline workflows, foster collaboration, and deliver an exceptional patient experience.
                        
                            <br/>
                             As a trusted technology partner, we are passionate about driving digital health transformation. Our focus is not just on today’s solutions but on shaping the future of healthcare, creating a resilient, adaptable ecosystem that meets the demands of tomorrow. Join us as we redefine the possibilities in healthcare technology.
                        </p>

                     

                    </div>

                </div>

            <div className="flex flex-col justify-between"> 
                    {/* =====================================
                            BOTTOM LEFT — CONTENT
                                ====================================== */}

                    <div className="routine-content">

                        <span className="label">
                            SMART HEALTHCARE
                        </span>

                        <h2>
                            Everything your
                            <br />
                            team needs.
                        </h2>

                        <p>
                            With over 17 years of expertise in healthcare technology, we founded Karemind Iscripts Private Limited in 2018 to redefine digital health. Our dedicated team is committed to transforming healthcare delivery through innovative, cloud-based software solutions that empower hospitals, clinics, and healthcare networks to succeed in a rapidly evolving industry.
                        </p>

                        <a href="/" className="learn-more">
                            Learn More →
                        </a>

                    </div>


                    {/* =====================================
            BOTTOM RIGHT — IMAGE
        ====================================== */}

                    <div className="notification-visual">

                        <div className="pink-shape pink-bottom"></div>

                        <div className="blue-shape blue-bottom"></div>

                        {/* Main Image Card */}
                        <div className="phone-card">

                            <div className="phone-notch"></div>

                            <img
                                src={img}
                                alt="Healthcare App"
                                className="phone-image"
                            />

                        </div>

                    </div>
                </div>




            </div>

        </section>
    );
};

export default WhoYouAre;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
