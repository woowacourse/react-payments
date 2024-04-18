import { MasterCard, VisaCard } from '@assets/images';

const useCreditCardLogo = ([firstCardNumbers]: string[]): string | null => {
  const prefix = firstCardNumbers.substring(0, 2);
  const prefixNumber = parseInt(prefix);

  const isVisaCardNumber = firstCardNumbers.startsWith('4');
  const isMasterCardNumber = prefixNumber >= 50 && prefixNumber <= 55;

  if (isVisaCardNumber) return VisaCard;

  if (isMasterCardNumber) return MasterCard;

  return null;
};

export default useCreditCardLogo;
