import { useContext } from 'react';
import { cardLocalStorage } from '../components/domain/CardLocalStorage';
import { CardContext } from '../context/CardContext';
import { useNavigate } from 'react-router-dom';
import { useLoading } from './useLoading';

export const useCompletion = () => {
  const navigate = useNavigate();
  const { card, setCardName, updateCardList } = useContext(CardContext);
  const { setLoading } = useLoading();

  const handleCardLoading = () => {
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 3000);
  };

  const handleComplete = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setCardName((event.target as HTMLInputElement).value);
    updateCardList(card);
    cardLocalStorage.addCard(card);
    handleCardLoading();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(event.target.value);
  };

  return { handleComplete, handleInputChange };
};
