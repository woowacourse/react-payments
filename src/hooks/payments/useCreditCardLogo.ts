import { MasterCard, VisaCard } from '@assets/images';

const useCreditCardLogo = ([firstCardNumbers]: string[]): string | null => {
  const isVisaCardNumber = firstCardNumbers.startsWith('4');
  const isMasterCardNumber = /^5[1-5]/.test(firstCardNumbers);

  if (isVisaCardNumber) return VisaCard;

  if (isMasterCardNumber) return MasterCard;

  return null;
};

export default useCreditCardLogo;
