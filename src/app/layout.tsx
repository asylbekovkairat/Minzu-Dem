import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: ["100", "400", "700"] });

export const metadata: Metadata = {
  title: "Minzu Dem",
  description: "Minzu Dem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`container !scroll-smooth ${inter.className}`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
