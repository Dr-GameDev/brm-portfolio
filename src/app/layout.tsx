import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: {
    default: "Babalo Majiyezi | Full-Stack Developer & Network Engineer",
    template: "%s | Babalo Majiyezi"
  },
  description: "Full-stack developer specializing in web development, network engineering, and graphic design. Expert in Next.js, React, Python, and network infrastructure solutions.",
  keywords: [
    "Full-stack developer",
    "Network engineer",
    "Web development",
    "Graphic design",
    "Next.js",
    "React",
    "Python",
    "TypeScript",
    "Network infrastructure",
    "UI/UX design",
    "Cape Town developer",
    "Software engineer"
  ],
  authors: [{ name: "Babalo Majiyezi" }],
  creator: "Babalo Majiyezi",
  publisher: "Babalo Majiyezi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bababalo-majiyezi.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://bababalo-majiyezi.com", // Replace with your actual domain
    title: "Babalo Majiyezi | Full-Stack Developer & Network Engineer",
    description: "Full-stack developer specializing in web development, network engineering, and graphic design. Building innovative digital solutions.",
    siteName: "Babalo Majiyezi Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Babalo Majiyezi - Full-Stack Developer & Network Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babalo Majiyezi | Full-Stack Developer & Network Engineer",
    description: "Full-stack developer specializing in web development, network engineering, and graphic design.",
    creator: "@your_twitter_handle", // Replace with your Twitter handle
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.svg" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" }, // You'll need to create this
    { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#00ff88" }, // You'll need to create this
  ],
  manifest: "/site.webmanifest", // You'll need to create this
  verification: {
    google: "your-google-verification-code", // Replace with your Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Preload critical resources */}
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Babalo Majiyezi",
              "jobTitle": "Full-Stack Developer & Network Engineer",
              "description": "Full-stack developer specializing in web development, network engineering, and graphic design",
              "url": "https://bababalo-majiyezi.com", // Replace with your domain
              "sameAs": [
                "https://linkedin.com/in/your-profile", // Replace with your LinkedIn
                "https://github.com/your-username", // Replace with your GitHub
                "https://twitter.com/your-handle" // Replace with your Twitter
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cape Town",
                "addressRegion": "Western Cape",
                "addressCountry": "ZA"
              },
              "knowsAbout": [
                "Web Development",
                "Network Engineering",
                "Graphic Design",
                "Next.js",
                "React",
                "Python",
                "TypeScript"
              ]
            })
          }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}