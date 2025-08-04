import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MantineProvider } from '@mantine/core';
import theme from "@/app/theme"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";
import '@mantine/core/styles.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.NODE_BASEPATH,
  description: process.env.NODE_BASEPATH,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider defaultColorScheme="auto" theme={theme}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
