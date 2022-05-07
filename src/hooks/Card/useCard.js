import { useContext } from 'react';
import { COUNT, PLACEHOLDER } from 'constant';
import { CARD_NUMBER_MARK } from 'constant/mark';
import { CardContext } from 'context/CardContext';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constant/Link';

function useCard({ cardNumber, expiredDate, ownerName }) {
  const navigator = useNavigate();
  const { inputtedInfoDispatch, cardData } = useContext(CardContext);

  const companyNameString = '신한 카드';

  const isValidCardNumber =
    cardNumber && Object.values(cardNumber.value).some(number => number);

  const cardNumberString = () => {
    if (!isValidCardNumber) {
      return '';
    }

    return Object.values(cardNumber.value)
      .map((cardNumber, index) =>
        index < COUNT.CARD_NUMBER_HIDE_COUNT
          ? cardNumber
          : CARD_NUMBER_MARK.repeat(cardNumber.length)
      )
      .join(' ');
  };

  const isValidExpiredDate =
    expiredDate && Object.values(expiredDate.value).some(date => date);

  const expiredDateString = () => {
    if (!isValidExpiredDate) {
      return PLACEHOLDER.DATE;
    }

    return `${expiredDate.value.month}/${expiredDate.value.year}`;
  };

  const isValidOwnerName = ownerName && ownerName.value;

  const ownerNameString = () => {
    if (!isValidOwnerName) {
      return PLACEHOLDER.NAME;
    }

    return ownerName.value;
  };

  const onCardClick = () => {
    const currentCardInfo = cardData.find(
      cardInfo => cardInfo.cardNumber.value === cardNumber.value
    );

    inputtedInfoDispatch({
      type: INPUT_ACTION.EQUALIZE,
      value: currentCardInfo,
    });

    navigator(LINK.CARD_COMPLETE_PAGE);
  };

  return {
    companyNameString,
    cardNumberString: cardNumberString(),
    expiredDateString: expiredDateString(),
    ownerNameString: ownerNameString(),
    onCardClick,
  };
}

export default useCard;
