import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface VTuberCardProps {
    id: number;
    name: string;
    en_name: string;
    live_avatar: string;
    youtube_link: string;
    status: string;
    priority: boolean;
}

export default function VTuberCard({ id, name, en_name, live_avatar, status, priority }: VTuberCardProps) {
    return (
        <Link href={`/talent/${id}`} className="h-full">
            <Card className="flex h-full flex-col overflow-hidden bg-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-200">
                <div className="relative aspect-square">
                    <Image
                        src={live_avatar}
                        alt={name}
                        fill
                        className="object-cover object-top"
                        unoptimized
                        priority={priority}
                    />
                    {/* Live 標籤暫時隱藏，等 API 完成後再啟用
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            Live
          </div>
          */}
                </div>
                <div className="flex flex-1 flex-col p-3">
                    <h3 className="line-clamp-2 font-medium text-purple-900">
                        {name}
                        {status && <span className="ml-1 text-pink-600">【{status}】</span>}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-sm text-purple-600/80">{en_name}</p>
                </div>
            </Card>
        </Link>
    );
}
