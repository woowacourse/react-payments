import { EXPIRE_DATE_ERROR_MESSAGE } from "../constants";

export const validateCVCNumber = (CVCNumber: string) => {
  if (isNaN(Number(CVCNumber))) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_NUMBER;
  }

  const isInvalidLength = CVCNumber.length === 0 || CVCNumber.length === 3;
  if (!isInvalidLength) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_CVC_LENGTH;
  }

  return "";
};
