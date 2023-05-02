import { FormEventHandler } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useInput from '../../utils/hooks/useInput';
import { useCardsContext } from '../../domain/context/CardsContext';

const useCardNicknameInputPage = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const { cards, modifyCardNickname } = useCardsContext();
  const [nickname, handleNicknameChange] = useInput('');
  const lastRegisteredCard = cards.find((card) => card.id === cardId) ?? null;

  const handleNicknameSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (nickname === '') {
      navigate('/');
      return;
    }

    if (cardId) {
      modifyCardNickname(cardId, nickname);
      navigate('/');
    }
  };

  return {
    nickname,
    lastRegisteredCard,
    handleNicknameSubmit,
    handleNicknameChange,
  };
};

export default useCardNicknameInputPage;
