import { useContext } from 'react';
import { COUNT, PLACEHOLDER } from 'constant';
import { CARD_NUMBER_MARK } from 'constant/mark';
import { CardContext } from 'context/CardContext';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import { useNavigate } from 'react-router-dom';

function useCard({ cardNumber, expiredDate, ownerName }) {
  const navigator = useNavigate();
  const { inputtedInfoDispatch, cardData } = useContext(CardContext);

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
    : PLACEHOLDER.DATE;

  const ownerNameString = ownerName
    ? ownerName.value || PLACEHOLDER.NAME
    : PLACEHOLDER.NAME;

  const onCardClick = () => {
    const currentCardInfo = cardData.find(
      cardInfo => cardInfo.cardNumber.value === cardNumber.value
    );

    inputtedInfoDispatch({
      type: INPUT_ACTION.EQUALIZE,
      value: currentCardInfo,
    });

    navigator('/react-payments/cardComplete');
  };

  return {
    companyNameString,
    cardNumberString,
    expiredDateString,
    ownerNameString,
    onCardClick,
  };
}

export default useCard;
