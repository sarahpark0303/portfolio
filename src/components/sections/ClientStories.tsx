"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { maskHandle } from "@/lib/mask";

const stories = [
  {
    num: "01",
    niche: "라이프스타일 & 웰니스",
    handle: "@lifestyle_creator",
    period: "3개월",
    headline: "보이지 않던 계정에서\n자석 같은 계정으로",
    story: "피드는 예쁘고 꾸준히 올렸는데 성장이 없었어요. 이유는 하나였습니다 — 뚜렷한 관점이 없었던 거예요. '휴식이 생산성 전략'이라는 핵심 아이디어 하나로 포지셔닝을 재정립했고 팔로워가 늘기 시작했습니다.",
    tags: ["포지셔닝", "Instagram"],
  },
  {
    num: "02",
    niche: "패션 콘텐츠",
    handle: "@fashion_influencer",
    period: "6주",
    headline: "팔로워보다 중요한 건\n진짜 반응",
    story: "팔로워는 많은데 인게이지먼트가 거의 없었어요. 모두에게 말하다 보니 아무에게도 와닿지 않았던 거였어요. 타겟 오디언스 한 명에게 집중하는 방향으로 전환했고 릴스 반응이 달라지기 시작했습니다.",
    tags: ["인게이지먼트", "릴스 전략"],
  },
  {
    num: "03",
    niche: "로컬 F&B 비즈니스",
    handle: "@cafe_local",
    period: "2개월",
    headline: "바이럴 대신 선택한\n동네 커뮤니티",
    story: "음료는 맛있는데 SNS로 보여주는 법을 몰랐어요. 바이럴 트렌드 대신 하이퍼로컬 스토리텔링에 집중했습니다. 지금은 단골손님들이 '인스타 보고 왔다'고 말하며 방문해요.",
    tags: ["로컬 성장", "커뮤니티"],
  },
];

export default function ClientStories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="case-studies" style={{ background: "var(--bg-2)" }}>

      {/* 헤더 */}
      <div
        className="px-5 md:px-14 py-8 md:py-9"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}>
          <span className="label">클라이언트 이야기</span>
          <h2
            className="serif font-bold mt-2 text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-serif-kr)", color: "var(--text)", letterSpacing: "-0.01em" }}>
            이런 분들과 함께했어요
          </h2>
        </motion.div>
      </div>

      {/* 스토리 목록 */}
      {stories.map((s, i) => (
        <motion.div
          key={s.num}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: i * 0.1 }}
          style={{ borderBottom: "1px solid var(--border)" }}>

          {/* 모바일: 세로 / 데스크탑: 가로 2열 */}
          <div
            className="grid grid-cols-1 md:grid-cols-[200px_1fr]"
            style={{ background: i % 2 === 0 ? "var(--bg-2)" : "var(--bg)" }}>

            {/* 왼쪽: 메타 */}
            <div
              className="px-5 md:px-10 pt-7 pb-4 md:py-10 flex flex-row md:flex-col justify-between md:justify-start gap-4 md:gap-5"
              style={{ borderBottom: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>
              <div>
                <span className="label-pink">케이스 {s.num}</span>
                <p
                  className="mt-1.5 text-sm font-medium"
                  style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}>
                  {s.niche}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
                  {maskHandle(s.handle)}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:mt-4">
                <span className="tag">{s.period}</span>
              </div>
            </div>

            {/* 오른쪽: 스토리 */}
            <div className="px-5 md:px-12 py-8 md:py-10">
              <h3
                className="serif font-bold text-lg md:text-2xl mb-4 leading-[1.3] whitespace-pre-line"
                style={{ fontFamily: "var(--font-serif-kr)", color: "var(--text)", letterSpacing: "-0.01em" }}>
                {s.headline}
              </h3>
              <p
                className="text-sm leading-[1.9]"
                style={{ color: "var(--text-sub)", fontFamily: "var(--font-sans)" }}>
                {s.story}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
