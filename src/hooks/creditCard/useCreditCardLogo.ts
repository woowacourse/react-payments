import { MasterCard, VisaCard } from '@assets/images';

const useCreditCardLogo = ([firstCardNumbers]: string[]): string | null => {
  /* [VisaCard 구분 방법] - 4로 시작한다. */
  const isVisaCardNumber = firstCardNumbers.startsWith('4');

  /* [MasterCard 구분 방법] - 카드 번호의 최초 2자리가 51 ~ 55로 시작한다. */
  const cardNumberPrefix = parseInt(firstCardNumbers.substring(0, 2));
  const isMasterCardNumber = cardNumberPrefix >= 51 && cardNumberPrefix <= 55;

  if (isVisaCardNumber) return VisaCard;

  if (isMasterCardNumber) return MasterCard;

  return null;
};

export default useCreditCardLogo;
