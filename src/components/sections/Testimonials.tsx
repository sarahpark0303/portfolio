"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionGlow } from "@/components/ui/Blobs";
import GlassCard from "@/components/ui/GlassCard";

const testimonials = [
  { id: 1, text: "솔직히 반신반의했는데 컨설팅 받고 나서 제 계정 방향이 완전히 잡혔어요. 뭘 올려야 할지 몰랐는데 이제는 콘텐츠 아이디어가 넘쳐요.", handle: "@l·····", followers: "12K", result: "+800 팔로워", accent: "var(--pink)" },
  { id: 2, text: "6만 팔로워인데도 성장이 멈춰있었는데, 문제점을 정확히 찾아줬어요. 릴스 조회수가 3배 올랐습니다.", handle: "@f·····", followers: "60K", result: "릴스 3배", accent: "#A78BFA" },
  { id: 3, text: "다른 컨설턴트들과 달리 진짜 제 계정을 분석해줬어요. 댓글로 문의했는데 이렇게 디테일하게 답변해주실 줄 몰랐어요.", handle: "@d·····", followers: "4K", result: "저장수 5배", accent: "#38BDF8" },
  { id: 4, text: "소상공인인데 로컬 타겟팅 전략을 맞춤으로 짜줬어요. 덕분에 근처 분들이 많이 팔로우해주세요.", handle: "@c·····", followers: "1K", result: "로컬 성장", accent: "var(--pink)" },
  { id: 5, text: "틱톡 처음 시작했는데 첫 영상부터 1만뷰 넘겼어요. 어떤 포맷이 바이럴 되는지 완벽하게 설명해주셨습니다.", handle: "@f·····", followers: "2K", result: "첫 바이럴", accent: "#A78BFA" },
  { id: 6, text: "프로필 방문자가 4배 늘었어요. 바이오와 하이라이트 구성만 바꿨는데 이런 차이가 날 줄 몰랐습니다.", handle: "@b·····", followers: "3K", result: "방문 4배", accent: "#38BDF8" },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 px-5 md:px-6 overflow-hidden" style={{ background: "var(--bg-2)" }}>
      <SectionGlow />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="mb-10 md:mb-14">
          <p className="inline-flex items-center gap-2 text-[11px] md:text-xs font-black tracking-widest uppercase mb-3" style={{ color: "var(--pink)" }}>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--pink)" }} />
            Reviews
          </p>
          <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl font-black leading-tight" style={{ color: "var(--text)" }}>
            실제 후기
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <motion.div key={t.id}
              initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
              className="break-inside-avoid">
              <GlassCard variant="mid" className="p-5 md:p-6 flex flex-col gap-3 md:gap-4 relative">
                <span className="text-3xl font-serif leading-none opacity-50"
                  style={{ color: t.accent }}>&ldquo;</span>

                <p className="text-sm leading-relaxed -mt-3" style={{ color: "var(--text)" }}>
                  {t.text}
                </p>

                <div className="flex items-center justify-between gap-2 pt-3 flex-wrap"
                  style={{ borderTop: "1px solid var(--glass-border)" }}>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "var(--text)" }}>{t.handle}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.followers}</p>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ background: `${t.accent}15`, color: t.accent, border: `1px solid ${t.accent}35` }}>
                    {t.result}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
