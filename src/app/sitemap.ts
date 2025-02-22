import { MetadataRoute } from "next";
import { API_URLS } from "@/config/api_config";
// types
import type { HoloTalent, HoloResponse } from "@/types";

export const runtime = "edge";
export const revalidate = 4320; // 12小時 = 12 * 60 * 60 秒

function sortById(a: HoloTalent, b: HoloTalent) {
    return a.id - b.id;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        // 基本的 sitemap 條目（保證至少有首頁）
        const baseEntries: MetadataRoute.Sitemap = [
            {
                url: process.env.NEXT_PUBLIC_SITE_DOMAIN!,
                lastModified: new Date(),
                changeFrequency: "daily",
                priority: 1,
            },
        ];

        // API 請求
        const response = await fetch(API_URLS.TALENT_LIST);

        if (!response.ok) {
            console.error(`Talent API failed with status: ${response.status}`);
            return baseEntries; // 返回基本的 sitemap
        }

        const talentsData = (await response.json()) as HoloResponse;

        if (!talentsData?.data?.length) {
            console.warn("Talent data is empty or invalid");
            return baseEntries;
        }

        const sortedTalents = talentsData.data.sort(sortById);

        // 生成完整的 sitemap
        const talentUrls: MetadataRoute.Sitemap = sortedTalents.map((talent) => ({
            url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN!}/talent/${talent.id}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.7,
        }));

        return [...baseEntries, ...talentUrls];
    } catch (error) {
        console.error("Error generating sitemap:", error);
        return [
            {
                url: process.env.NEXT_PUBLIC_SITE_DOMAIN!,
                lastModified: new Date(),
                changeFrequency: "daily",
                priority: 1,
            },
        ];
    }
}
