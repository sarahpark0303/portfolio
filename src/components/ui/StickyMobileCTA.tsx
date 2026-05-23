"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            padding: "12px 20px 20px",
            paddingBottom: "calc(20px + env(safe-area-inset-bottom))",
          }}>
          <a
            href="#cta"
            className="btn-primary w-full justify-center"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
              padding: "1rem",
              fontSize: "0.75rem",
              borderRadius: "0",
            }}>
            상담 신청하기
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M12 7L8.5 3.5M12 7L8.5 10.5"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
