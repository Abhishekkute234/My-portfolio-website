import React from "react";
import type { Metadata } from "next";
import { Inter, Silkscreen } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

import WaterDropCursor from "@/components/WaterDropCursor";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
});

export const metadata: Metadata = {
  title: "Abhishek Kute ",
  description: `Hi 👋, I'm Abhishek Kute. I'm a passionate software engineer with a knack for creating scalable, high-performance applications and reusable systems. With a strong foundation in front-end and back-end technologies, I specialize in crafting solutions that are as impactful for users as they are efficient for developers.`,
  creator: "Abhishek Kute ",
  applicationName: "My website",
  keywords: [
    "Abhishek Kute ",
    "Abhishek",
    "Kute ",
    "Portfolio",
    "Next.js",
    "Software engineer",
  ],
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${silkscreen.variable} relative`}>
        <WaterDropCursor />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <div className="main-mask pointer-events-none absolute inset-0 -z-50" />
      </body>
    </html>
  );
}
