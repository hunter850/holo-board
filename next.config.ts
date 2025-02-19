import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "hlkw-blog-bucket.s3.ap-northeast-1.amazonaws.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "i.ytimg.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
