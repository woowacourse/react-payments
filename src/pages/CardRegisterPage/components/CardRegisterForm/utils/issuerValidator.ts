import type { FieldErrorInformation } from "../shared/types";
import { ERROR_MESSAGES } from "../IssuerField/constants";
import type { IssuerKoreanName } from "../../../../../domain/card/cardIssuer";

export const validateIssuer = (cardCompany: IssuerKoreanName | null) => {
  const errorInformation: FieldErrorInformation = {
    isValid: true,
    errorMessage: null,
  };

  if (cardCompany === null) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = ERROR_MESSAGES.NOT_SELECTED;
  }

  return {
    isValid: errorInformation.isValid,
    errorMessage: errorInformation.errorMessage,
  };
};
