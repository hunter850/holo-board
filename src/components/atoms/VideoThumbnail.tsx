import Image from "next/image";

interface VideoThumbnailProps {
    thumbnails: {
        url: string;
        width: number;
        height: number;
    }[];
    title: string;
}

export default function VideoThumbnail({ thumbnails, title }: VideoThumbnailProps) {
    const thumbnail = thumbnails[thumbnails.length - 1];
    return (
        <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
                src={thumbnail.url}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
}
