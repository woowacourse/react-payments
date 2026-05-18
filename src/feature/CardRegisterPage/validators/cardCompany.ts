import type { IssuerKoreanNameType } from "../../../shared/types/CardCompany";
import { ERROR_MESSAGES } from "../constants";
import type { ErrorInformationType } from "./ErrorInformationType";

export const validateCardCompany = (
  cardCompany: IssuerKoreanNameType | null,
) => {
  const errorInformation: ErrorInformationType = {
    isValid: true,
    errorMessage: null,
  };

  if (cardCompany === null) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = ERROR_MESSAGES.CARD_COMPANY.NOT_SELECTED;
  }

  return {
    isValid: errorInformation.isValid,
    errorMessage: errorInformation.errorMessage,
  };
};
