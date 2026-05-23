"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroOrbs } from "@/components/ui/Blobs";
import GlassCard from "@/components/ui/GlassCard";

const ParticleScene = dynamic(() => import("@/components/3d/BlobScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const textY  = useTransform(scrollY, [0, 500], [0, -80]);
  const fadeOp = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,77,141,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(130,80,255,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 70%, rgba(56,189,248,0.12) 0%, transparent 60%), var(--bg)",
      }}>

      {/* 격자 패턴 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)",
        }} />

      {/* 배경 오브 (패럴랙스) */}
      <HeroOrbs />

      {/* Three.js 파티클 */}
      <ParticleScene />

      {/* 콘텐츠 */}
      <motion.div style={{ y: textY, opacity: fadeOp }}
        className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-24 flex flex-col items-center text-center">

        {/* 배지 */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="mb-7 sm:mb-8">
          <GlassCard variant="pink" rounded="rounded-full"
            className="inline-flex items-center gap-2 px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--pink)" }} />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--pink)" }}>
              SNS 성장 컨설턴트
            </span>
          </GlassCard>
        </motion.div>

        {/* 헤드라인 */}
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.02] tracking-tight mb-6"
          style={{ color: "var(--text)" }}>
          <span className="block">숫자로 증명하는</span>
          <span className="block mt-1" style={{
            background: "linear-gradient(120deg, #FF4D8D 0%, #FF80AA 40%, #B980FF 80%, #7C9BFF 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            filter: "drop-shadow(0 0 40px rgba(255,77,141,0.35))",
          }}>
            SNS 성장.
          </span>
        </motion.h1>

        {/* 서브카피 — br 제거, 자연스러운 줄바꿈 */}
        <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-9 sm:mb-10 max-w-xl"
          style={{ color: "var(--text-sub)" }}>
          인스타 3개월 만에 6K, 틱톡 1주일 만에 1K.{" "}
          팔로워가 많은 사람들도 찾아오는 나만의 인사이트로 당신의 계정을 성장시켜 드립니다.
        </motion.p>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.26 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-14 sm:mb-16 w-full sm:w-auto">
          <a href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            style={{ background: "var(--pink)", boxShadow: "0 0 40px rgba(255,77,141,0.5)" }}>
            컨설팅 신청하기
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 7.5H12.5M12.5 7.5L8 3M12.5 7.5L8 12"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <GlassCard variant="mid" rounded="rounded-full" className="overflow-visible">
            <a href="#consulting"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
              style={{ color: "var(--text)" }}>
              실적 보기
            </a>
          </GlassCard>
        </motion.div>

        {/* 스탯 칩 — 모바일에서 안정적으로 wrap */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-md sm:max-w-none">
          {[
            { value: "6K+",  label: "인스타 팔로워", note: "3개월" },
            { value: "1K+",  label: "틱톡",          note: "1주일" },
            { value: "100+", label: "컨설팅 문의",   note: "오픈 1주" },
          ].map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}>
              <GlassCard variant="low" className="px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg sm:text-xl font-black" style={{ color: "var(--pink)" }}>{s.value}</span>
                  <span className="text-[11px] sm:text-xs" style={{ color: "var(--text-sub)" }}>{s.label}</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap"
                  style={{ background: "var(--pink-soft)", color: "var(--pink)" }}>
                  {s.note}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* 하단 페이드 — Hero에서 다음 단색 섹션으로 자연스럽게 전환 */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg) 90%)" }} />

      {/* 스크롤 힌트 */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ opacity: fadeOp }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5 glass-low">
          <div className="w-1 h-1.5 rounded-full" style={{ background: "var(--pink)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
