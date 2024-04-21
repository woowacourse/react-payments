import { CARD_CONFIG } from '../constants/system';

export const isVisaCard = (cardBrandNumber: number) => {
  if (Math.floor(cardBrandNumber / 10) === CARD_CONFIG.VISA) return true;
};

export const isMasterCard = (cardBrandNumber: number) => {
  if (
    CARD_CONFIG.MASTER.START <= cardBrandNumber &&
    cardBrandNumber <= CARD_CONFIG.MASTER.END
  )
    return true;
};
