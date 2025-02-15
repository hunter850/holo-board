const isDevelopment = process.env.NODE_ENV === "development";

const BASE_DOMAIN = isDevelopment ? "http://localhost:3300" : "https://holo-srv.hlkw.me";

const FRONTEND_BASE = isDevelopment ? "http://localhost:3000" : "https://holoboard.hlkw.me";

export const API_CONFIG = {
    BASE_URL: BASE_DOMAIN,
    FRONTEND_URL: FRONTEND_BASE,
    ENDPOINTS: {
        TALENT_LIST: "/api/talent_list",
        GOOGLE_LOGIN: "/api/google_login",
        USER: "/api/user_info",
        LOGOUT: "/api/logout",
    },
    FRONTEND_ENDPOINTS: {
        USER: "/api/user",
    },
} as const;

// 為了方便使用，導出完整的 URL
export const API_URLS = {
    TALENT_LIST: `${BASE_DOMAIN}${API_CONFIG.ENDPOINTS.TALENT_LIST}`,
    GOOGLE_LOGIN: `${BASE_DOMAIN}${API_CONFIG.ENDPOINTS.GOOGLE_LOGIN}`,
    USER: `${BASE_DOMAIN}${API_CONFIG.ENDPOINTS.USER}`,
    LOGOUT: `${BASE_DOMAIN}${API_CONFIG.ENDPOINTS.LOGOUT}`,
} as const;

export const FRONTEND_URLS = {} as const;
