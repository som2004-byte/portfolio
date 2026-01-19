import type { Metadata } from "next";
import { Rajdhani, Michroma } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani"
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma"
});

export const metadata: Metadata = {
  title: "Somya Verma | Solar Nova Portfolio",
  description: "Digital Architect & Creative Technologist - Space Themed Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${michroma.variable} font-rajdhani bg-[#020617] text-[#f1f5f9] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
