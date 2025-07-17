const SERVER_DOMAIN = process.env.SERVER_DOMAIN!;
const SERVER_SUBPATH = process.env.SERVER_SUBPATH!;
const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN!;

const SERVER_URL = `${SERVER_DOMAIN}${SERVER_SUBPATH ?? ""}`;

export const API_CONFIG = {
    SERVER_DOMAIN: SERVER_DOMAIN,
    SERVER_URL: SERVER_URL,
    FRONTEND_DOMAIN: FRONTEND_DOMAIN,
    ENDPOINTS: {
        TALENT_LIST: "/api/talent_list",
        GOOGLE_LOGIN: "/api/google_login",
        USER: "/api/user_info",
        LOGOUT: "/api/logout",
        TEST: "/api/test",
        VIDEO_LIST: "/api/video_list",
    },
    FRONTEND_ENDPOINTS: {
        USER: "/api/user",
    },
} as const;

// 為了方便使用，導出完整的 URL
export const API_URLS = {
    TALENT_LIST: `${SERVER_URL}${API_CONFIG.ENDPOINTS.TALENT_LIST}`,
    GOOGLE_LOGIN: `${SERVER_URL}${API_CONFIG.ENDPOINTS.GOOGLE_LOGIN}`,
    USER: `${SERVER_URL}${API_CONFIG.ENDPOINTS.USER}`,
    LOGOUT: `${SERVER_URL}${API_CONFIG.ENDPOINTS.LOGOUT}`,
    TEST: `${SERVER_URL}${API_CONFIG.ENDPOINTS.TEST}`,
    VIDEO_LIST: `${SERVER_URL}${API_CONFIG.ENDPOINTS.VIDEO_LIST}`,
} as const;

export const FRONTEND_URLS = {} as const;
