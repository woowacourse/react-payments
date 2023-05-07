import { useContext, useState } from 'react';
import { AddCardContext } from 'context/CardContext';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from 'utils/localStorage';
import { Card } from 'types/Card';
import { mockSaveCardInfo } from 'utils/api';

export const useCardNameHandler = () => {
  const navigate = useNavigate();

  const { cardNumber, date, name, cardCompany, cardName, setCardName } =
    useContext(AddCardContext);

  const [isLoading, setLoading] = useState(false);

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

  const onSubmitHandler = async () => {
    setLoading(true);

    try {
      const responseData = await mockSaveCardInfo(cardInfo);

      if (responseData.success) {
        setLocalStorage('card', responseData?.data);

        setLoading(false);
        navigate('/');
      } else {
        console.error('실패:', responseData.error);

        setLoading(false);
      }
    } catch (error) {
      console.error('오류:', error);

      setLoading(false);
    }
  };

  return { cardInfo, handleCardName, onSubmitHandler, isLoading };
};
