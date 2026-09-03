import React, { useEffect, useRef } from "react";
import "./AnimatedGrid.css";

const AnimatedGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width;
    let height;
    let dpr;

    let animationFrame;

    const GRID = 85;

    let nodes = [];

    let time = 0;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createNodes();
    };


    /* =========================================
       CREATE GRID NODES
    ========================================= */

    const createNodes = () => {
      nodes = [];

      const columns =
        Math.ceil(width / GRID) + 2;

      const rows =
        Math.ceil(height / GRID) + 2;

      for (let y = 0; y < rows; y++) {

        for (let x = 0; x < columns; x++) {

          nodes.push({
            x: x * GRID,
            y: y * GRID,

            pulse:
              Math.random() *
              Math.PI *
              2,

            active:
              Math.random() > 0.72,

            delay:
              Math.random() * 100,
          });

        }
      }
    };


    /* =========================================
       DRAW
    ========================================= */

    const draw = () => {

      time += 0.025;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );


      /* =====================================
         GRID
      ===================================== */

      ctx.lineWidth = 1;

      const gridOffset =
        (time * 18) % GRID;


      /* VERTICAL */

      for (
        let x = -GRID;
        x < width + GRID;
        x += GRID
      ) {

        const currentX =
          x + gridOffset;

        ctx.strokeStyle =
          "rgba(180,150,255,0.12)";

        ctx.beginPath();

        ctx.moveTo(currentX, 0);

        ctx.lineTo(
          currentX,
          height
        );

        ctx.stroke();
      }


      /* HORIZONTAL */

      for (
        let y = -GRID;
        y < height + GRID;
        y += GRID
      ) {

        const currentY =
          y + gridOffset;

        ctx.strokeStyle =
          "rgba(180,150,255,0.12)";

        ctx.beginPath();

        ctx.moveTo(0, currentY);

        ctx.lineTo(
          width,
          currentY
        );

        ctx.stroke();
      }


      /* =====================================
         CONNECTED LINES
      ===================================== */

      nodes.forEach((node, index) => {

        const pulse =
          (Math.sin(
            time * 2 +
            node.pulse
          ) + 1) / 2;


        /* -------------------------------
           NODE
        -------------------------------- */

        if (node.active) {

          const radius =
            2 +
            pulse * 2.5;


          /* Glow */

          ctx.shadowBlur =
            18 * pulse;

          ctx.shadowColor =
            "rgba(120,220,255,0.9)";


          ctx.fillStyle =
            `rgba(
              120,
              220,
              255,
              ${0.35 + pulse * 0.65}
            )`;


          ctx.beginPath();

          ctx.arc(
            node.x,
            node.y,
            radius,
            0,
            Math.PI * 2
          );

          ctx.fill();

          ctx.shadowBlur = 0;
        }


        /* =================================
           RIGHT CONNECTION
        ================================= */

        const right = nodes[index + 1];

        if (
          right &&
          Math.abs(right.y - node.y) < 2
        ) {

          drawConnection(
            node,
            right,
            time,
            0
          );
        }


        /* =================================
           DOWN CONNECTION
        ================================= */

        const columns =
          Math.ceil(width / GRID) + 2;

        const down =
          nodes[index + columns];


        if (down) {

          drawConnection(
            node,
            down,
            time,
            1
          );
        }


        /* =================================
           DIAGONAL CONNECTION
        ================================= */

        const diagonal =
          nodes[index + columns + 1];


        if (
          diagonal &&
          node.active &&
          Math.random() > 0.985
        ) {

          drawConnection(
            node,
            diagonal,
            time,
            2
          );
        }

      });


      /* =====================================
         MOVING LIGHT PATH
      ===================================== */

      const travel =
        (time * 110) %
        (width + 400);

      const movingX =
        travel - 200;


      const movingY =
        height * 0.35 +
        Math.sin(time * 0.7) * 130;


      /* BIG GLOW */

      const glow =
        ctx.createRadialGradient(
          movingX,
          movingY,
          0,
          movingX,
          movingY,
          140
        );


      glow.addColorStop(
        0,
        "rgba(100,220,255,0.30)"
      );

      glow.addColorStop(
        0.25,
        "rgba(120,150,255,0.14)"
      );

      glow.addColorStop(
        1,
        "rgba(120,100,255,0)"
      );


      ctx.fillStyle = glow;

      ctx.beginPath();

      ctx.arc(
        movingX,
        movingY,
        140,
        0,
        Math.PI * 2
      );

      ctx.fill();


      /* =====================================
         MOVING BEAM
      ===================================== */

      const beam =
        ctx.createLinearGradient(
          movingX - 180,
          movingY,
          movingX + 180,
          movingY
        );


      beam.addColorStop(
        0,
        "rgba(90,220,255,0)"
      );

      beam.addColorStop(
        0.5,
        "rgba(100,220,255,0.7)"
      );

      beam.addColorStop(
        1,
        "rgba(170,100,255,0)"
      );


      ctx.strokeStyle = beam;

      ctx.lineWidth = 2;

      ctx.beginPath();

      ctx.moveTo(
        movingX - 180,
        movingY
      );

      ctx.lineTo(
        movingX + 180,
        movingY
      );

      ctx.stroke();


      animationFrame =
        requestAnimationFrame(draw);
    };


    /* =========================================
       CONNECTION FUNCTION
    ========================================= */

    const drawConnection = (
      a,
      b,
      currentTime,
      type
    ) => {

      let opacity =
        type === 2
          ? 0.18
          : 0.10;


      /* Animated brightness */

      const wave =
        Math.sin(
          currentTime * 2 +
          a.x * 0.01 +
          a.y * 0.01
        );


      opacity +=
        Math.max(0, wave) * 0.18;


      ctx.strokeStyle =
        `rgba(
          130,
          190,
          255,
          ${opacity}
        )`;


      ctx.lineWidth =
        type === 2 ? 1.4 : 1;


      ctx.beginPath();

      ctx.moveTo(
        a.x,
        a.y
      );

      ctx.lineTo(
        b.x,
        b.y
      );

      ctx.stroke();


      /* moving point */

      if (
        a.active &&
        Math.sin(
          currentTime * 1.8 +
          a.x
        ) > 0.82
      ) {

        const progress =
          (
            Math.sin(
              currentTime * 1.8 +
              a.x
            ) + 1
          ) / 2;


        const px =
          a.x +
          (b.x - a.x) *
          progress;


        const py =
          a.y +
          (b.y - a.y) *
          progress;


        ctx.shadowBlur = 16;

        ctx.shadowColor =
          "rgba(80,220,255,1)";

        ctx.fillStyle =
          "rgba(150,240,255,1)";


        ctx.beginPath();

        ctx.arc(
          px,
          py,
          2.5,
          0,
          Math.PI * 2
        );

        ctx.fill();

        ctx.shadowBlur = 0;
      }
    };


    resize();

    window.addEventListener(
      "resize",
      resize
    );

    draw();


    return () => {

      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };

  }, []);


  return (
    <div className="animated-grid">

      <canvas ref={canvasRef} />

      <div className="medical-glow glow-one" />

      <div className="medical-glow glow-two" />

    </div>
  );
};

export default AnimatedGrid;