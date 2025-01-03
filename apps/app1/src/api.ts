import { createApi } from "@project/api";

const { fetcher, api } = createApi({
  baseURL: process.env.TARO_APP_API_BASE_URL,
});

fetcher.interceptors.request.use((config) => {
  return config;
});

export default api;
