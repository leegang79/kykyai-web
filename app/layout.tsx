import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "快语科技 - 智能内容生成 & 数智人实时交互",
  description:
    "Experience the future of AI-driven content creation with seamless virtual interactions. Transform your ideas into reality with our intelligent platform.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: '/ico.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/ico.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased dark`}>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  )
}
