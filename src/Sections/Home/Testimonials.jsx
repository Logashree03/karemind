import React, { useEffect, useState } from "react";
import TitleEcg from "../../Components/Underline/TitleEcg"; 

import "./Testimonials.css";

const testimonials = [
  {
    name: "Dr. K C Mohan",
    role: "Orthopedics/Orthopedic Surgery...",
    text: "As an orthopedic clinic, managing patient information efficiently is crucial for our daily operations. Since implementing",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Dr.Deep Chand Raja",
    role: "Cardiology",
    text: " Cardiology is the branch of medicine that deals with the diagnosis and treatment of heart conditions and diseases. It encompasses a wide range of issues.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Dr.Abarajda V",
    role: "Director of Obstetrics, Gynaecology & Fertility",
    text: "KareMind’s exceptional customer support has been a crucial factor in our positive experience.Their team is always available to assist with any questions or issues, ensuring that our operations continue to run smoothly.The software’s user- friendly interface allows our team to quickly access patient information and update records with ease.",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    name: "Dr.Suganth",
    role: "Consultant Paediatrician",
    text: "As the Director of Orthopedics, I am pleased to share our positive experience with KareMind clinic software. This advanced solution has revolutionized how we manage our orthopedic practice, significantly enhancing our operational efficiency and patient care.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Dr.Dilip Chand Raja S",
    role: "Director of Orthopedics",
    text: "As the Director of Orthopedics, I am pleased to share our positive experience with KareMind clinic software. This advanced solution has revolutionized how we manage our orthopedic practice, significantly enhancing our operational efficiency and patient care.",
    avatar: "https://i.pravatar.cc/100?img=25",
  },
];

function TestimonialCard({ item, active }) {
  return (
    <div className={`testimonial-card ${active ? "active" : ""}`}>
      <div className="testimonial-avatar">
        <img src={item.avatar} alt={item.name} />
      </div>

      <p className="testimonial-text">
        {item.text}
      </p>

      <div className="testimonial-user">
        <img src={item.avatar} alt={item.name} />

        <div className="testimonial-user-info">
          <h4>{item.name}</h4>
          <span>{item.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Middle card index
  const [activeIndex, setActiveIndex] = useState(1);

  // RIGHT ARROW
  const handleNext = () => {
    setActiveIndex((prev) => {
      if (prev === testimonials.length - 2) {
        return 1;
      }

      return prev + 1;
    });
  };

  // LEFT ARROW
  const handlePrev = () => {
    setActiveIndex((prev) => {
      if (prev === 1) {
        return testimonials.length - 2;
      }

      return prev - 1;
    });
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === testimonials.length - 2) {
          return 1;
        }

        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /*
    Always show:

    Previous | Middle | Next

    Example:

    activeIndex = 1

    0 | 1 | 2
    1 | 2 | 3
    2 | 3 | 4
  */

  const leftIndex = activeIndex - 1;
  const middleIndex = activeIndex;
  const rightIndex = activeIndex + 1;

  return (


    <section className="heading-section">
      <div className="container about-intro">
        <div className="sm:text-center">
           <h5 className="label">OUR CLIENTS SAY</h5>
              <TitleEcg/>
                   
          <h2 className="section-heading">
            Testimonial
          </h2>
        

        </div>
      </div>


      <div className="testimonials-section">
        <div className="testimonials-wrapper">

          {/* LEFT ARROW */}
          <button
            className="testimonial-arrow left"
            aria-label="Previous"
            onClick={handlePrev}
          >
            ‹
          </button>

          {/* THREE CARDS */}
          <div className="testimonial-cards">

            {/* LEFT */}
            <TestimonialCard
              item={testimonials[leftIndex]}
              active={false}
            />

            {/* MIDDLE */}
            <TestimonialCard
              item={testimonials[middleIndex]}
              active={true}
            />

            {/* RIGHT */}
            <TestimonialCard
              item={testimonials[rightIndex]}
              active={false}
            />

          </div>

          {/* RIGHT ARROW */}
          <button
            className="testimonial-arrow right"
            aria-label="Next"
            onClick={handleNext}
          >
            ›
          </button>

          {/* DOTS */}
          <div className="testimonial-dots">
            {Array.from(
              { length: testimonials.length - 2 },
              (_, index) => index + 1
            ).map((index) => (
              <span
                key={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>


        </div>
      </div>







    </section>
  );
}