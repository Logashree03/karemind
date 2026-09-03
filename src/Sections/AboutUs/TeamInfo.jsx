import React, { useState } from "react";
import "./TeamInfo.css";
import TitleEcg from "../../Components/Underline/TitleEcg"; 


import pic from "../../assets/photo1.jpg"
import pic1 from "../../assets/photo2.jpg"

const teamMembers = [
  {
    id: 1,
    name: "Sannadi Harsha Vardhan Reddy B.E (CSE)",
    role: "Chief Executive Officer",
    image: pic,
    description:
      "This course helped me understand design from a real industry perspective. The projects improved my portfolio significantly.",
  },
  {
    id: 2,
    name: "Sandya Chillakuru MCA",
    role: "Managing Director",
    image: pic1,
    description:
      "The lessons were practical and easy to understand. I learned how to create better user experiences and improved my design skills.",
  },
];

const TeamInfo = () => {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <section className="team-info-section">
      <div className="team-info-container">

        {/* HEADING */}

        <div className="TeamInfo-heading">

          <span className="label">
            LEADERSHIP
          </span>

          <TitleEcg/>

          <h2>
            Driven by <span>Vision.</span><br />
            Built for <span>Healthcare.</span>
          </h2>

        </div>

        {/* GALLERY */}
        <div className="team-info-gallery">

          {teamMembers.map((member, index) => {
            const isActive = activeMember?.id === member.id;
            const isOther =
              activeMember && activeMember.id !== member.id;

            return (
              <div
                key={member.id}
                className={`
                  team-image-wrapper
                  team-image-${index + 1}
                  ${isActive ? "is-active" : ""}
                  ${isOther ? "is-other" : ""}
                `}
                onMouseEnter={() => setActiveMember(member)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                />
              </div>
            );
          })}

          {/* INFORMATION */}
          <div
            className={`team-info-details ${activeMember ? "show-info" : ""
              }`}
          >
            {activeMember && (
              <>
                <div className="team-rating">
                  {activeMember.rating}
                </div>

                <p className="team-description">
                  {activeMember.description}
                </p>

                <div className="team-red-line"></div>

                <h2>{activeMember.name}</h2>

                <span>{activeMember.role}</span>
              </>
            )}
          </div>
        </div>

        {/* BOTTOM ICON */}
        <div className="team-bottom-icon">
          <span></span>
          <b>↗</b>
        </div>

      </div>
    </section>
  );
};

export default TeamInfo;