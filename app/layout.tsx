import type { Metadata } from "next";
//
import { Inter,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

//Google FontsからIBM Plex Serifフォントをインポートし、特定のフォントの設定を行っています
const inter = Inter({ subsets: ["latin"],variable:'--font-inter' });
const iBMPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400','700'],
  variable:'--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is modern banking platform",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${iBMPlexSerif.variable}` }>{children}</body>
    </html>
  );
}
