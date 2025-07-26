import type { Metadata } from "next";
import { Jura, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Компания QUASAR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${jura.variable} font-montserrat leading-tight antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
