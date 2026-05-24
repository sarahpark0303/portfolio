"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionGlow } from "@/components/ui/Blobs";
import GlassCard from "@/components/ui/GlassCard";

const points = [
  {
    num: "01", accent: "var(--pink)",
    title: "압도적인 성장 속도",
    desc: "인스타 본계정 3개월 만에 6K, 부계정 2주 만에 1K, 틱톡 1주일 만에 1K. 단순한 운이 아닌 반복 가능한 전략으로 만들어낸 결과.",
    tag: "재현 가능한 공식",
  },
  {
    num: "02", accent: "#A78BFA",
    title: "나만의 커스텀 인사이트",
    desc: "6만, 1.2만, 4K 팔로워 마이크로 인플루언서도 찾아오는 이유. 수치 기반의 계정별 맞춤 전략을 드립니다.",
    tag: "마이크로 인플루언서도 인정",
  },
  {
    num: "03", accent: "#38BDF8",
    title: "검증된 컨설팅 수요",
    desc: "오픈 일주일 만에 문의 약 100건 (댓글 40건 + DM 50건). 시장이 먼저 반응했습니다.",
    tag: "1주일 100건 문의",
  },
];

export default function Appeal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 px-5 md:px-6 overflow-hidden" style={{ background: "var(--bg-2)" }}>
      <SectionGlow />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="mb-10 md:mb-16">
          <p className="inline-flex items-center gap-2 text-[11px] md:text-xs font-black tracking-widest uppercase mb-3" style={{ color: "var(--pink)" }}>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--pink)" }} />
            Why Zoe
          </p>
          <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl font-black leading-tight" style={{ color: "var(--text)" }}>
            왜 조이(Zoe)인가요?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 36 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.14 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}>
              <GlassCard variant="mid" className="p-6 md:p-8 flex flex-col gap-4 md:gap-5 h-full relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-3xl md:text-4xl font-black opacity-25" style={{ color: p.accent }}>{p.num}</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ background: `${p.accent}15`, color: p.accent, border: `1px solid ${p.accent}35` }}>
                    {p.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3" style={{ color: "var(--text)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-sub)" }}>{p.desc}</p>
                </div>

                {/* 하단 액센트 선 */}
                <div className="mt-auto h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, ${p.accent}60, transparent)` }} />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
