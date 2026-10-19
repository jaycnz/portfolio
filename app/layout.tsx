import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";

// Body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Pixel display font (nav, headings, buttons).
const pixel = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay's Portfolio",
  description: "My personal portfolio website showcasing my projects and skills",
  icons: {
    icon: "/favicon/favicon.png",
    apple: "/favicon/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pixel.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}