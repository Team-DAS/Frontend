import apiClient from "../config/apiClient";

export const validateToken = async (): Promise<boolean> => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const response = await apiClient.post("/authz/validate", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data === true;
  } catch {
    return false;
  }
};
