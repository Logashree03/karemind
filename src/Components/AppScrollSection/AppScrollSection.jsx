"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./AppScrollSection.css";
import ECGBackground from "../../Components/ECGBackground/ECGBackground";

import step01 from "../../assets/kma/step-01.png";
import step02 from "../../assets/kma/step-02.png";
import step03 from "../../assets/kma/step-03.png";
import step04 from "../../assets/kma/step-04.png";
import step05 from "../../assets/kma/step-05.png";
import step06 from "../../assets/kma/step-06.png";
import step07 from "../../assets/kma/step-07.png";
import step08 from "../../assets/kma/step-08.png";
import step09 from "../../assets/kma/step-09.png";
import step10 from "../../assets/kma/step-10.png";

gsap.registerPlugin(ScrollTrigger);

/*
 * Content is taken directly from the KMA Patient App
 * Appointment Booking Flow documentation.
 */
const steps = [
  {
    number: "01",
    title: "User Login",
    description:
      "User opens the KMA Patient App and logs in using Emirates ID or Mobile Number.",
    meta: "Access the patient app securely",
    image: step01,
  },
  {
    number: "02",
    title: "Home Screen",
    description:
      "After successful login, the user is redirected to the Home screen.",
    meta: "Start from the patient dashboard",
    image: step02,
  },
  {
    number: "03",
    title: "Find Appointment",
    description:
      'User selects the "Find Appointment" option from the Home screen.',
    meta: "Begin appointment discovery",
    image: step03,
  },
  {
    number: "04",
    title: "Specialities",
    description:
      "The Find A Doctor screen opens and displays the available medical specialities.",
    meta: "Browse available specialities",
    image: step04,
  },
  {
    number: "05",
    title: "Select Cardiology",
    description:
      'User selects "Cardiology" from the speciality list.',
    meta: "Choose the required speciality",
    image: step05,
  },
  {
    number: "06",
    title: "Doctor List",
    description:
      "The application displays the doctors available under Cardiology.",
    meta: "Review available doctors",
    image: step06,
  },
  {
    number: "07",
    title: "Select Doctor",
    description:
      'User selects the required doctor and taps the "Book" option.',
    meta: "Choose a doctor to continue",
    image: step07,
  },
  {
    number: "08",
    title: "Appointment Slots",
    description:
      "The Appointment Slots screen opens and displays the selected doctor, calendar, and available time slots.",
    meta: "View available dates and times",
    image: step08,
  },
  {
    number: "09",
    title: "Select Appointment Slot",
    description:
      "User selects the preferred date and available time slot.",
    meta: "Pick a convenient appointment time",
    image: step09,
  },
  {
    number: "10",
    title: "Appointment Booking",
    description:
      "User proceeds with the booking and completes the appointment booking process.",
    meta: "Complete the appointment journey",
    image: step10,
  },
];

export default function AppScrollSection() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const stepRefs = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const slideEls = stepRefs.current.filter(Boolean);

    if (!section || !intro || slideEls.length !== steps.length) return;

    const ctx = gsap.context(() => {

      const introText = intro.querySelector(".kma-intro-copy");
      const introVisual = intro.querySelector(".kma-intro-visual");
      const progressFill = section.querySelector(".kma-progress-fill");
      const progressCurrent = section.querySelector(".kma-progress-current");

      // Initial state
      gsap.set(intro, { opacity: 1 });
      gsap.set(introText, { x: 0, opacity: 1 });
      gsap.set(introVisual, {
        x: "26vw",
        xPercent: -50,
        yPercent: -50,
        scale: 0.9,
        opacity: 1,
      });

      slideEls.forEach((slide) => {
        gsap.set(slide, { opacity: 0, pointerEvents: "none" });

        gsap.set(slide.querySelector(".kma-step-copy"), {
          x: -70,
          opacity: 0,
        });

        gsap.set(slide.querySelector(".kma-step-visual"), {
          x: 110,
          y: 0,
          xPercent: -50,
          yPercent: -50,
          scale: 0.86,
          opacity: 0,
        });
      });

      // First screen is hidden until the hero has moved away.
      const timeline = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${steps.length * 950 + 1700}`,
          pin: true,
          scrub: 1.15,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (!progressFill || !progressCurrent) return;

            const progress = Math.max(0, Math.min(1, self.progress));
            gsap.set(progressFill, { scaleX: progress });

            const current = Math.min(10, Math.max(1, Math.ceil(progress * steps.length)));
            progressCurrent.textContent = String(current).padStart(2, "0");
          },
        },
      });

      // ---------------------------------------------------------
      // HERO -> CENTER
      // ---------------------------------------------------------
      timeline.to(
        introVisual,
        {
          x: 0,
          xPercent: -50,
          yPercent: -50,
          scale: 1,
          duration: 1.25,
          ease: "power3.out",
        },
        0
      );

      timeline.to(
        introText,
        {
          x: -100,
          opacity: 0,
          duration: 1.05,
          ease: "power2.inOut",
        },
        0.25
      );

      timeline.to(
        intro,
        {
          opacity: 0,
          duration: 0.25,
        },
        1.45
      );

      // ---------------------------------------------------------
      // DOCUMENTATION STEPS
      // One scroll section = one documentation step.
      // ---------------------------------------------------------
      slideEls.forEach((slide, index) => {
        const copy = slide.querySelector(".kma-step-copy");
        const visual = slide.querySelector(".kma-step-visual");
        const number = slide.querySelector(".kma-step-number");
        const eyebrow = slide.querySelector(".kma-step-eyebrow");
        const title = slide.querySelector("h2");
        const description = slide.querySelector("p");
        const meta = slide.querySelector(".kma-step-meta");

        if (index === 0) {
          timeline.set(slide, {
            opacity: 1,
            pointerEvents: "auto",
          });

          timeline.to(
            copy,
            {
              x: 0,
              opacity: 1,
              duration: 0.65,
              ease: "power3.out",
            },
            ">-0.05"
          );

          timeline.to(
            number,
            { y: 0, opacity: 1, duration: 0.3 },
            "<0.08"
          );

          timeline.to(
            eyebrow,
            { y: 0, opacity: 1, duration: 0.3 },
            "<0.05"
          );

          timeline.to(
            title,
            { y: 0, opacity: 1, duration: 0.45 },
            "<0.04"
          );

          timeline.to(
            description,
            { y: 0, opacity: 1, duration: 0.4 },
            "<0.08"
          );

          timeline.to(
            meta,
            { y: 0, opacity: 1, duration: 0.35 },
            "<0.06"
          );

          timeline.to(
            visual,
            {
              x: 0,
              y: 0,
              xPercent: -50,
              yPercent: -50,
              scale: 1,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
            },
            "<0.02"
          );

          timeline.to({}, { duration: 0.65 });
        } else {
          const previous = slideEls[index - 1];

          // Previous documentation step leaves.
          timeline.to(
            previous,
            {
              opacity: 0,
              pointerEvents: "none",
              duration: 0.45,
              ease: "power2.inOut",
            }
          );

          // New step starts slightly outside and comes into the center.
          timeline.set(slide, {
            opacity: 1,
            pointerEvents: "auto",
          });

          timeline.set(
            [copy, visual],
            {
              opacity: 0,
            }
          );

          timeline.fromTo(
            visual,
            {
              x: 110,
              y: 0,
              xPercent: -50,
              yPercent: -50,
              scale: 0.86,
              opacity: 0,
            },
            {
              x: 0,
              y: 0,
              xPercent: -50,
              yPercent: -50,
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "<"
          );

          timeline.fromTo(
            copy,
            {
              x: -70,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.62,
              ease: "power3.out",
            },
            "<0.12"
          );

          timeline.to(
            number,
            { y: 0, opacity: 1, duration: 0.28 },
            "<0.05"
          );

          timeline.to(
            eyebrow,
            { y: 0, opacity: 1, duration: 0.28 },
            "<0.04"
          );

          timeline.to(
            title,
            { y: 0, opacity: 1, duration: 0.42 },
            "<0.04"
          );

          timeline.to(
            description,
            { y: 0, opacity: 1, duration: 0.38 },
            "<0.08"
          );

          timeline.to(
            meta,
            { y: 0, opacity: 1, duration: 0.32 },
            "<0.06"
          );

          // Hold so the user can actually read the documentation.
          timeline.to({}, { duration: 0.65 });
        }
      });

      // Keep the final screen visible for a little longer.
      timeline.to({}, { duration: 0.7 });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="kma-scroll-section">
      <div className="kma-background" />
      <ECGBackground />

      {/* =====================================================
          OPEN / HERO
      ===================================================== */}
      <div ref={introRef} className="kma-intro">
        <div className="kma-intro-inner">
          <div className="kma-intro-copy">
            <span className="kma-intro-eyebrow">KMA PATIENT APP</span>

            <h1>
              Appointment
              <br />
              booking flow.
            </h1>

            <p>
              Follow the complete patient journey — from secure login
              to selecting a doctor, choosing an available slot and
              completing the appointment.
            </p>

            <div className="kma-open-label">
              <span className="kma-open-dot" />
              Scroll to explore
            </div>
          </div>

          <div className="kma-intro-visual">
            <div className="kma-image-shell">
              <img src={step01} alt="KMA Patient App User Login" />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          DOCUMENTATION STEPS
      ===================================================== */}
      <div className="kma-step-layer">
        {steps.map((step, index) => (
          <article
            key={step.number}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            className="kma-step"
          >
            <div className="kma-step-copy">
              <div className="kma-step-number">
                {step.number}
              </div>

              <div className="kma-step-eyebrow">
                KMA PATIENT APP / {step.number} — 10
              </div>

              <h2>{step.title}</h2>

              <p>{step.description}</p>

              <div className="kma-step-meta">
                <span className="kma-meta-line" />
                <span>{step.meta}</span>
              </div>
            </div>

            <div className="kma-step-visual">
              <div className="kma-step-ring" >
              </div>
              <div className="kma-image-shell kma-step-image">
                <img
                  src={step.image}
                  alt={step.title}/>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* =====================================================
          FIXED PROGRESS
      ===================================================== */}
      <div className="kma-progress" aria-hidden="true">
        <div className="kma-progress-track">
          <div className="kma-progress-fill" />
        </div>

        <div className="kma-progress-dots">
          {steps.map((step) => (
            <span key={step.number} />
          ))}
        </div>
      </div>

      <div className="kma-scroll-counter">
        <span>SCROLL</span>
        <strong className="kma-progress-current">01</strong>
        <span>/</span>
        <span>10</span>
      </div>
    </section>
  );
}
