import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";

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
        className={`mx-auto !scroll-smooth ${inter.className}`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
