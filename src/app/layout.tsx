import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Holo Dashboard",
    description: "A dashboard for Hololive talents",
    icons: { icon: { url: "/images/hd_favicon_64.png" } },
    authors: [{ name: "HLKW" }],
    openGraph: {
        title: "Holo Dashboard",
        description: "A dashboard for Hololive talents",
        locale: "zh_TW",
        type: "website",
        images: [
            {
                url: "/images/hd_favicon_573.png",
                width: 573,
                height: 573,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
