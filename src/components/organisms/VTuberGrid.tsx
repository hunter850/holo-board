import VTuberCard from "@/components/molecules/VTuberCard";
import { API_URLS } from "@/config/api_config";
// types
import type { HoloTalent, HoloResponse } from "@/types";

function sortById(a: HoloTalent, b: HoloTalent) {
    return a.id - b.id;
}

async function getTalents() {
    const response = await fetch(API_URLS.TALENT_LIST, {
        next: { revalidate: 60 }, // 每分鐘重新驗證數據
    });
    if (!response.ok) {
        throw new Error("Failed to fetch talents");
    }
    const data: HoloResponse = await response.json();
    if (!data.success) {
        throw new Error(data.message);
    }

    return data.data.filter((talent) => !talent.deleted).sort(sortById);
}

export default async function VTuberGrid() {
    const talents = await getTalents();

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {talents.map((talent) => (
                <VTuberCard
                    key={talent.id}
                    id={talent.id}
                    name={talent.name}
                    en_name={talent.enName}
                    live_avatar={talent.liveAvatar}
                    youtube_link={talent.youtubeLink}
                    status={talent.status}
                />
            ))}
        </div>
    );
}
