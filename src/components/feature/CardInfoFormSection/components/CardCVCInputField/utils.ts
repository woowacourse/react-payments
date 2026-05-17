import { validateRange } from "@/utils/validator";

export const validateCVCRange = (CVC: number) => {
  return validateRange(CVC, 0, 999);
};
