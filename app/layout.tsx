import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaikunth",
  description: "Jai Shree Krishna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden bg-[#f9f5e9]">
      <body className={inter.className}>
        <div className="absolute top-0 ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
