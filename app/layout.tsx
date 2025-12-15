import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title:
    "Cricket Auction Software | Digital Player Auction Platform for Tournaments",
  description:
    "Streamline your cricket tournament with our digital auction software. Live bidding, team budget management, real-time leaderboards, and automated rule validation. Perfect for cricket leagues, academies, and tournaments.",
  keywords:
    "cricket auction software, player auction platform, cricket tournament software, digital cricket auction, live bidding system, cricket league management",
  openGraph: {
    title: "Cricket Auction Software | Digital Player Auction Platform",
    description:
      "Transform your cricket tournament with our comprehensive digital auction software. Live bidding, budget management, and real-time analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
