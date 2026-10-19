import type { Metadata } from "next";
import { Inter, Jersey_10  } from "next/font/google";
import "./globals.css";

// Body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Pixel display font (nav, headings, buttons).
const jersey = Jersey_10({
  weight: "400",
  variable: "--font-jersey",
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
      <body className={`${inter.variable} ${jersey.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}