import { CARD_BRAND, ERROR_CODE_TO_MESSAGE } from "./Constants";

export const convertCardBrandToIssuerCode = (cardBrand: string) => {
  if (Object.keys(CARD_BRAND).includes(cardBrand)) {
    return CARD_BRAND[cardBrand as keyof typeof CARD_BRAND].code;
  }
};

export const errorCodeToErrorMessage = (
  codes: string[],
  fieldCodes: string[],
): string[] => {
  return codes
    .filter((code) => fieldCodes.includes(code))
    .map(
      (code) =>
        ERROR_CODE_TO_MESSAGE[code as keyof typeof ERROR_CODE_TO_MESSAGE] ??
        "알 수 없는 오류가 발생했습니다.",
    )
    .filter(Boolean);
};

export const convertIssuerCodeToCardBrand = (code: string) => {
  return Object.values(CARD_BRAND).find((brand) => brand.code === code);
};
