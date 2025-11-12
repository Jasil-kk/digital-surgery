import type { Metadata } from "next";
import { Raleway,Open_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digital Surgery",
  description:
    "Supplying Saudi Arabia’s hospitals and clinics with world-class medical and surgical equipment — delivering precision, reliability, and innovation where it matters most.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
