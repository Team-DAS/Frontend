import { useState } from "react";
import { accountService } from "../service/account.service";
import { RegistrationFormData } from "../schemas/authSchemas";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const register = async (data: RegistrationFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await accountService.register(data);
      setSuccess(true);
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Error registering account"
      );
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, success };
};
