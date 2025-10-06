import { RegistrationFormData } from "../schemas/authSchemas";
import apiClient from "@/api/config/apiClient";

export const accountService = {
  register: async (data: RegistrationFormData) => {
    const response = await apiClient.post("/accounts/register", data);
    return response.data;
  },
};
