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
    icons: {
        icon: [
            { url: "/images/favicon.ico" },
            { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/images/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        // Apple 設備專用
        apple: [
            { url: "/images/apple-touch-icon-57x57.png", sizes: "57x57", type: "image/png" },
            { url: "/images/apple-touch-icon-60x60.png", sizes: "60x60", type: "image/png" },
            { url: "/images/apple-touch-icon-72x72.png", sizes: "72x72", type: "image/png" },
            { url: "/images/apple-touch-icon-76x76.png", sizes: "76x76", type: "image/png" },
            { url: "/images/apple-touch-icon-114x114.png", sizes: "114x114", type: "image/png" },
            { url: "/images/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
            { url: "/images/apple-touch-icon-144x144.png", sizes: "144x144", type: "image/png" },
            { url: "/images/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
            { url: "/images/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
        ],
        // Android/PWA 用
        other: [
            { url: "/images/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/images/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
            // PWA maskable icon
            { url: "/images/maskable-icon-192x192.png", sizes: "192x192", type: "image/png", rel: "maskable" },
            { url: "/images/maskable-icon-512x512.png", sizes: "512x512", type: "image/png", rel: "maskable" },
        ],
    },
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
