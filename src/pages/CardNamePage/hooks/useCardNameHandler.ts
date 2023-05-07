import { useContext } from 'react';
import { AddCardContext } from 'context/CardContext';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from 'utils/localStorage';
import { Card } from 'types/Card';

export const useCardNameHandler = () => {
  const navigate = useNavigate();

  const { cardNumber, date, name, cardCompany, cardName, setCardName } =
    useContext(AddCardContext);

  const cardInfo: Card = {
    cardNumber: cardNumber,
    date: date,
    name: name,
    cardCompany: cardCompany,
    cardName: cardName,
  };

  const handleCardName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setCardName?.(value);
  };

  const onSubmitHandler = () => {
    setLocalStorage('card', { ...cardInfo });
    navigate('/');
  };

  return { cardInfo, handleCardName, onSubmitHandler };
};
