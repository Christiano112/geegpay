import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { plus_jakarta_sans } from "./font";

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
            <body className={plus_jakarta_sans.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
