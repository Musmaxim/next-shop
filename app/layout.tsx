import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Nav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Next-shop",
  description: "Second not diploma website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
