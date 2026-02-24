import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--default-font",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--heading-font",
});

export const metadata: Metadata = {
  title: "Karimu | The Art of Generosity, Refined",
  description: "Curated hospitality rooted in grace, connection, and intention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} index-page`}>
        {children}
      </body>
    </html>
  );
}
