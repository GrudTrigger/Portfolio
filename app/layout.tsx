import "./globals.css";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Сайт портфолио",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={exo2.className}>{children}</body>
    </html>
  );
}
