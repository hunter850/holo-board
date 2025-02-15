import VTuberCard from "@/components/molecules/VTuberCard";
import { API_URLS } from "@/config/api_config";

interface HoloTalent {
    id: number;
    name: string;
    en_name: string;
    live_avatar: string;
    avatar: string;
    status: string;
    youtube_link: string;
    deleted: boolean;
    created_at: string;
    updated_at: string;
}

interface HoloResponse {
    success: boolean;
    message: string;
    data: HoloTalent[];
}

function sortById(a: HoloTalent, b: HoloTalent) {
    return a.id - b.id;
}

async function getTalents() {
    const response = await fetch(API_URLS.TALENT_LIST, {
        next: { revalidate: 60 }, // 每分鐘重新驗證數據
    });
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
                    en_name={talent.en_name}
                    live_avatar={talent.live_avatar}
                    youtube_link={talent.youtube_link}
                    status={talent.status}
                />
            ))}
        </div>
    );
}
