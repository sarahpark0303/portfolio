"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "분석",
    sub: "계정 점검",
    desc: "현재 계정을 깊이 들여다봅니다. 콘텐츠 감사, 오디언스 분석, 인게이지먼트 패턴, 경쟁자 포지셔닝 — 지금 어디에 서 있는지, 왜 그런지를 정확하게 파악합니다.",
    deliverable: "계정 분석 리포트",
  },
  {
    num: "02",
    title: "포지셔닝",
    sub: "전략 수립",
    desc: "나만의 니치, 목소리, 그리고 하나의 부정할 수 없는 관점을 정의합니다. 대부분의 크리에이터가 이 단계를 건너뛰는 이유가 바로 성장이 멈추는 이유예요. 저는 건너뛰지 않습니다.",
    deliverable: "포지셔닝 전략 문서",
  },
  {
    num: "03",
    title: "제작",
    sub: "시스템 구축",
    desc: "포지셔닝에 맞게 설계된 콘텐츠 시스템을 구축합니다. 콘텐츠 기둥, 포맷 전략, 내 오디언스에 맞는 훅, 삶에 맞는 포스팅 리듬까지.",
    deliverable: "90일 콘텐츠 플레이북",
  },
  {
    num: "04",
    title: "성장",
    sub: "실행",
    desc: "지속적인 지원과 함께 실행합니다. 중요한 지표를 추적하고, 빠르게 개선하고, 효과 있는 것을 두 배로 늘립니다. 성장이 추측이 아닌 시스템이 됩니다.",
    deliverable: "월간 퍼포먼스 리뷰",
  },
];

export default function ConsultingFramework() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="framework" style={{ background: "var(--bg-2)" }}>

      {/* 헤더 */}
      <div
        className="px-5 md:px-14 py-9 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 md:items-end"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}>
          <span className="label">컨설팅 프레임워크</span>
          <h2
            className="serif font-bold mt-2 text-2xl md:text-4xl leading-tight"
            style={{ fontFamily: "var(--font-serif-kr)", color: "var(--text)", letterSpacing: "-0.01em" }}>
            크리에이터를 누구나 아는
            <br />
            <em className="italic" style={{ color: "var(--pink-deep)" }}>이름으로 만드는 법</em>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-sm leading-[1.85]"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
          100건 이상의 크리에이터 컨설팅을 바탕으로 만든 4단계 전략 시스템.
          각 단계는 이전 단계 위에 쌓입니다 — 지름길도, 일반 템플릿도 없어요.
        </motion.p>
      </div>

      {/* 스텝 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 + i * 0.12 }}
            className="px-6 md:px-8 py-10 md:py-12 flex flex-col gap-5 relative"
            style={{
              borderBottom: "1px solid var(--border)",
              borderRight: i < 3 ? "1px solid var(--border)" : "none",
              background: i === 1 ? "var(--bg)" : "var(--bg-2)",
            }}>

            {/* 대형 번호 */}
            <span
              className="serif-latin font-bold leading-none"
              style={{
                fontFamily: "var(--font-serif-latin)",
                fontSize: "clamp(2.8rem, 4.5vw, 3.8rem)",
                color: i === 1 ? "var(--pink-deep)" : "var(--border)",
                letterSpacing: "-0.03em",
              }}>
              {step.num}
            </span>

            {/* 제목 */}
            <div>
              <p className="label mb-1.5">{step.sub}</p>
              <h3
                className="serif font-bold text-2xl"
                style={{ fontFamily: "var(--font-serif-kr)", color: "var(--text)", letterSpacing: "-0.01em" }}>
                {step.title}
              </h3>
            </div>

            {/* 구분선 */}
            <div style={{ height: "1px", background: "var(--border)" }} />

            {/* 설명 */}
            <p
              className="text-sm leading-[1.85] flex-1"
              style={{ color: "var(--text-sub)", fontFamily: "var(--font-sans)" }}>
              {step.desc}
            </p>

            {/* 결과물 */}
            <div className="pt-3 mt-auto" style={{ borderTop: "1px solid var(--border)" }}>
              <span className="label" style={{ color: "var(--text-muted)" }}>결과물</span>
              <p
                className="mt-1.5 text-sm font-medium"
                style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}>
                {step.deliverable}
              </p>
            </div>

            {/* 단계 연결 화살표 */}
            {i < 3 && (
              <div
                className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-7 h-7 rounded-full"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5H8M8 5L5.5 2.5M8 5L5.5 7.5"
                    stroke="var(--text-muted)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
