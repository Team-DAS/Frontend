import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://2ed0552ec716.ngrok-free.app/api/v1", // Gateway base
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default apiClient;
