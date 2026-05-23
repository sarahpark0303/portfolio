"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * 섹션 상단 글로우 — 그라데이션 대신 옅은 핑크 라인 글로우 한 줄만.
 * 다크 단색 배경 위에 섹션이 시작되는 위치를 부드럽게 표시한다.
 */
export function SectionGlow() {
  return (
    <div className="absolute inset-x-0 top-0 h-px pointer-events-none" aria-hidden>
      {/* 상단 1px 라인 */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,77,141,0.0) 15%, rgba(255,77,141,0.55) 50%, rgba(255,77,141,0.0) 85%, transparent 100%)",
        }}
      />
      {/* 라인 위에 살짝 번지는 옅은 글로우 */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-12 w-[420px] h-24 rounded-full blur-3xl opacity-50"
        style={{ background: "rgba(255,77,141,0.18)" }}
      />
    </div>
  );
}

/** Hero용 패럴랙스 오브 — 점보트론에 시각적 임팩트를 몰빵하는 핵심 요소 */
export function HeroOrbs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);
  const y3 = useTransform(scrollY, [0, 600], [0, -200]);
  const y4 = useTransform(scrollY, [0, 600], [0, -90]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div
        className="absolute -top-32 -right-20 sm:-right-32 w-[480px] sm:w-[640px] h-[480px] sm:h-[640px] rounded-full blur-[110px] sm:blur-[130px]"
        style={{ background: "rgba(255,77,141,0.38)", y: y1 }} />
      <motion.div
        className="absolute top-1/3 -left-32 sm:-left-48 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full blur-[90px] sm:blur-[110px]"
        style={{ background: "rgba(130,80,255,0.28)", y: y2 }} />
      <motion.div
        className="absolute bottom-10 right-1/4 w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full blur-[90px] sm:blur-[100px]"
        style={{ background: "rgba(56,189,248,0.22)", y: y3 }} />
      <motion.div
        className="absolute top-1/4 left-1/3 w-[260px] h-[260px] rounded-full blur-[80px]"
        style={{ background: "rgba(255,128,170,0.22)", y: y4 }} />
      {/* 노이즈 오버레이 */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
    </div>
  );
}
