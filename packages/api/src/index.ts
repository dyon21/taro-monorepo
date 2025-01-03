import axios, { CreateAxiosDefaults } from "axios";

export const createApi = (axiosOptions: CreateAxiosDefaults) => {
  const fetcher = axios.create({
    timeout: 10000,
    ...axiosOptions,
  });

  fetcher.interceptors.response.use((response) => {
    return response.data;
  });

  return {
    fetcher,
    api: {
      async getProductList(data: any) {
        return fetcher.post("/api/ist", data);
      },
    },
  };
};
