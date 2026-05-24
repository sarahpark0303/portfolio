"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="cta" style={{ background: "var(--bg-dark)" }}>

      {/* 메인 CTA */}
      <div
        className="px-6 md:px-14 py-16 md:py-28 grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 md:gap-16 items-start md:items-end"
        style={{ borderBottom: "1px solid var(--border-dark)" }}>

        {/* 왼쪽: 카피 */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10">
            <div style={{ height: "1px", width: "28px", background: "rgba(247,182,210,0.4)" }} />
            <span className="label" style={{ color: "rgba(247,182,210,0.55)" }}>준비됐나요?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="serif font-bold leading-[1.05]"
            style={{
              fontFamily: "var(--font-serif-kr)",
              fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
              color: "var(--text-inv)",
              letterSpacing: "-0.01em",
            }}>
            기억에 남는
            <br />
            크리에이터가 될
            <br />
            <em className="italic" style={{ color: "var(--pink)" }}>준비됐나요?</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 space-y-1.5">
            <p
              className="serif italic text-lg"
              style={{ fontFamily: "var(--font-serif-kr)", color: "rgba(250,248,245,0.35)" }}>
              평범한 크리에이터가 아닌,
            </p>
            <p
              className="serif italic text-lg"
              style={{ fontFamily: "var(--font-serif-kr)", color: "rgba(250,248,245,0.35)" }}>
              사람들이 기억하는 크리에이터.
            </p>
          </motion.div>
        </div>

        {/* 오른쪽: 연락 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="flex flex-col gap-6 p-7 md:p-8"
          style={{ background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)" }}>

          <div>
            <span className="label" style={{ color: "rgba(247,182,210,0.55)" }}>컨설팅 예약</span>
            <p
              className="mt-2.5 text-sm leading-[1.8]"
              style={{ color: "rgba(250,248,245,0.4)", fontFamily: "var(--font-sans)" }}>
              전략 세션은 60분입니다.
              매달 자리가 제한되어 있어요.
            </p>
          </div>

          <div style={{ height: "1px", background: "var(--border-dark)" }} />

          <div className="flex flex-col gap-3">
            <a
              href="mailto:sarahpark0303@gmail.com"
              className="btn-primary justify-center"
              style={{ background: "var(--pink)", color: "var(--text)" }}>
              이메일로 예약하기
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5H11M11 6.5L7.5 3M11 6.5L7.5 10"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/zoe_the_grande/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost justify-center"
              style={{ borderColor: "rgba(255,255,255,0.12)", color: "var(--text-inv)" }}>
              인스타그램 DM
            </a>
          </div>

          <div style={{ height: "1px", background: "var(--border-dark)" }} />

          <p
            className="text-xs text-center"
            style={{ color: "rgba(250,248,245,0.2)", fontFamily: "var(--font-sans)" }}>
            sarahpark0303@gmail.com · @zoe_the_grande
          </p>
        </motion.div>
      </div>

      {/* 푸터 */}
      <div className="px-6 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span
          className="serif-latin italic text-sm"
          style={{ fontFamily: "var(--font-serif-latin)", color: "rgba(250,248,245,0.2)" }}>
          Zoe
        </span>
        <span
          className="label order-last md:order-none"
          style={{ color: "rgba(250,248,245,0.15)" }}>
          © {new Date().getFullYear()} · SNS 성장 컨설팅
        </span>
        <a
          href="https://www.instagram.com/zoe_the_grande/"
          target="_blank"
          rel="noopener noreferrer"
          className="label transition-opacity hover:opacity-60"
          style={{ color: "rgba(250,248,245,0.25)" }}>
          인스타그램
        </a>
      </div>
    </section>
  );
}
