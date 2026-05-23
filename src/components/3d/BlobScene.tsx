"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// 파스텔 팔레트 (RGB 0-1)
const COLORS = [
  new THREE.Color(0xff4d8d), // pink vivid
  new THREE.Color(0xff80aa), // pink mid
  new THREE.Color(0x8250ff), // violet
  new THREE.Color(0xb980ff), // violet light
  new THREE.Color(0x38bdf8), // teal
  new THREE.Color(0xff6eb0), // rose
];

const PARTICLE_COUNT = 320;

export default function ParticleScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // ── Scene / Camera ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 6;

    // ── Particles ──
    const positions  = new Float32Array(PARTICLE_COUNT * 3);
    const colors     = new Float32Array(PARTICLE_COUNT * 3);
    const sizes      = new Float32Array(PARTICLE_COUNT);
    const speeds     = new Float32Array(PARTICLE_COUNT);   // 각 파티클 부유 속도
    const phases     = new Float32Array(PARTICLE_COUNT);   // 위상 오프셋
    const depths     = new Float32Array(PARTICLE_COUNT);   // z 깊이 (패럴랙스 계수)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // 위치 — 넓게 퍼뜨리기
      positions[i * 3 + 0] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1; // 텍스트 뒤쪽

      const col = COLORS[Math.floor(Math.random() * COLORS.length)];
      colors[i * 3 + 0] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      sizes[i]  = Math.random() * 5 + 2;        // 2~7px
      speeds[i] = Math.random() * 0.3 + 0.1;
      phases[i] = Math.random() * Math.PI * 2;
      depths[i] = Math.random();                 // 0 = 가까이, 1 = 멀리
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color",    new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size",     new THREE.BufferAttribute(sizes, 1));

    // 원형 소프트 파티클 텍스처
    const texCanvas = document.createElement("canvas");
    texCanvas.width = texCanvas.height = 64;
    const ctx = texCanvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0,   "rgba(255,255,255,1)");
    grad.addColorStop(0.4, "rgba(255,255,255,0.6)");
    grad.addColorStop(1,   "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(texCanvas);

    const material = new THREE.PointsMaterial({
      size: 0.15,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // 초기 위치 저장 (부유 애니메이션 기준점)
    const basePositions = positions.slice();

    // ── 리사이즈 ──
    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── 마우스 패럴랙스 ──
    const mouse  = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    // ── 애니메이션 루프 ──
    let raf: number;
    const clock = new THREE.Clock();
    const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      // 마우스 스무딩
      mouse.x += (target.x - mouse.x) * 0.04;
      mouse.y += (target.y - mouse.y) * 0.04;

      // 각 파티클 부유 + 깊이별 패럴랙스
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const bx = basePositions[i * 3 + 0];
        const by = basePositions[i * 3 + 1];

        // 깊이 계수: 가까운 파티클(depths ≈ 0)이 마우스에 더 많이 반응
        const d = depths[i];
        const parallaxStrength = (1 - d) * 1.2 + 0.2;

        posAttr.array[i * 3 + 0] =
          bx + Math.sin(t * speeds[i] + phases[i]) * 0.4
             - mouse.x * parallaxStrength;

        posAttr.array[i * 3 + 1] =
          by + Math.cos(t * speeds[i] * 0.7 + phases[i]) * 0.3
             + mouse.y * parallaxStrength * 0.6;
      }
      posAttr.needsUpdate = true;

      // 카메라도 살짝 이동 (전체 씬 패럴랙스)
      camera.position.x += (-mouse.x * 0.3 - camera.position.x) * 0.05;
      camera.position.y += ( mouse.y * 0.2 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };
    tick();

    // ── 클린업 ──
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block", pointerEvents: "none" }}
    />
  );
}
