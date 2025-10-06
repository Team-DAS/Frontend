import apiClient from "@/api/config/apiClient";
import { LoginRequest, LoginResponse, RefreshTokenRequest, RefreshTokenResponse } from "./auth.types";

export const AuthService = {
  login: (payload: LoginRequest) =>
    apiClient.post<LoginResponse>("/auth/login", payload),

  refreshToken: (payload: RefreshTokenRequest) =>
    apiClient.post<RefreshTokenResponse>("/auth/refresh-token", payload),
};
