"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { consultingList, type ConsultingCategory } from "@/data/consulting";
import { SectionGlow } from "@/components/ui/Blobs";
import GlassCard from "@/components/ui/GlassCard";

const categoryMeta: Record<
  ConsultingCategory,
  { label: string; color: string }
> = {
  wedding:   { label: "웨딩",        color: "#FF4D8D" },
  beauty:    { label: "뷰티",        color: "#FB7185" },
  student:   { label: "학생",        color: "#38BDF8" },
  brand:     { label: "브랜드",      color: "#FB923C" },
  lifestyle: { label: "라이프스타일", color: "#A78BFA" },
  body:      { label: "체형/스타일", color: "#34D399" },
};

const allTags = Array.from(new Set(consultingList.flatMap((i) => i.tags)));

export default function ConsultingList() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? consultingList.filter((i) => i.tags.includes(activeTag))
    : consultingList;

  return (
    <section ref={ref} id="consulting" className="relative py-20 md:py-28 px-5 md:px-6 overflow-hidden"
      style={{ background: "var(--bg)" }}>
      <SectionGlow />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="mb-8 md:mb-10">
          <p className="inline-flex items-center gap-2 text-[11px] md:text-xs font-black tracking-widest uppercase mb-3" style={{ color: "var(--pink)" }}>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--pink)" }} />
            Consulting
          </p>
          <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl font-black mb-1 leading-tight" style={{ color: "var(--text)" }}>
            컨설팅 사례
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            총 {consultingList.length}건 · 모두 실제 진행 사례
          </p>
        </motion.div>

        {/* 필터 — 모바일 가로 스크롤 */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible"
          style={{ scrollbarWidth: "none" }}>
          {[{ label: "전체", val: null }, ...allTags.map((t) => ({ label: t, val: t }))].map(({ label, val }) => (
            <button key={label} onClick={() => setActiveTag(val)}
              className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap"
              style={activeTag === val
                ? { background: "var(--pink)", color: "#fff" }
                : { background: "var(--glass-mid)", backdropFilter: "blur(14px)",
                    color: "var(--text-sub)", border: "1px solid var(--glass-border)" }}>
              {label}
            </button>
          ))}
        </motion.div>

        {/* 카드 그리드 — 정보가 풍부해진 만큼 2~3컬럼 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => {
            const meta = categoryMeta[item.category];
            return (
              <motion.div key={item.id}
                initial={{ opacity: 0, scale: 0.94 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}>
                <GlassCard variant="mid" className="p-5 md:p-6 flex flex-col gap-3 h-full relative">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ background: `${meta.color}15`, color: meta.color, border: `1px solid ${meta.color}35` }}>
                      {meta.label}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider" style={{ color: "var(--text-muted)" }}>
                      {item.caseNo}
                    </span>
                  </div>

                  <div>
                    <p className="font-bold text-[15px] leading-snug" style={{ color: "var(--text)" }}>
                      {item.name}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                      {item.followerRange}
                    </p>
                  </div>

                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-sub)" }}>
                    {item.insight}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{ background: "var(--glass-low)", color: "var(--text-muted)",
                          border: "1px solid var(--glass-border)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
