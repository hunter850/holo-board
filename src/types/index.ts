export interface HoloTalent {
    id: number;
    name: string;
    enName: string;
    liveAvatar: string;
    avatar: string;
    status: string;
    youtubeLink: string;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface HoloResponse {
    success: boolean;
    message: string;
    data: HoloTalent[];
}

export interface TalentInfo {
    id: number;
    name: string;
    enName: string | null;
    liveAvatar: string | null;
    avatar: string | null;
    status: string | null;
    youtubeLink: string | null;
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
