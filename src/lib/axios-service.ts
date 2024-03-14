import axios from 'axios';
import { cookies } from 'next/headers';


const axiosExtInstance = axios.create({
    
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

async function errorHandler(error: { response: { data: any; status: number }; code: string }) {
  const { response, code } = error;
  if (response) {
    const { data, status } = response;
    return Promise.reject(data);
  }
  return Promise.reject(code);
}

axiosExtInstance.interceptors.request.use(
  async (config) => {
    const skipJWT = config.headers.skipJWT === 'Y';
    if (!skipJWT) {
     
      const authHeader = `Bearer ${""}`;
      // @ts-ignore
      const updatedHeaders: AxiosRequestHeaders = {
        ...config.headers,
        Authorization: authHeader,
      };
      config.headers = updatedHeaders;
    }
    delete config.headers.skipAddJWT;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosExtInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return errorHandler(error);
  }
);



export default axiosExtInstance;
