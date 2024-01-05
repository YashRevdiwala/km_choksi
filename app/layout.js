import { Marcellus } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const marcellus = Marcellus({
  subsets: ["latin", "latin-ext"],
  weight: "400",
})

// const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "K M Choksi",
  description: "Generated by create next app",
  icons: [
    {
      url: "/favicon.png",
      href: "/favicon.png",
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>
      <body className={cn(marcellus.className, "overflow-x-hidden")}>
        {children}
      </body>
    </html>
  )
}
