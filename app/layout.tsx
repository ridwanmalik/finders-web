import config from "@/config"
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: config.APP_NAME,
  description:
    "Your ultimate destination for job opportunities! Explore a vast array of career options, connect with top employers, and embark on your professional journey. Discover the perfect job match on Finders Now, where opportunities meet talent.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
