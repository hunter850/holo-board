"use client";

import { Card } from "@/components/ui/card";
import VideoStatus from "@/components/atoms/VideoStatus";
import VideoModal from "./VideoModal";
import { useState } from "react";
import Image from "next/image";
// types
import type { Video } from "@/app/talent/[id]/page";

export default function VideoCard(props: Video) {
    const { videoId, thumbnails, title } = props;
    const [showModal, setShowModal] = useState(false);

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
                        <div className="absolute bottom-2 right-2">
                            <VideoStatus {...props} />
                        </div>
                    </div>
                    <div className="p-3">
                        <h3 className="line-clamp-2 font-medium group-hover:text-primary">{title}</h3>
                    </div>
                </Card>
            </button>
            {showModal && <VideoModal videoId={videoId} onClose={() => setShowModal(false)} />}
        </>
    );
}
