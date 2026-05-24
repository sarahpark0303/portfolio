import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const GA_ID = "G-92NFBWJLQC";

export const metadata: Metadata = {
  title: "조이(Zoe) | SNS 성장 컨설팅",
  description:
    "인스타 3개월 만에 6K, 틱톡 1주일 만에 1K. SNS 성장 전문가 조이(Zoe)의 포트폴리오.",
  openGraph: {
    title: "조이(Zoe) | SNS 성장 컨설팅",
    description: "인스타 3개월 만에 6K, 틱톡 1주일 만에 1K. SNS 성장 전문가 조이(Zoe)의 포트폴리오.",
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
      <body className="min-h-full">
        {children}

        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
