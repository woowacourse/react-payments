import { useState } from 'react';

const useAddCardForm = () => {
  const defaultCardInfo = {
    cardName: 'DEFAULT',
    cardNickName: '',
    numbers: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    user: '',
    expireDate: {
      month: '',
      year: '',
    },
    cvc: '',
    password: {
      first: '',
      second: '',
    },
  };

  const [cardInfo, setCardInfo] = useState(defaultCardInfo);
  const [myCards, setMyCards] = useState([]);

  const handleCardColor = (name) => {
    setCardInfo({ ...cardInfo, cardName: name });
  };

  const resetNewCardInfo = () => setCardInfo(defaultCardInfo);

  const addNewCard = () => {
    setMyCards([...myCards, cardInfo]);
    resetNewCardInfo();
  };

  return { cardInfo, setCardInfo, addNewCard, handleCardColor };
};

export default useAddCardForm;
