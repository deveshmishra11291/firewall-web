import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const WebGLBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera & Atmospheric Depth Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0035);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1400
    );
    camera.position.set(0, 0, 95);

    // High performance renderer with antialiasing
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. 3D Logarithmic Spiral Vortex Particle System (3,600 Particles across 4 Arms)
    const numArms = 4;
    const particlesPerArm = 900;
    const totalParticles = numArms * particlesPerArm;

    const spiralGeometry = new THREE.BufferGeometry();
    const basePositions = new Float32Array(totalParticles * 3);
    const livePositions = new Float32Array(totalParticles * 3);
    const originalNormals = new Float32Array(totalParticles * 3);
    const colors = new Float32Array(totalParticles * 3);
    const armIndices = new Float32Array(totalParticles);
    const tValues = new Float32Array(totalParticles);

    const coreColor = new THREE.Color('#ffffff');
    const goldColor = new THREE.Color('#d9ba84');
    const amberColor = new THREE.Color('#c8542f');
    const deepColor = new THREE.Color('#221008');

    let pIdx = 0;
    for (let arm = 0; arm < numArms; arm++) {
      const armOffset = (arm * 2 * Math.PI) / numArms;

      for (let i = 0; i < particlesPerArm; i++) {
        const t = i / particlesPerArm; // 0 (center) to 1 (outer tip)
        tValues[pIdx] = t;
        armIndices[pIdx] = arm;

        // Logarithmic Spiral curvature formula
        const theta = t * 15 * Math.PI; // Spiral twists
        const baseRadius = 1.2 + 82 * Math.pow(t, 1.28);
        const baseZ = -200 + 340 * t; // Funnel depth

        const x = baseRadius * Math.cos(theta + armOffset);
        const y = baseRadius * Math.sin(theta + armOffset);
        const z = baseZ;

        basePositions[pIdx * 3] = x;
        basePositions[pIdx * 3 + 1] = y;
        basePositions[pIdx * 3 + 2] = z;

        livePositions[pIdx * 3] = x;
        livePositions[pIdx * 3 + 1] = y;
        livePositions[pIdx * 3 + 2] = z;

        originalNormals[pIdx * 3] = Math.cos(theta + armOffset);
        originalNormals[pIdx * 3 + 1] = Math.sin(theta + armOffset);
        originalNormals[pIdx * 3 + 2] = 0;

        // Luxury 60fps Color Gradient: Pure White -> Champagne Gold -> Warm Crimson Amber
        const color = new THREE.Color();
        if (t < 0.12) {
          color.lerpColors(coreColor, goldColor, t / 0.12);
        } else if (t < 0.6) {
          color.lerpColors(goldColor, amberColor, (t - 0.12) / 0.48);
        } else {
          color.lerpColors(amberColor, deepColor, (t - 0.6) / 0.4);
        }

        colors[pIdx * 3] = color.r;
        colors[pIdx * 3 + 1] = color.g;
        colors[pIdx * 3 + 2] = color.b;

        pIdx++;
      }
    }

    spiralGeometry.setAttribute('position', new THREE.BufferAttribute(livePositions, 3));
    spiralGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const spiralMaterial = new THREE.PointsMaterial({
      size: 1.7,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const spiralPoints = new THREE.Points(spiralGeometry, spiralMaterial);
    scene.add(spiralPoints);

    // 3. Concentric Spiral Luminous Filament Curves
    const filamentCurves: THREE.Line[] = [];
    for (let arm = 0; arm < numArms; arm++) {
      const armOffset = (arm * 2 * Math.PI) / numArms;
      const points: THREE.Vector3[] = [];

      for (let i = 0; i <= 240; i++) {
        const t = i / 240;
        const theta = t * 15 * Math.PI;
        const r = 1.2 + 82 * Math.pow(t, 1.28);
        const z = -200 + 340 * t;
        points.push(new THREE.Vector3(r * Math.cos(theta + armOffset), r * Math.sin(theta + armOffset), z));
      }

      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: arm % 2 === 0 ? 0xd9ba84 : 0xc8542f,
        transparent: true,
        opacity: 0.22,
      });

      const line = new THREE.Line(curveGeo, curveMat);
      scene.add(line);
      filamentCurves.push(line);
    }

    // Interactive States: Mouse Tracking, Shockwaves & Scroll Unfolding
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let worldMouse = new THREE.Vector3(0, 0, 0);

    interface Shockwave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      strength: number;
    }
    const shockwaves: Shockwave[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

      // Project mouse coordinates to approximate z=0 plane
      worldMouse.set(mouseX * 60, -mouseY * 40, 0);
    };

    const handleClick = (e: MouseEvent) => {
      const clickX = (e.clientX / window.innerWidth - 0.5) * 120;
      const clickY = -(e.clientY / window.innerHeight - 0.5) * 80;
      shockwaves.push({
        x: clickX,
        y: clickY,
        radius: 0,
        maxRadius: 180,
        speed: 4.5,
        strength: 14.0,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick);

    let scrollY = 0;
    let maxScroll = 1;
    const handleScroll = () => {
      scrollY = window.scrollY;
      maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      handleScroll();
    };
    window.addEventListener('resize', handleResize);

    // Opening Unfold Animation State
    let openingProgress = 0;
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth opening blossom from center singularity
      if (openingProgress < 1) {
        openingProgress = Math.min(openingProgress + 0.015, 1);
      }

      // Scroll Unfold Ratio (0.0 at top of page, 1.0 at bottom)
      const scrollRatio = Math.min(scrollY / maxScroll, 1);

      // Smooth camera interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 18;
      camera.position.y = -targetY * 14;

      // Camera travels through spiral tunnel and rotates with scroll
      camera.position.z = 95 - scrollRatio * 50;
      camera.rotation.z = scrollRatio * Math.PI * 1.25;

      // Continuous spiral rotation with opening burst
      const baseRotationSpeed = 0.22;
      const rotationAngle = elapsedTime * baseRotationSpeed;
      spiralPoints.rotation.z = rotationAngle;

      filamentCurves.forEach((line) => {
        line.rotation.z = rotationAngle;
      });

      // Update shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += sw.speed;
        sw.strength *= 0.96;
        if (sw.radius >= sw.maxRadius || sw.strength <= 0.2) {
          shockwaves.splice(s, 1);
        }
      }

      // Dynamic Spiral Unfolding Mechanics with Mouse Repulsion & Click Shockwaves
      const unfoldRadiusMult = 0.3 + openingProgress * 0.7 + scrollRatio * 2.4;
      const uncoilTwist = 1.0 - scrollRatio * 0.45; // spiral unwinds as you scroll

      const posAttr = spiralGeometry.attributes.position;
      const posArr = posAttr.array as Float32Array;

      // Cosine/sine for rotating frame of reference
      const cosRot = Math.cos(rotationAngle);
      const sinRot = Math.sin(rotationAngle);

      for (let i = 0; i < totalParticles; i++) {
        const t = tValues[i];
        const arm = armIndices[i];
        const armOffset = (arm * 2 * Math.PI) / numArms;

        // Spiral angle unwinds as scrollRatio increases
        const theta = t * 15 * Math.PI * uncoilTwist;
        const currentRadius = (1.2 + 82 * Math.pow(t, 1.28)) * unfoldRadiusMult;
        const currentZ = -200 + 340 * t * (1.0 + scrollRatio * 0.8);

        // Fluid undulating wave
        const wave = Math.sin(t * 12 + elapsedTime * 2.2) * (2.2 + scrollRatio * 4.5);
        const r = currentRadius + wave;

        let px = r * Math.cos(theta + armOffset);
        let py = r * Math.sin(theta + armOffset);
        let pz = currentZ;

        // Calculate world space position after rotation for mouse physics
        const wx = px * cosRot - py * sinRot;
        const wy = px * sinRot + py * cosRot;

        // 1. Mouse Repulsion Force Field in World Space
        const dx = wx - worldMouse.x;
        const dy = wy - worldMouse.y;
        const distSq = dx * dx + dy * dy;
        const repulsionRadiusSq = 35 * 35;

        if (distSq < repulsionRadiusSq && distSq > 0.01) {
          const dist = Math.sqrt(distSq);
          const force = (1.0 - dist / 35) * 9.0;
          const repX = (dx / dist) * force;
          const repY = (dy / dist) * force;

          // Rotate back to local coords
          px += repX * cosRot + repY * sinRot;
          py += -repX * sinRot + repY * cosRot;
        }

        // 2. Click Shockwave Impulse
        for (let s = 0; s < shockwaves.length; s++) {
          const sw = shockwaves[s];
          const sdx = wx - sw.x;
          const sdy = wy - sw.y;
          const sDist = Math.sqrt(sdx * sdx + sdy * sdy);
          const ringDist = Math.abs(sDist - sw.radius);

          if (ringDist < 20) {
            const rippleForce = Math.sin((1 - ringDist / 20) * Math.PI) * sw.strength;
            const shockX = (sdx / (sDist || 1)) * rippleForce;
            const shockY = (sdy / (sDist || 1)) * rippleForce;

            px += shockX * cosRot + shockY * sinRot;
            py += -shockX * sinRot + shockY * cosRot;
            pz += rippleForce * 0.8;
          }
        }

        posArr[i * 3] = px;
        posArr[i * 3 + 1] = py;
        posArr[i * 3 + 2] = pz;
      }

      posAttr.needsUpdate = true;

      // Render Scene
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      id="canvas-wrapper"
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};
