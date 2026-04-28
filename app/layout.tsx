import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Growpep Agency - Premium Digital Growth Agency",
  description:
    "Growpep Agency helps businesses grow with premium web design, SEO, reputation management, social media, and lead generation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}