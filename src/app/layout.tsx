import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import { Abel, Outfit, Delius_Unicase } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import { Footer } from "./components/Footer";
import { Spotlight } from "./components/ui/spotlight-new";


const abel = Abel({
  subsets: ["latin"],
  variable: "--font-abel",
  weight: "400",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const delius = Delius_Unicase({
  subsets: ["latin"],
  variable: "--font-delius",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/favicon.png", 
    apple: "/images/favicon.png",
    other: [
      { rel: "icon", url: "/images/favicon.png", sizes: "any" },
    ],
  },
  title: "PostPro | API Testing Web App",
  description: "API Testing Web App.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${abel.variable} ${outfit.variable} ${delius.variable}  text-white overflow-x-hidden`}
      >
        <Navbar />
        <body className="relative min-h-screen overflow-x-hidden">
          <Spotlight />
          <SmoothScroll />
          <div className="relative z-10 bg-transparent">{children}</div>
        </body>
        <Footer />
      </html>
    </ClerkProvider>
  );
}
