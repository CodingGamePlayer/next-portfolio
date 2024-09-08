import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "생각나는 백엔드 김종식 입니다",
  description: "김종식의 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
