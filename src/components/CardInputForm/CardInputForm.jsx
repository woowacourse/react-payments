import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardInfoContext } from 'CardInfoContextProvider';
import { ERROR_MESSAGE } from 'constants';
import { validator } from 'utils';

function CardInputForm({ children }) {
  const navigate = useNavigate();

  const { state } = useContext(CardInfoContext);

  const { number1, number2, number3, number4, month, year, cvc } = state.card;

  const isUnderCardNumberLength = (number1, number2, number3, number4) => {
    return number1.length < 4 || number2.length < 4 || number3.length < 4 || number4.length < 4;
  };

  const isIncorrectMonth = (month) => {
    return Number(month) > 12 || Number(month) < 1;
  };

  const isIncorrectYear = (year) => {
    return Number(year) < 22;
  };

  const isIncorrectMonthAndYear = (month, year) => {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentYear = Number(date.getFullYear().toString().slice(2, 4));

    return Number(month) < currentMonth && Number(year) === currentYear;
  };

  const isUnderCVClength = (cvc) => {
    return cvc.length < 3;
  };

  const checkCardInfo = ({ number1, number2, number3, number4, month, year, cvc }) => {
    validator([
      {
        checker: () => isUnderCardNumberLength(number1, number2, number3, number4),
        errorMsg: ERROR_MESSAGE.CARD_NUMBER_LENGTH,
      },
      {
        checker: () => isIncorrectMonth(month),
        errorMsg: ERROR_MESSAGE.MONTH,
      },
      {
        checker: () => isIncorrectYear(year),
        errorMsg: ERROR_MESSAGE.YEAR,
      },
      {
        checker: () => isIncorrectMonthAndYear(month, year),
        errorMsg: ERROR_MESSAGE.MONTH_AND_YEAR,
      },
      {
        checker: () => isUnderCVClength(cvc),
        errorMsg: ERROR_MESSAGE.CVC,
      },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      checkCardInfo({ number1, number2, number3, number4, month, year, cvc });
      navigate('/card-add-success');
    } catch (error) {
      alert(error.message);
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default CardInputForm;
