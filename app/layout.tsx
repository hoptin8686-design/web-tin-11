import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ôn Luyện Tin Học 11 — THPT Phục Hòa (ICT)",
  description:
    "Hệ thống ôn luyện trắc nghiệm, đúng/sai và tự luận Tin học 11 - Kết nối tri thức với cuộc sống (Định hướng Tin học ứng dụng ICT) dành cho học sinh THPT Phục Hòa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`dark scroll-smooth ${inter.variable}`}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Footer */}
        <footer className="border-t border-[#162c3a]/50 py-8 text-center text-xs text-[#527083]">
          <div className="max-w-3xl mx-auto px-4 space-y-1.5">
            <p className="font-medium text-[#7591a3]">
              Ôn luyện Tin học 11 — Định hướng Tin học ứng dụng (ICT)
            </p>
            <p>
              Chương trình GDPT 2018 · SGK Kết nối tri thức với cuộc sống · Trường THPT Phục Hòa — Tỉnh Cao Bằng
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
