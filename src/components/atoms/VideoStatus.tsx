interface VideoStatusProps {
    liveBroadcastContent: string;
    viewCount: number;
}

export default function VideoStatus({ liveBroadcastContent, viewCount }: VideoStatusProps) {
    const isLive = liveBroadcastContent === "live";

    if (liveBroadcastContent === "none") return null;

    return (
        <div className="flex items-center gap-2">
            <span className={`rounded-full px-2 py-0.5 text-xs text-white ${isLive ? "bg-red-500" : "bg-blue-500"}`}>
                {isLive ? "直播中" : "即將直播"}
            </span>
            <span className="rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
                {viewCount.toLocaleString()} {isLive ? "人正在觀看" : "人正在等待"}
            </span>
        </div>
    );
}
