"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { API_URLS } from "@/config/api_config";

export default function GoogleLogin() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const code = searchParams.get("code");

        if (code) {
            fetch(API_URLS.GOOGLE_LOGIN, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code }),
                credentials: "include", // 重要：允許跨域請求攜帶 cookies
            })
                .then((response) => response.json())
                .then(() => {
                    // 假設登入成功後會轉導到首頁
                    router.push("/");
                })
                .catch((error) => {
                    console.error("Login failed:", error);
                    // 可以加入錯誤處理
                    router.push("/");
                });
        }
    }, [searchParams, router]);

    return (
        <Suspense>
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin" />
                    <p className="text-lg">登入中...</p>
                </div>
            </div>
        </Suspense>
    );
}
