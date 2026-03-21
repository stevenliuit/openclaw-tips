import type { Metadata } from "next";
import { Noto_Sans_SC, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Open AI 分享站",
    template: "%s | Open AI 分享站",
  },
  description: "AI技术前沿-专注AI、自动化、开发技巧与行业趋势",
  keywords: ["AI", "人工智能", "机器学习", "深度学习", "OpenAI", "LangChain", "AI Agent"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.className} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col relative">
        <Background />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
