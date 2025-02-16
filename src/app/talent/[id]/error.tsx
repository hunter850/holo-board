"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function TalentError() {
    const router = useRouter();

    return (
        <Card className="p-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">找不到該 VTuber</h2>
                <p className="text-muted-foreground mb-6">該 VTuber 可能不存在或已被刪除</p>
                <Button onClick={() => router.push("/")}>返回首頁</Button>
            </div>
        </Card>
    );
} 