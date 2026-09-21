import React, { useEffect, useRef } from 'react';

export const FirewallVideoBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 60fps.fr Bidirectional Scroll-Driven 3D Zoom & Perspective Engine
    let currentScroll = 0;
    let targetScroll = 0;
    let maxScroll = 1;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      targetScroll = window.scrollY;
      maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleScroll();

    let animId: number;

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);

      // Smooth damped spring interpolation (luxurious inertia feel)
      const prevScroll = currentScroll;
      currentScroll += (targetScroll - currentScroll) * 0.08;
      const scrollVelocity = currentScroll - prevScroll;

      targetMouseX += (mouseX - targetMouseX) * 0.045;
      targetMouseY += (mouseY - targetMouseY) * 0.045;

      const scrollProgress = Math.min(Math.max(currentScroll / maxScroll, 0), 1);

      // BIDIRECTIONAL ZOOM OUT ON SCROLL DOWN:
      // Scrolling DOWN: zooms OUT from 1.85x (close overview) down to 1.0x (expansive wide view)
      // Scrolling UP: zooms IN in reverse manner from 1.0x back up to 1.85x
      const easedProgress = Math.sin((scrollProgress * Math.PI) / 2);
      const zoomScale = 1.85 - Math.pow(easedProgress, 0.85) * 0.85;

      // 3D Spatial Camera Pitch:
      // Pulling back out when scrolling down (zoom out)
      // Diving back in when scrolling up (zoom in)
      const velocityPitch = Math.max(Math.min(-scrollVelocity * 0.16, 5.0), -5.0);
      const tiltX = -targetMouseY * 4.0 + velocityPitch * 0.7;
      const tiltY = targetMouseX * 5.5;

      // Parallax translation
      const moveX = targetMouseX * 28;
      const moveY = targetMouseY * 18 + scrollProgress * 25;

      if (visualLayerRef.current) {
        visualLayerRef.current.style.transform = `
          perspective(1000px)
          scale(${zoomScale})
          translate3d(${moveX}px, ${moveY}px, 0)
          rotateX(${tiltX}deg)
          rotateY(${tiltY}deg)
        `;

        // Dynamic silicon core luminescence (cools to crystal clarity on zoom out)
        const dynamicOpacity = 0.85 - scrollProgress * 0.15;
        visualLayerRef.current.style.opacity = `${dynamicOpacity}`;
      }
    };

    renderLoop();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="canvas-wrapper"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050508]"
    >
      {/* 
        High-End 60fps.fr 3D Scroll-Driven Perspective Layer
        No video overhead — pure 60+ FPS hardware acceleration with bidirectional zoom!
      */}
      <div
        ref={visualLayerRef}
        className="absolute -inset-[20%] w-[140%] h-[140%] will-change-transform flex items-center justify-center"
      >
        {/* Deep Perspective Cybernetic Circuit & Matrix Geometry */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Fine circuit grid pattern */}
            <pattern id="circuitGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(217, 186, 132, 0.08)"
                strokeWidth="0.75"
              />
              <circle cx="0" cy="0" r="1.5" fill="rgba(217, 186, 132, 0.25)" />
              <path
                d="M 40 0 L 40 40 L 80 40"
                fill="none"
                stroke="rgba(217, 186, 132, 0.04)"
                strokeWidth="0.5"
                strokeDasharray="2 4"
              />
            </pattern>

            {/* Micro chip topology pattern */}
            <pattern id="chipGrid" width="320" height="320" patternUnits="userSpaceOnUse">
              <rect width="320" height="320" fill="url(#circuitGrid)" />
              <path
                d="M 60 160 L 120 160 L 160 120 L 260 120 M 160 200 L 200 240 L 280 240"
                fill="none"
                stroke="rgba(217, 186, 132, 0.18)"
                strokeWidth="1.2"
              />
              <circle cx="160" cy="120" r="2.5" fill="#d9ba84" opacity="0.6" />
              <circle cx="200" cy="240" r="2.5" fill="#c8542f" opacity="0.6" />
            </pattern>

            {/* Radiant champagne gold core glow */}
            <radialGradient id="coreGlow" cx="50%" cy="45%" r="45%">
              <stop offset="0%" stopColor="#d9ba84" stopOpacity="0.18" />
              <stop offset="40%" stopColor="#c8542f" stopOpacity="0.08" />
              <stop offset="80%" stopColor="#050508" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background grid */}
          <rect width="100%" height="100%" fill="url(#chipGrid)" />

          {/* Central radial energy bloom */}
          <rect width="100%" height="100%" fill="url(#coreGlow)" />

          {/* Architectural Axis & Crosshair Accents */}
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="rgba(217, 186, 132, 0.07)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="rgba(217, 186, 132, 0.07)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
        </svg>

        {/* Ambient Volumetric Color Flares */}
        <div className="absolute top-1/4 left-1/3 size-[650px] rounded-full bg-radial from-[#d9ba84]/12 via-[#c8542f]/5 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 size-[550px] rounded-full bg-radial from-[#c8542f]/10 via-[#d9ba84]/4 to-transparent blur-[100px] pointer-events-none" />
      </div>

      {/* 60fps.fr Dark Studio Vignette & Legibility Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(5,5,8,0.92)_85%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/80 via-transparent to-[#050508]/95 pointer-events-none" />
    </div>
  );
};
