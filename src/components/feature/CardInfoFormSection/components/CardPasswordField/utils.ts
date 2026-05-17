import { validateRange } from "@/utils/validator";

export const validatePasswordRange = (password: number) => {
  return validateRange(password, 0, 99);
};
