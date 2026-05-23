"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { consultingList } from "@/data/consulting";
import { SectionGlow } from "@/components/ui/Blobs";
import GlassCard from "@/components/ui/GlassCard";

const platformMeta: Record<string, { label: string; color: string }> = {
  instagram: { label: "IG",   color: "#FF4D8D" },
  tiktok:    { label: "TK",   color: "#A78BFA" },
  youtube:   { label: "YT",   color: "#FB923C" },
  multi:     { label: "Multi",color: "#38BDF8" },
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
            컨설팅 실적
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>총 {consultingList.length}건</p>
        </motion.div>

        {/* 필터 */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }} className="flex flex-wrap gap-2 mb-8">
          {[{ label: "전체", val: null }, ...allTags.map((t) => ({ label: t, val: t }))].map(({ label, val }) => (
            <button key={label} onClick={() => setActiveTag(val)}
              className="px-4 py-1.5 rounded-full text-xs font-bold transition-all"
              style={activeTag === val
                ? { background: "var(--pink)", color: "#fff" }
                : { background: "var(--glass-mid)", backdropFilter: "blur(14px)",
                    color: "var(--text-sub)", border: "1px solid var(--glass-border)" }}>
              {label}
            </button>
          ))}
        </motion.div>

        {/* 카드 그리드 */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((item, i) => {
            const meta = platformMeta[item.platform];
            return (
              <motion.div key={item.id}
                initial={{ opacity: 0, scale: 0.94 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}>
                <GlassCard variant="mid" className="p-5 flex flex-col gap-3 h-full relative">
                  <span className="text-[10px] font-black tracking-wider uppercase w-fit px-2.5 py-1 rounded-full"
                    style={{ background: `${meta.color}15`, color: meta.color, border: `1px solid ${meta.color}35` }}>
                    {meta.label}
                  </span>

                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--text)" }}>{item.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{item.followerRange} 팔로워</p>
                  </div>

                  {item.result && (
                    <p className="text-xs font-semibold" style={{ color: meta.color }}>
                      → {item.result}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {item.tags.slice(0, 2).map((t) => (
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
