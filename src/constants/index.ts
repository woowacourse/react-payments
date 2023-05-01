import { Company } from "../types/Card";

export const INPUT_MAX_LENGTH = {
  CARD_NUMBER: 4,
  EXPIRATION_DATE: 2,
  NAME: 30,
  SECURITY_CODE: 3,
  PASSWORD: 1,
};

export const NUMBER_OF_INPUTS = {
  CARD_NUMBER: 4,
  EXPIRATION_DATE: 2,
  NAME: 1,
  SECURITY_CODE: 1,
  PASSWORD: 2,
};

type CardCompanyColor = {
  [key in Company]: string;
};

export const CARD_BACKGROUND_COLOR: CardCompanyColor = {
  현대카드: "#030303",
  BC카드: "#F04651",
  신한카드: "#0046ff",
  카카오뱅크: "#fee300",
  하나카드: "#1DB8B3",
  우리카드: "#42add7",
  국민카드: "#8C8176",
  롯데카드: "#e60013",
  "": "#000000",
};
