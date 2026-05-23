"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionGlow } from "@/components/ui/Blobs";
import GlassCard from "@/components/ui/GlassCard";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="contact" className="relative py-20 md:py-28 px-5 md:px-6 overflow-hidden"
      style={{ background: "var(--bg)" }}>
      <SectionGlow />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <p className="inline-flex items-center gap-2 text-[11px] md:text-xs font-black tracking-widest uppercase mb-4" style={{ color: "var(--pink)" }}>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--pink)" }} />
            Contact
          </p>
          <h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ color: "var(--text)" }}>
            당신의 계정,
            <br className="hidden sm:inline" />{" "}같이 성장시켜요.
          </h2>
          <p className="text-sm sm:text-base mb-10 sm:mb-12" style={{ color: "var(--text-sub)" }}>
            이메일이나 인스타 DM으로 편하게 연락주세요.
          </p>

          <GlassCard variant="high" className="p-6 md:p-10 flex flex-col items-center gap-6 relative">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
              {/* 이메일 */}
              <a href="mailto:sarahpark0303@gmail.com"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-white transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                style={{ background: "var(--pink)", boxShadow: "0 0 40px rgba(255,77,141,0.45)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                이메일로 문의
              </a>

              {/* 인스타 */}
              <GlassCard variant="mid" rounded="rounded-full" className="overflow-visible">
                <a href="https://www.instagram.com/zoe_the_grande/"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                  style={{ color: "var(--text)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                  인스타 DM
                </a>
              </GlassCard>
            </div>

            <p className="text-xs break-all" style={{ color: "var(--text-muted)" }}>
              sarahpark0303@gmail.com · @zoe_the_grande
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
