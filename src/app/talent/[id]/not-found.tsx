import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function TalentNotFound() {
    return (
        <Card className="p-6">
            <div className="text-center">
                <h2 className="mb-4 text-2xl font-bold">找不到該 VTuber</h2>
                <p className="text-muted-foreground mb-6">該 VTuber 可能不存在或已被刪除</p>
                <Link href="/">
                    <Button>返回首頁</Button>
                </Link>
            </div>
        </Card>
    );
} 