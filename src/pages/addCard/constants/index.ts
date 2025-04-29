import CardBrandField from "../../../components/InputForm/CardBrand/CardBrandField";
import CardNumberField from "../../../components/InputForm/CardNumber/CardNumberField";
import CardCVCField from "../../../components/InputForm/CVC/CardCVCField";
import CardExpirationField from "../../../components/InputForm/Expiration/CardExpirationField";
import PasswordField from "../../../components/InputForm/Password/PasswordField";
import {
  validateExpiration,
  validateMonth,
  validateSegmentLength,
  validateYear,
} from "../../../components/InputForm/validation";
import {
  CARD_BRAND_MESSAGE,
  CARD_NUMBER_MESSAGE,
  CVC_MESSAGE,
  EXPIRATION_MESSAGE,
  PASSWORD_MESSAGE,
} from "../../../constants/guide";
import { CARD_INFO_LENGTH } from "../../../constants/setting";
import { CardInfo } from "../../../hooks/useCardInfo";

export const STEPS = [
  {
    id: "CARD_NUMBER",
    component: CardNumberField,
    messageMain: CARD_NUMBER_MESSAGE.MAIN,
    messageCaption: CARD_NUMBER_MESSAGE.CAPTION,
    maxLength: CARD_INFO_LENGTH.NUMBER,
    validate: (cardInfo: CardInfo) => {
      const validations = [
        validateSegmentLength(cardInfo.firstNumber, CARD_INFO_LENGTH.NUMBER),
        validateSegmentLength(cardInfo.secondNumber, CARD_INFO_LENGTH.NUMBER),
        validateSegmentLength(cardInfo.thirdNumber, CARD_INFO_LENGTH.NUMBER),
        validateSegmentLength(cardInfo.fourthNumber, CARD_INFO_LENGTH.NUMBER),
      ];
      return (
        validations.every((v) => v.isValid) &&
        cardInfo.firstNumber.length === CARD_INFO_LENGTH.NUMBER &&
        cardInfo.secondNumber.length === CARD_INFO_LENGTH.NUMBER &&
        cardInfo.thirdNumber.length === CARD_INFO_LENGTH.NUMBER &&
        cardInfo.fourthNumber.length === CARD_INFO_LENGTH.NUMBER
      );
    },
  },
  {
    id: "CARD_BRAND",
    component: CardBrandField,
    messageMain: CARD_BRAND_MESSAGE.MAIN,
    messageCaption: CARD_BRAND_MESSAGE.CAPTION,
    validate: (cardInfo: CardInfo) => cardInfo.cardBrand !== "",
  },
  {
    id: "EXPIRATION",
    component: CardExpirationField,
    messageMain: EXPIRATION_MESSAGE.MAIN,
    messageCaption: EXPIRATION_MESSAGE.CAPTION,
    maxLength: CARD_INFO_LENGTH.EXPIRATION,
    validate: (cardInfo: CardInfo) => {
      const monthValid = validateMonth(
        cardInfo.month,
        CARD_INFO_LENGTH.EXPIRATION
      ).isValid;
      const yearValid = validateYear(
        cardInfo.year,
        CARD_INFO_LENGTH.EXPIRATION
      ).isValid;
      const expirationValid = validateExpiration(
        cardInfo.month,
        cardInfo.year,
        CARD_INFO_LENGTH.EXPIRATION
      ).isValid;

      return (
        monthValid &&
        yearValid &&
        expirationValid &&
        cardInfo.month.length === CARD_INFO_LENGTH.EXPIRATION &&
        cardInfo.year.length === CARD_INFO_LENGTH.EXPIRATION
      );
    },
  },
  {
    id: "CVC",
    component: CardCVCField,
    messageMain: CVC_MESSAGE.MAIN,
    maxLength: CARD_INFO_LENGTH.CVC,
    validate: (cardInfo: CardInfo) =>
      cardInfo.cvc.length === CARD_INFO_LENGTH.CVC,
  },
  {
    id: "PASSWORD",
    component: PasswordField,
    messageMain: PASSWORD_MESSAGE.MAIN,
    messageCaption: PASSWORD_MESSAGE.CAPTION,
    maxLength: CARD_INFO_LENGTH.PASSWORD,
    validate: (cardInfo: CardInfo) =>
      cardInfo.password.length === CARD_INFO_LENGTH.PASSWORD,
  },
];
