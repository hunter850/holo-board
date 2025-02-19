import VideoCard from "@/components/molecules/VideoCard";
// types
import type { Video } from "@/app/talent/[id]/page";

interface VideoListProps {
    videos: Video[];
    mainVideoId?: string; // 添加新的 prop 來接收主要影片的 ID
}

export default function VideoList({ videos, mainVideoId }: VideoListProps) {
    // 過濾掉主要影片
    const filteredVideos = videos.filter((video) => video.videoId !== mainVideoId);

    return (
        <div className="mt-8">
            <h2 className="mb-4 text-xl font-bold">影片列表</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredVideos.map((video) => (
                    <VideoCard key={video.videoId} {...video} />
                ))}
            </div>
        </div>
    );
}
