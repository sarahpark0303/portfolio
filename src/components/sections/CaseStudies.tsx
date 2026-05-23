"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cases = [
  {
    issue: "케이스 01",
    niche: "라이프스타일 & 웰니스",
    handle: "@lifestyle_creator",
    before: { followers: "2.1K", engagement: "1.2%" },
    after:  { followers: "12K",  engagement: "6.8%" },
    period: "3개월",
    headline: "보이지 않던 계정에서 자석 같은 계정으로",
    story: "피드는 예쁘고 꾸준히 올렸는데 성장이 없었어요. 이유는 단 하나였습니다 — 뚜렷한 관점이 없었던 거예요. '휴식이 생산성 전략'이라는 핵심 아이디어 하나로 포지셔닝을 재정립했고, 90일 만에 팔로워가 3배가 됐습니다.",
    result: "전략 수립 첫 달 +800 팔로워",
    tags: ["포지셔닝", "Instagram"],
  },
  {
    issue: "케이스 02",
    niche: "패션 콘텐츠",
    handle: "@fashion_influencer",
    before: { followers: "60K",  engagement: "0.8%" },
    after:  { followers: "60K",  engagement: "4.2%" },
    period: "6주",
    headline: "숫자보다 진짜 반응",
    story: "팔로워는 6만이지만 인게이지먼트가 거의 없었어요. 문제는 콘텐츠 품질이 아니라 모두에게 말하다 보니 아무에게도 와닿지 않았던 것이었어요. 타겟 오디언스 한 명에게 집중하는 방향으로 전환했고, 릴스 도달이 3배로 뛰었습니다.",
    result: "포지셔닝 전환 후 릴스 도달 3배",
    tags: ["인게이지먼트", "릴스 전략"],
  },
  {
    issue: "케이스 03",
    niche: "로컬 F&B 비즈니스",
    handle: "@cafe_local",
    before: { followers: "380",  engagement: "2.1%" },
    after:  { followers: "1K+",  engagement: "9.3%" },
    period: "2개월",
    headline: "동네 브랜드, 단단한 커뮤니티",
    story: "음료는 맛있는데 SNS로 보여주는 법을 몰랐어요. 바이럴 트렌드 대신 하이퍼로컬 커뮤니티 스토리텔링에 집중했습니다. 지금은 단골손님들이 '인스타 보고 왔다'고 말하며 방문해요.",
    result: "인스타 유입으로 오프라인 방문 40% 증가",
    tags: ["로컬 성장", "커뮤니티"],
  },
];

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="case-studies" style={{ background: "var(--bg-2)" }}>

      {/* 섹션 헤더 */}
      <div
        className="px-6 md:px-14 py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
        style={{ borderBottom: "1px solid var(--border)", borderTop: "1px solid var(--border)" }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}>
          <span className="label">클라이언트 케이스</span>
          <h2
            className="serif font-bold mt-2 text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-serif-kr)", color: "var(--text)", letterSpacing: "-0.01em" }}>
            케이스 스터디
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="serif italic text-base"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-serif-kr)" }}>
          실제 계정, 실제 성장.
        </motion.p>
      </div>

      {/* 케이스 목록 */}
      {cases.map((c, i) => (
        <motion.div
          key={c.issue}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: i * 0.12 }}
          className="group"
          style={{ borderBottom: "1px solid var(--border)" }}>

          {/* 모바일: 세로 스택 / 데스크탑: 3열 그리드 */}
          <div
            className="grid grid-cols-1 md:grid-cols-[180px_1fr_260px] transition-colors duration-200"
            style={{ background: i % 2 === 0 ? "var(--bg-2)" : "var(--bg)" }}>

            {/* 왼쪽: 메타 */}
            <div
              className="px-6 md:px-10 py-8 md:py-10 flex md:flex-col md:justify-between gap-4 md:gap-0 items-start"
              style={{
                borderBottom: "1px solid var(--border)",
                borderRight: "0",
              }}>
              <div>
                <span className="label-pink">{c.issue}</span>
                <p
                  className="mt-2 text-sm font-medium"
                  style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}>
                  {c.niche}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
                  {c.handle}
                </p>
              </div>
              <span className="tag md:mt-6">{c.period}</span>
            </div>

            {/* 가운데: 스토리 */}
            <div
              className="px-6 md:px-12 py-8 md:py-10"
              style={{ borderLeft: "1px solid var(--border)" }}>
              <h3
                className="serif font-bold text-xl md:text-2xl mb-4 leading-snug"
                style={{ fontFamily: "var(--font-serif-kr)", color: "var(--text)", letterSpacing: "-0.01em" }}>
                {c.headline}
              </h3>
              <p
                className="text-sm leading-[1.9] mb-5"
                style={{ color: "var(--text-sub)", fontFamily: "var(--font-sans)" }}>
                {c.story}
              </p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            {/* 오른쪽: 숫자 */}
            <div
              className="px-6 md:px-10 py-8 md:py-10 flex flex-col justify-center gap-7"
              style={{ borderLeft: "1px solid var(--border)", borderTop: "1px solid var(--border)" }}>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="label" style={{ color: "var(--text-muted)" }}>이전</span>
                  <div
                    className="serif-latin font-bold text-2xl mt-1"
                    style={{ fontFamily: "var(--font-serif-latin)", color: "var(--text-muted)" }}>
                    {c.before.followers}
                  </div>
                  <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
                    ER {c.before.engagement}
                  </div>
                </div>
                <div>
                  <span className="label-pink">이후</span>
                  <div
                    className="serif-latin font-bold text-2xl mt-1"
                    style={{ fontFamily: "var(--font-serif-latin)", color: "var(--text)" }}>
                    {c.after.followers}
                  </div>
                  <div style={{ fontSize: "0.65rem", color: "var(--pink-deep)", fontFamily: "var(--font-sans)", fontWeight: 600 }}>
                    ER {c.after.engagement}
                  </div>
                </div>
              </div>

              <div className="pt-5" style={{ borderTop: "1px solid var(--border)" }}>
                <span className="label">핵심 성과</span>
                <p
                  className="mt-2 text-sm font-medium leading-snug"
                  style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}>
                  {c.result}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
