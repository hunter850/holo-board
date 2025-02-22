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

// 分離 viewport 設定
export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_DOMAIN!),
    title: "Holo Dashboard",
    description: "A dashboard for Hololive talents",
    keywords: ["Hololive", "VTuber", "Dashboard", "Streaming", "Schedule", "Virtual YouTuber"],
    authors: [{ name: "HLKW" }],
    creator: "HLKW",
    publisher: "HLKW",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "Holo Dashboard",
        description: "A dashboard for Hololive talents",
        locale: "zh_TW",
        type: "website",
        siteName: "Holo Dashboard",
        images: [
            {
                url: "/images/open_graph.jpg",
                width: 1896,
                height: 915,
                alt: "Holo Dashboard Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Holo Dashboard",
        description: "A dashboard for Hololive talents",
        images: ["/images/open_graph.jpg"],
    },
    alternates: {
        canonical: "/",
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
