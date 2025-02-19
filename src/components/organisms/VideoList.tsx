import VideoCard from "@/components/molecules/VideoCard";
// types
import type { Video } from "@/app/talent/[id]/page";

interface VideoListProps {
    videos: Video[];
}

export default function VideoList({ videos }: VideoListProps) {
    return (
        <div className="mt-8">
            <h2 className="mb-4 text-xl font-bold">影片列表</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                    <VideoCard key={video.videoId} {...video} />
                ))}
            </div>
        </div>
    );
}
