"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, active: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let v = 0;
    const step = target / 80;
    const t = setInterval(() => {
      v += step;
      if (v >= target) { setN(target); clearInterval(t); }
      else setN(Math.floor(v));
    }, 18);
    return () => clearInterval(t);
  }, [target, active]);
  return n;
}

const stats = [
  {
    value: 6000,
    suffix: "+",
    label: "인스타그램 팔로워",
    sub: "신규 계정에서 3개월 만에 달성",
    tag: "Instagram",
  },
  {
    value: 1000,
    suffix: "+",
    label: "틱톡 팔로워",
    sub: "2주 만에 첫 1,000명",
    tag: "TikTok",
  },
  {
    value: 100,
    suffix: "+",
    label: "컨설팅 문의",
    sub: "오픈 첫 7일 만에 받은 문의",
    tag: "1주일",
  },
];

export default function Credibility() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const c0 = useCountUp(stats[0].value, isInView);
  const c1 = useCountUp(stats[1].value, isInView);
  const c2 = useCountUp(stats[2].value, isInView);
  const counts = [c0, c1, c2];

  return (
    <section ref={ref} style={{ background: "var(--bg)" }}>

      {/* 섹션 헤더 */}
      <div
        className="px-6 md:px-14 py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
        style={{ borderBottom: "1px solid var(--border)" }}>
        <motion.span
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="label">
          숫자가 말합니다
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
          토리 본인 계정 기준. 이론이 아닌 직접 검증한 숫자.
        </motion.p>
      </div>

      {/* 스탯 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="px-6 md:px-12 py-14 md:py-16 flex flex-col gap-4"
            style={{
              borderBottom: "1px solid var(--border)",
              borderRight: i < 2 ? "1px solid var(--border)" : "none",
            }}>

            {/* 인덱스 */}
            <span className="label" style={{ color: "var(--pink-deep)" }}>0{i + 1}</span>

            {/* 대형 숫자 */}
            <div className="flex items-baseline gap-1">
              <span
                className="serif-latin font-bold leading-none tabular-nums"
                style={{
                  fontFamily: "var(--font-serif-latin)",
                  fontSize: "clamp(4.5rem, 10vw, 8rem)",
                  color: "var(--text)",
                  letterSpacing: "-0.04em",
                }}>
                {counts[i].toLocaleString()}
              </span>
              <span
                className="serif-latin font-bold"
                style={{
                  fontFamily: "var(--font-serif-latin)",
                  fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                  color: "var(--pink-deep)",
                  letterSpacing: "-0.02em",
                }}>
                {s.suffix}
              </span>
            </div>

            {/* 구분선 */}
            <div style={{ height: "1px", background: "var(--border)", width: "44px" }} />

            {/* 설명 */}
            <div>
              <p
                className="font-semibold text-base"
                style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}>
                {s.label}
              </p>
              <p
                className="mt-1 text-sm leading-relaxed"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
                {s.sub}
              </p>
            </div>

            <span className="tag w-fit">{s.tag}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
