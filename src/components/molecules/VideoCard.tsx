"use client";

import { Card } from "@/components/ui/card";
import VideoModal from "./VideoModal";
import { Lock } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface VideoCardProps {
    videoId: string;
    thumbnails: {
        url: string;
        width: number;
        height: number;
    }[];
    title: string;
    viewCount: number;
    liveBroadcastContent: string;
    membershipOnly: boolean;
}

export default function VideoCard({
    videoId,
    thumbnails,
    title,
    viewCount,
    liveBroadcastContent,
    membershipOnly,
}: VideoCardProps) {
    const [showModal, setShowModal] = useState(false);
    const isLive = liveBroadcastContent === "live";
    const isUpcoming = liveBroadcastContent === "upcoming";

    const viewCountText = isLive ? "人正在觀看" : isUpcoming ? "人正在等待" : "次觀看";

    return (
        <>
            <button onClick={() => setShowModal(true)} className="group block h-full w-full text-left">
                <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                            src={thumbnails[thumbnails.length - 1].url}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="p-3">
                        <h3 className="line-clamp-2 font-medium group-hover:text-primary">{title}</h3>
                        <div className="mt-2 flex items-center gap-2">
                            {membershipOnly ? (
                                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Lock className="h-3 w-3" />
                                    會員頻道專屬
                                </span>
                            ) : (
                                <span className="text-sm text-muted-foreground">
                                    {viewCount.toLocaleString()} {viewCountText}
                                </span>
                            )}
                            {liveBroadcastContent === "live" && (
                                <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">直播中</span>
                            )}
                            {liveBroadcastContent === "upcoming" && (
                                <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs text-white">
                                    即將直播
                                </span>
                            )}
                        </div>
                    </div>
                </Card>
            </button>
            {showModal && <VideoModal videoId={videoId} onClose={() => setShowModal(false)} />}
        </>
    );
}
