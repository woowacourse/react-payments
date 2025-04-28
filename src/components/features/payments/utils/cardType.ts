import { CARD_TYPE } from '../config/card';

export const getCardTypeFromPrefix = (value: string) => {
  if (value.length < 2) return null;
  if (value[0] === '4') return CARD_TYPE.visa;
  if (Number(value) >= 51 && Number(value) <= 55) return CARD_TYPE.master;
  return null;
};
