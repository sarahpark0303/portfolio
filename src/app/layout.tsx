import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "토리 | SNS 성장 컨설팅",
  description:
    "인스타 3개월 만에 6K, 틱톡 1주일 만에 1K. SNS 성장 전문가 토리의 포트폴리오.",
  openGraph: {
    title: "토리 | SNS 성장 컨설팅",
    description: "인스타 3개월 만에 6K, 틱톡 1주일 만에 1K. SNS 성장 전문가 토리의 포트폴리오.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geist.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
