import { type CardNumberContextValue } from "../types/types";
import { type CardBrandContextValue } from "../types/types";
import { type ExpireDateContextValue } from "../types/types";
import { type CvcContextValue } from "../types/types";
import { type PasswordContextValue } from "../types/types";

export const isNumeric = (value: string) => {
  return value === "" || /^\d+$/.test(value);
};

export const canShowCardBrand = (cardNumberContext: CardNumberContextValue) => {
  return cardNumberContext.inputConfig.every((value, index) => {
    return cardNumberContext.cardNumber[index].length === value.maxLength;
  });
};

export const canShowExpireDate = (cardBrandContext: CardBrandContextValue) => {
  return (
    !cardBrandContext.isOpen &&
    cardBrandContext.selectedItem.brand &&
    cardBrandContext.selectedItem.color
  );
};

export const canShowCvc = (expireDateContext: ExpireDateContextValue) => {
  return (
    expireDateContext.expireDate.month.length === 2 &&
    expireDateContext.expireDate.year.length === 2
  );
};

export const canShowPassword = (cvcContext: CvcContextValue) => {
  return cvcContext.cvc.length === 3;
};

export const canShowSendButton = (passwordContext: PasswordContextValue) => {
  return passwordContext.password.length === 2;
};
