"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const insights = [
  {
    num: "01",
    category: "포지셔닝",
    headline: "대부분의 크리에이터가 1K를 못 넘는 이유 — 콘텐츠 품질이 문제가 아니에요",
    body: "크리에이터가 성장을 멈추는 첫 번째 이유는 포스팅 빈도도, 해시태그도, 영상 품질도 아닙니다. 내가 어떤 사람으로 기억되고 싶은지를 아직 정의하지 않았기 때문이에요. 정체성의 명확함이 알고리즘과 사람의 관심을 모두 끌어당기는 토대입니다.",
    quote: "내가 어떤 사람으로\n기억되길 원하는가.",
  },
  {
    num: "02",
    category: "콘텐츠 심리학",
    headline: "저장이 좋아요보다 중요한 이유",
    body: "인스타그램과 틱톡은 모든 지표 중 저장을 가장 높게 평가합니다. 누군가 콘텐츠를 저장한다는 건 '나중에 다시 볼 가치가 있다'는 신호를 알고리즘에게 보내는 거예요. 모든 콘텐츠를 '저장하게 만드는 게시물'로 설계하세요.",
  },
  {
    num: "03",
    category: "팔로워 성장",
    headline: "좁힐수록 빠르게 성장한다 — 역설적인 성장 법칙",
    body: "넓은 계정은 느리게 자랍니다. 좁은 계정은 빠르게 자라요. 모두에게 말하면 알고리즘은 누구에게 보여줄지 모릅니다. 한 사람에게 말하면, 알고리즘이 그 사람 만 명을 찾아줘요.",
  },
  {
    num: "04",
    category: "퍼스널 브랜딩",
    headline: "당신의 개성이 곧 상품입니다",
    body: "콘텐츠가 무한히 쏟아지는 세상에서 남은 유일한 차별점은 당신 자신입니다 — 관점, 목소리, 모순까지도. 진짜 개성을 드러내는 크리에이터는 중립적이고 안전한 크리에이터를 항상 이겨요.",
  },
];

export default function GrowthInsights() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ background: "var(--bg)" }}>

      {/* 헤더 */}
      <div
        className="px-5 md:px-14 py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}>
          <span className="label">성장 인사이트</span>
          <h2
            className="serif font-bold mt-2 text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-serif-kr)", color: "var(--text)", letterSpacing: "-0.01em" }}>
            대부분의 크리에이터가 놓치는 것
          </h2>
        </motion.div>
      </div>

      {/* 피처 카드 (첫 번째 — 전체 너비, 다크) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-dark)" }}>

        {/* 왼쪽: 텍스트 */}
        <div
          className="px-5 md:px-14 py-12 md:py-16 flex flex-col justify-between gap-8"
          style={{ borderRight: "1px solid var(--border-dark)" }}>
          <div>
            <span className="label" style={{ color: "rgba(247,182,210,0.75)" }}>
              {insights[0].num} — {insights[0].category}
            </span>
            <h3
              className="serif font-bold mt-4 text-xl md:text-2xl leading-snug"
              style={{ fontFamily: "var(--font-serif-kr)", color: "var(--text-inv)", letterSpacing: "-0.01em" }}>
              {insights[0].headline}
            </h3>
          </div>
          <p
            className="text-sm leading-[1.9]"
            style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-sans)" }}>
            {insights[0].body}
          </p>
        </div>

        {/* 오른쪽: 데코 인용구 */}
        <div className="hidden md:flex items-center justify-center p-14">
          <div
            className="serif italic text-center whitespace-pre-line"
            style={{
              fontFamily: "var(--font-serif-kr)",
              fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
              color: "var(--pink)",
              opacity: 0.35,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}>
            {insights[0].quote}
          </div>
        </div>
      </motion.div>

      {/* 3개 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {insights.slice(1).map((insight, i) => (
          <motion.div
            key={insight.num}
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="px-5 md:px-10 py-10 flex flex-col gap-5"
            style={{
              borderBottom: "1px solid var(--border)",
              borderRight: i < 2 ? "1px solid var(--border)" : "none",
              background: i === 1 ? "var(--bg-2)" : "var(--bg)",
            }}>

            <span className="label">{insight.num} — {insight.category}</span>

            <h3
              className="serif font-bold text-lg leading-snug"
              style={{ fontFamily: "var(--font-serif-kr)", color: "var(--text)", letterSpacing: "-0.01em" }}>
              {insight.headline}
            </h3>

            <div style={{ height: "1px", background: "var(--border)", width: "32px" }} />

            <p
              className="text-sm leading-[1.85] flex-1"
              style={{ color: "var(--text-sub)", fontFamily: "var(--font-sans)" }}>
              {insight.body}
            </p>

            <span className="tag w-fit">{insight.category}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
