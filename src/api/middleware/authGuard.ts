    import { useEffect, useState } from "react";
import { validateToken } from "./tokenValidator";

export const useAuthGuard = () => {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const check = async () => {
      const valid = await validateToken();
      setAuthorized(valid);
    };
    check();
  }, []);

  return authorized;
};
