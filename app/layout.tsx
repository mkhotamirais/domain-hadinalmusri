import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import { MainClient } from "@/components/wrapper";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { CustomAuthor } from "./types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "Hadin Al Musri",
    default: "Hadin Al Musri",
    template: "%s | Hadin Al Musri",
  },
  description: `Media Center Hadin Al Musri hadir dalam berbagai platform digital, untuk menegaskan
                eksistensi Yayasan Hadin Al Musri Katomas Subang sebagai salah satu Pusat Dakwah Islam di Pagaden
                Subang`,
  keywords: [
    "Hadinalmusri",
    "Hadin Al Musri",
    "Pusat Dakwah Islam",
    "Pagaden",
    "Subang",
    "Media Islam",
    "Berita Islam",
    "Yayasan Hadin Al Musri",
  ],
  authors: [
    {
      name: "Hadin Al Musri",
      role: "Company",
      url: "https://hadinalmusri.com",
      image: "https://hadinalmusri.com/logo.png",
      contact: {
        email: "office.saikindosg@gmail.com",
        phone: "+628111775774",
      },
      address: {
        street: "Kp katomas, RT.011/RW.004, Sumbersari, Kec. Pagaden",
        city: "Subang",
        state: "West Java",
        country: "Indonesia",
      },
      socialProfiles: {
        tiktok: "https://www.tiktok.com/@hadinalmusrikatomas",
        youtube: "https://www.youtube.com/@HadinAl-MusriKatomas",
      },
      description:
        "Media Center Hadin Al Musri hadir dalam berbagai platform digital, untuk menegaskan eksistensi Yayasan Hadin Al Musri Katomas Subang sebagai salah satu Pusat Dakwah Islam di Pagaden Subang.",
    },
    {
      name: "Tamionweb",
      role: "Web Developer",
      url: "https://tamionweb.my.id",
      image: "https://tamionweb.my.id/logo.svg",
      bio: "I Built dynamic, responsive web applications and created seamless user experiences with efficient code.",
      skills: ["JavaScript", "React", "Next.js", "CSS", "SEO"],
      socialProfiles: {
        linkedin: "https://linkedin.com/in/mkhotami-rais/",
        github: "https://github.com/mkhotamirais",
      },
      contact: {
        email: "tami01.job@gmail.com",
      },
    },
  ] as CustomAuthor[],

  creator: "Hadin Al Musri",
  publisher: "Hadin Al Musri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>

      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <MainClient>{children}</MainClient>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
