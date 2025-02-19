import { Lock } from "lucide-react";
import type { Video } from "@/app/talent/[id]/page";

export default function VideoStatus({ liveBroadcastContent, viewCount, membershipOnly }: Video) {
    const isLive = liveBroadcastContent === "live";
    const isUpcoming = liveBroadcastContent === "upcoming";

    const viewCountText = isLive ? "人正在觀看" : isUpcoming ? "人正在等待" : "次觀看";

    if (membershipOnly) {
        return (
            <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
                    <Lock className="h-3 w-3" />
                    會員頻道專屬
                </span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2">
            {liveBroadcastContent !== "none" && (
                <span
                    className={`rounded-full px-2 py-0.5 text-xs text-white ${isLive ? "bg-red-500" : "bg-blue-500"}`}
                >
                    {isLive ? "直播中" : "即將直播"}
                </span>
            )}
            <span className="rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
                {viewCount.toLocaleString()} {viewCountText}
            </span>
        </div>
    );
}
