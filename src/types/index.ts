export interface HoloTalent {
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

export interface HoloResponse {
    success: boolean;
    message: string;
    data: HoloTalent[];
}

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
