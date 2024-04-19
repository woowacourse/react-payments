import { MasterCard, VisaCard } from '@assets/images';

const useCreditCardLogo = ([firstCardNumbers]: string[]): string | null => {
  /* [VisaCard 구분 방법] - 4로 시작한다. */
  const isVisaCardNumber = firstCardNumbers.startsWith('4');
  /* [MasterCard 구분 방법] - 51 ~ 55로 시작한다. */
  const isMasterCardNumber = /^5[1-5]/.test(firstCardNumbers);

  if (isVisaCardNumber) return VisaCard;

  if (isMasterCardNumber) return MasterCard;

  return null;
};

export default useCreditCardLogo;
