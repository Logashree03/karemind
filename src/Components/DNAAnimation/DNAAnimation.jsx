import React from "react";
import "./DNAAnimation.css";

const nucleotides = 15;
const colors = ["#FFD86B", "#FFB020", "#4EA8FF", "#1F6BFF"];

const particles = Array.from({ length: 100 }, () => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 2 + 1,
  tx: Math.random() * 20 - 10,
  ty: Math.random() * 20 - 10,
  duration: Math.random() * 3 + 2,
}));

function DNAAnimation() {
  return (
    <div className="dna-container">
      {/* DNA Helix */}
      {Array.from({ length: nucleotides }).map((_, index) => (
        <div
          key={index}
          className="nucleotide-pair"
          style={{
            top: `${(index / (nucleotides - 1)) * 100}%`,
            animationDelay: `-${index * 1.33}s`,
          }}
        >
          <div
            className="nucleotide left"
            style={{
              backgroundColor: colors[index % colors.length],
              animationDelay: `-${index * 0.2}s`,
            }}
          ></div>

          <div
            className="nucleotide right"
            style={{
              backgroundColor: colors[(index + 1) % colors.length],
              animationDelay: `-${index * 0.2 + 0.1}s`,
            }}
          ></div>

          <div className="backbone"></div>
        </div>
      ))}

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className="particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            "--tx": `${particle.tx}px`,
            "--ty": `${particle.ty}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default DNAAnimation;