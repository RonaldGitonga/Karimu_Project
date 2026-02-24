import type { Metadata } from "next";
import { Roboto, Poppins, Libre_Baskerville } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "Index - NiceRestaurant Bootstrap Template",
  description: "Restaurant template migrated to Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} ${libreBaskerville.variable} index-page`}>
        {children}
      </body>
    </html>
  );
}
