import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono, Yellowtail } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mahntrixtechnologies.com"),
  title: "Mahntrix Technologies | Software & Digital Engineering Agency",
  description: "Mahntrix Technologies is a premier software development and digital transformation agency. We engineer high-performance web applications, mobile apps, enterprise ERP & CRM systems, AI solutions, and scalable growth engines.",
  keywords: [
    "Mahntrix Technologies",
    "Software Development Agency",
    "Web Application Development",
    "Mobile Apps",
    "Flutter",
    "React Native",
    "Next.js",
    "AI Automation",
    "ERP Solutions",
    "CRM Development",
    "SEO & Digital Growth"
  ],
  authors: [{ name: "Mahntrix Technologies" }],
  creator: "Mahntrix Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahntrixtechnologies.com",
    siteName: "Mahntrix Technologies",
    title: "Mahntrix Technologies | Software & Digital Engineering Agency",
    description: "Building scalable web apps, mobile solutions, AI systems, and enterprise software for ambitious brands.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahntrix Technologies - Software & Digital Engineering Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahntrix Technologies | Software & Digital Engineering Agency",
    description: "Building scalable web apps, mobile solutions, AI systems, and enterprise software for ambitious brands.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${hanken.variable} ${jetbrainsMono.variable} ${yellowtail.variable}`}>
      <body className="bg-ink text-paper selection:bg-lime selection:text-ink font-sans antialiased min-h-screen flex flex-col">
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#121413', color: '#f3f4ec', border: '1px solid rgba(255,255,255,0.1)' } }} />
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}