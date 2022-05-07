import { COUNT, PLACEHOLDER } from '../constant';
import { CARD_NUMBER_MARK } from '../constant/mark';

function useCard({ cardNumber, expiredDate, ownerName }) {
  const companyNameString = '신한 카드';

  const cardNumberString = cardNumber
    ? Object.values(cardNumber.value).some(number => number)
      ? Object.values(cardNumber.value)
          .map((cardNumber, index) =>
            index < COUNT.CARD_NUMBER_HIDE_COUNT
              ? cardNumber
              : CARD_NUMBER_MARK.repeat(cardNumber.length)
          )
          .join(' ')
      : ''
    : '';

  const expiredDateString = expiredDate
    ? Object.values(expiredDate.value).some(date => date)
      ? `${expiredDate.value.month}/${expiredDate.value.year}`
      : PLACEHOLDER.DATE
    : '';

  const ownerNameString = ownerName ? ownerName.value || PLACEHOLDER.NAME : '';

  return {
    companyNameString,
    cardNumberString,
    expiredDateString,
    ownerNameString,
  };
}

export default useCard;
