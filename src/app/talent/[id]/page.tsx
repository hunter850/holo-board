import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import VideoList from "@/components/organisms/VideoList";
import { API_URLS } from "@/config/api_config";
import MainVideoSection from "@/components/molecules/MainVideoSection";

export interface TalentInfo {
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

export interface TalentInfoResult {
    success: boolean;
    message?: string;
    data: TalentInfo;
}

export interface Video {
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

export interface VideoResult {
    success: boolean;
    message?: string;
    data: Video[];
}

async function getData(id: string) {
    const params = new URLSearchParams();
    params.append("id", id);

    try {
        const [talentResponse, videoResponse] = await Promise.all([
            fetch(`${API_URLS.TALENT_LIST}?${params.toString()}`, {
                next: { revalidate: 60 },
            }),
            fetch(`${API_URLS.VIDEO_LIST}?${params.toString()}`, {
                next: { revalidate: 60 },
            }),
        ]);

        if (!talentResponse.ok || !videoResponse.ok) {
            notFound();
        }

        const [talentData, videoData] = await Promise.all([
            talentResponse.json() as Promise<TalentInfoResult>,
            videoResponse.json() as Promise<VideoResult>,
        ]);

        if (!talentData.success || !videoData.success) {
            notFound();
        }

        return {
            talent: talentData.data,
            videos: videoData.data,
        };
    } catch {
        notFound();
    }
}

export interface TalentPageProps {
    params: Promise<{ id: string }>;
}

function getMainVideo(videos: Video[]) {
    const liveVideo = videos.find((video) => video.liveBroadcastContent === "live");
    if (liveVideo) return liveVideo;

    const upcomingVideo = videos.find((video) => video.liveBroadcastContent === "upcoming");
    if (upcomingVideo) return upcomingVideo;

    return videos[0];
}

export default async function TalentPage({ params }: TalentPageProps) {
    const { id } = await params;
    const { talent, videos } = await getData(id);

    if (talent.deleted) {
        notFound();
    }

    const mainVideo = videos.length > 0 ? getMainVideo(videos) : null;

    return (
        <>
            <Card className="p-6">
                <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
                    <div className="w-full lg:w-1/3">
                        <div className="relative aspect-square overflow-hidden rounded-lg">
                            <Image
                                src={talent.live_avatar ?? talent.avatar ?? ""}
                                alt={talent.name}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                priority={true}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col lg:w-auto">
                        <div>
                            <h1 className="mb-2 text-center text-2xl font-bold lg:text-left">{talent.name}</h1>
                            {talent.en_name && (
                                <p className="mb-4 text-center text-lg text-muted-foreground lg:text-left">
                                    {talent.en_name}
                                </p>
                            )}
                            {talent.status && (
                                <p className="mb-4 text-sm text-muted-foreground">狀態：{talent.status}</p>
                            )}
                            <div className="flex justify-center gap-3 lg:justify-start">
                                {talent.youtube_link && (
                                    <Link href={talent.youtube_link} target="_blank">
                                        <Button>前往 YouTube 頻道</Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                        {mainVideo && <MainVideoSection video={mainVideo} />}
                    </div>
                </div>
            </Card>
            <VideoList videos={videos} mainVideoId={mainVideo?.videoId} />
        </>
    );
}
