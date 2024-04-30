import CARD_INPUTBOX_NAME from "../constants/cardInputBoxName";

const normalizeValue = (value: string, name: string) => {
  if (name === CARD_INPUTBOX_NAME.expirationPeriod.month && /^[1-9]$/.test(value))
    return `0${value}`;

  return value;
};

export default normalizeValue;
