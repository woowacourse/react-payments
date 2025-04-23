import { CARD_PREFIX } from '../../../../constants/settings';

export const checkCardType = (firstCardInput: string) => {
  if (Number(firstCardInput[0]) === CARD_PREFIX.VISA) return './Visa.png';

  const cardTypePrefix = Number(firstCardInput.slice(0, 2));
  if (
    cardTypePrefix >= CARD_PREFIX.MASTERCARD_MIN &&
    cardTypePrefix <= CARD_PREFIX.MASTERCARD_MAX
  ) {
    return './Mastercard.png';
  }

  return null;
};
