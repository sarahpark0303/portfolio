"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionGlow } from "@/components/ui/Blobs";
import GlassCard from "@/components/ui/GlassCard";

/**
 * 실제 컨설팅을 받은 분들의 DM 후기.
 * 원본 캡처: ~/Downloads/후기/4.png ~ 8.png
 * 익명성을 위해 닉네임/팔로워 수는 마스킹.
 */
type Testimonial = {
  id: number;
  text: string;
  highlight: string;
  accent: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "갑자기 꽉 막힌 도로가 막 뻥 뚫린 느낌이에요. 고속도로 질주하는 기분.",
    highlight: "막힌 길이 뚫림",
    accent: "var(--pink)",
  },
  {
    id: 2,
    text: "세상에! 제가 고민했던 부분이 그런 거였거든요. 요즘 너무 흔해진 골격진단에서 한 끗 더 나아간 정보를 제공해주고 유입을 어떻게 시킬지… 아쉬운 점을 딱 짚어주셔서 속시원하기도 하고, 어떻게 보완해야 할지 고민하게 되네요. 후킹 + 전문적 릴스 썸네일, 한 번 다시 갈아보겠습니다. 빠르게 소중한 말씀 전달주셔서 너무 감사해요!",
    highlight: "차별화 포인트 발견",
    accent: "#A78BFA",
  },
  {
    id: 3,
    text: "우앙 ㅠㅠㅠㅠ 감사해요 조이님.. 바이오 너무 좋아요…… 인사이트와 조언 감사합니다. ‘직장인의 생체 실험기’가 결국 제가 하고 싶었던 역할이었는데, 이걸 단어로 정리해주시니까 앞으로의 방향성이 정말 명료해진 것 같아요!",
    highlight: "방향성 명료해짐",
    accent: "#38BDF8",
  },
  {
    id: 4,
    text: "감사합니다!! 정말!! 말씀 해주신 내용 참고해서 다시 한번 제 콘텐츠에 대한 고민을 해 봐야 할 것 같아요.",
    highlight: "콘텐츠 재정의",
    accent: "var(--pink)",
  },
  {
    id: 5,
    text: "오늘 대화 너무 재밌었어요……. 저 진짜!!!! 이런 대화가 너무너무 필요한 시점인데 넘 해삐해요…. 편안한 밤 보내세요!",
    highlight: "꼭 필요했던 대화",
    accent: "#A78BFA",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  if (testimonials.length === 0) return null;

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
            실제 컨설팅 후기
          </h2>
          <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
            컨설팅을 받으신 분들이 직접 보내주신 DM 후기예요.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <motion.div key={t.id}
              initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
              className="break-inside-avoid">
              <GlassCard variant="mid" className="p-5 md:p-6 flex flex-col gap-3 md:gap-4 relative">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-3xl font-serif leading-none opacity-50"
                    style={{ color: t.accent }}>&ldquo;</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: `${t.accent}15`, color: t.accent, border: `1px solid ${t.accent}35` }}>
                    {t.highlight}
                  </span>
                </div>

                <p className="text-sm leading-relaxed -mt-2" style={{ color: "var(--text)" }}>
                  {t.text}
                </p>

                <p className="text-[11px] pt-3 mt-auto"
                  style={{ color: "var(--text-muted)", borderTop: "1px solid var(--glass-border)" }}>
                  컨설팅 받은 크리에이터 · DM 후기
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
