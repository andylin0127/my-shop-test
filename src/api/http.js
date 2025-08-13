import axios from "axios";
import { getToken } from "../hooks/useAuth";

// 依你的後端調整 baseURL
const http = axios.create({
  baseURL: "http://localhost:5173/my-shop-test", // 例：json-server 或你的 API
  timeout: 8000,
});

// 自動帶上 token
http.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default http;
