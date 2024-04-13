import type { Metadata } from "next";
import { cookies } from "next/headers";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/src/components/NavBar";
import BottomBar from "@/src/components/BottomBar";
import config from "../amplifyconfig";
import { Amplify } from "aws-amplify";

Amplify.configure(config, {
  ssr: true, // required when using Amplify with Next.js
});

export const cookieBasedClient = generateServerClientUsingCookies({
  config: config,
  cookies,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chord Hero Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "white" }}>
        <NavBar />
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
