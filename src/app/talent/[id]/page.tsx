import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { API_URLS } from "@/config/api_config";

interface TalentInfo {
    id: number;
    name: string;
    en_name: string | null;
    live_avatar: string | null;
    avatar: string | null;
    status: string | null;
    youtube_link: string | null;
    deleted: boolean;
    created_at: string;
    updated_at: string;
}

async function getTalentInfo(id: string): Promise<TalentInfo> {
    const params = new URLSearchParams();
    params.append("id", id);
    const response = await fetch(`${API_URLS.TALENT_LIST}?${params.toString()}`, {
        next: { revalidate: 60 },
    });

    if (!response.ok) {
        notFound();
    }

    const data = (await response.json()) as { success: boolean; message?: string; data: TalentInfo };
    return data.data;
}

export interface TalentPageProps {
    params: Promise<{ id: string }>;
}

export default async function TalentPage({ params }: TalentPageProps) {
    const { id } = await params;
    const talent = await getTalentInfo(id);

    if (talent.deleted) {
        notFound();
    }

    return (
        <Card className="p-6">
            <div className="flex flex-col gap-6 md:flex-row">
                <div className="w-full md:w-1/3">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                            src={talent.live_avatar ?? talent.avatar ?? ""}
                            alt={talent.name}
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="mb-2 text-2xl font-bold">{talent.name}</h1>
                    {talent.en_name && <p className="text-muted-foreground mb-4 text-lg">{talent.en_name}</p>}
                    {talent.status && <p className="text-muted-foreground mb-4 text-sm">狀態：{talent.status}</p>}
                    {talent.youtube_link && (
                        <Link href={talent.youtube_link} target="_blank">
                            <Button>前往 YouTube 頻道</Button>
                        </Link>
                    )}
                </div>
            </div>
        </Card>
    );
}
