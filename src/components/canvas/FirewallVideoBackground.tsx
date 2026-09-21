import React, { useEffect, useRef } from 'react';

export const FirewallVideoBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualLayerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 60fps.fr Smooth Inertia Scroll & Mouse Parallax Engine
    let currentScroll = 0;
    let targetScroll = 0;
    let maxScroll = 1;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      targetScroll = window.scrollY;
      maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
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

      // Smooth damped spring interpolation for buttery 60+ FPS motion
      const prevScroll = currentScroll;
      currentScroll += (targetScroll - currentScroll) * 0.07;
      const scrollVelocity = currentScroll - prevScroll;

      targetMouseX += (mouseX - targetMouseX) * 0.04;
      targetMouseY += (mouseY - targetMouseY) * 0.04;

      const scrollProgress = Math.min(Math.max(currentScroll / maxScroll, 0), 1);

      // Smooth subtle zoom & parallax on scroll:
      // Starts at 1.04x, expands gently to 1.15x as user travels down the page
      const zoomScale = 1.04 + scrollProgress * 0.11;

      // Gentle pitch on scroll velocity with mouse parallax
      const velocityPitch = Math.max(Math.min(-scrollVelocity * 0.12, 4.0), -4.0);
      const tiltX = -targetMouseY * 2.5 + velocityPitch * 0.5;
      const tiltY = targetMouseX * 3.5;
      const moveX = targetMouseX * 18;
      const moveY = targetMouseY * 12 + scrollProgress * 30;

      if (visualLayerRef.current) {
        visualLayerRef.current.style.transform = `
          scale(${zoomScale})
          translate3d(${moveX}px, ${moveY}px, 0)
          rotateX(${tiltX}deg)
          rotateY(${tiltY}deg)
        `;
      }
    };

    renderLoop();

    // Ensure video plays continuously and smoothly
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }

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
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000000]"
    >
      {/* 3D Kinetic Layer with Hardware-Accelerated Video */}
      <div
        ref={visualLayerRef}
        className="absolute -inset-[10%] w-[120%] h-[120%] will-change-transform transform-gpu flex items-center justify-center"
      >
        {/* Subtle Cybernetic Firewall Background Video */}
        <video
          ref={videoRef}
          src="/videos/firewall.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.38] mix-blend-screen filter brightness-95 contrast-110"
        />

        {/* Cybernetic Matrix Geometric Mesh (Overlay) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 mix-blend-screen"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="fwGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="rgba(217, 186, 132, 0.08)"
                strokeWidth="0.75"
              />
              <circle cx="0" cy="0" r="1.5" fill="rgba(217, 186, 132, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fwGrid)" />
        </svg>

        {/* Ambient Volumetric Color Flares (Champagne Gold & Amber) */}
        <div className="absolute top-1/4 left-1/4 size-[700px] rounded-full bg-radial from-[#d9ba84]/12 via-[#c8542f]/4 to-transparent blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 size-[600px] rounded-full bg-radial from-[#c8542f]/10 via-[#d9ba84]/3 to-transparent blur-[120px] pointer-events-none" />
      </div>

      {/* 60fps.fr Dark Studio Vignette & Legibility Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.92)_95%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-black/95 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </div>
  );
};
