import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./font";

export const metadata: Metadata = {
  title: "GeegPay - Dashboard",
  description: "Analytics dashboard for GeegPay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
