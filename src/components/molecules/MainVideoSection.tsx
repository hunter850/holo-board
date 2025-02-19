"use client";

import Image from "next/image";
import { useState } from "react";
import VideoStatus from "@/components/atoms/VideoStatus";
import VideoModal from "@/components/molecules/VideoModal";
import type { Video } from "@/app/talent/[id]/page";

interface MainVideoSectionProps {
    video: Video;
}

export default function MainVideoSection({ video }: MainVideoSectionProps) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="mt-6 flex-1">
            <div className="group w-full lg:w-[600px]">
                <button onClick={() => setShowModal(true)} className="w-full text-left">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Image
                            src={video.thumbnails[video.thumbnails.length - 1].url}
                            alt={video.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 600px"
                        />
                        <div className="absolute bottom-2 right-2">
                            <VideoStatus {...video} />
                        </div>
                    </div>
                    <h2 className="mb-2 mt-3 line-clamp-2 text-lg font-medium group-hover:text-primary">
                        {video.title}
                    </h2>
                </button>
            </div>
            {showModal && <VideoModal videoId={video.videoId} onClose={() => setShowModal(false)} />}
        </div>
    );
}
