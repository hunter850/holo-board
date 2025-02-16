"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 添加錯誤屬性類型
interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function TalentError({ error, reset }: ErrorProps) {
    const router = useRouter();

    useEffect(() => {
        // 可以在這裡記錄錯誤到錯誤報告服務
        console.error("Talent page error:", error);
    }, [error]);

    return (
        <Card className="p-6">
            <div className="text-center">
                <h2 className="mb-4 text-2xl font-bold">找不到該 VTuber</h2>
                <p className="text-muted-foreground mb-6">該 VTuber 可能不存在或已被刪除</p>
                <div className="space-x-4">
                    <Button onClick={() => reset()}>重試</Button>
                    <Button onClick={() => router.push("/")}>返回首頁</Button>
                </div>
            </div>
        </Card>
    );
}
