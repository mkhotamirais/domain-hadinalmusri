import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import { MainClient } from "@/components/wrapper";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hadinalmusri`",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta
          name="keywords"
          content="Hadinalmusri, Hadin Al Musri, Pusat Dakwah Islam, Pagaden, Subang, Media Islam"
        />
        <meta name="author" content="Yayasan Hadin Al Musri" />
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
