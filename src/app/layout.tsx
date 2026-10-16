import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PDF, 다시 — 당신의 생각을 더하세요",
  description: "태블릿 필기와 노트 앱에서 사용하기 좋은 PDF를 준비하는 공간. PDF, 다시의 메인 화면 미리보기입니다.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
