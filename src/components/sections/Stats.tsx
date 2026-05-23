"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/consulting";
import { SectionGlow } from "@/components/ui/Blobs";
import GlassCard from "@/components/ui/GlassCard";

function useCountUp(target: number, duration: number, active: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let v = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      v += step;
      if (v >= target) { setN(target); clearInterval(t); }
      else setN(Math.floor(v));
    }, 16);
    return () => clearInterval(t);
  }, [target, duration, active]);
  return n;
}

const accents = ["var(--pink)", "#A78BFA", "#38BDF8", "#FB923C"];

function StatCard({ stat, index, active }: { stat: typeof stats[0]; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 1600, active);
  const accent = accents[index % accents.length];

  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}>
      <GlassCard variant="mid" className="p-5 md:p-7 flex flex-col gap-3 md:gap-4 h-full relative">
        {/* 상단 accent bar */}
        <div className="absolute top-0 left-5 md:left-7 right-5 md:right-7 h-px"
          style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

        <span className="text-[10px] font-black tracking-widest uppercase"
          style={{ color: accent }}>
          {stat.platform}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-black tabular-nums" style={{ color: "var(--text)" }}>
            {count.toLocaleString()}
          </span>
          <span className="text-xl md:text-2xl font-black" style={{ color: accent }}>{stat.suffix}</span>
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{stat.label}</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{stat.period}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 px-5 md:px-6 overflow-hidden" style={{ background: "var(--bg)" }}>
      <SectionGlow />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="mb-10 md:mb-14">
          <p className="inline-flex items-center gap-2 text-[11px] md:text-xs font-black tracking-widest uppercase mb-3" style={{ color: "var(--pink)" }}>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--pink)" }} />
            Numbers
          </p>
          <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl font-black leading-tight" style={{ color: "var(--text)" }}>
            말보다 숫자로 말할게요.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} active={isInView} />)}
        </div>
      </div>
    </section>
  );
}
