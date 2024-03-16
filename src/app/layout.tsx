import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import "bootstrap/dist/css/bootstrap.css";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Toaster
          position="top-right"
          reverseOrder={true}
          toastOptions={{
            duration: 2000,
            className: "!bg-background !text-primary",
          }}
          containerClassName="mt-10 "
        />
      </body>
    </html>
  );
}
