import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Noto_Kufi_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Amanex | تركيب وصيانة السنترالات وكاميرات المراقبة",
  description:
    "Amanex تقدم لك تركيب وصيانة السنترالات الداخلية والخارجية، كاميرات المراقبة، أنظمة الإنتركوم، الدش المركزي، وتحويل منزلك لكهرباء ذكية",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${notoKufiArabic.variable}`}>
      <body className="font-arabic antialiased flex items-center justify-center ">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
