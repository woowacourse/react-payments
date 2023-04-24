import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCardsContext } from '../../domain/context/CardsContext';

const useCardNicknameInputPage = () => {
  const navigate = useNavigate();
  const { lastRegisteredCard, modifyLastCardNickname } = useCardsContext();
  const [nickname, setNickname] = useState('');

  const handleNicknameSubmit: FormEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    if (lastRegisteredCard === null) return;

    if (nickname === '') {
      navigate('/');
      return;
    }

    modifyLastCardNickname(lastRegisteredCard, nickname);
    navigate('/');
  };

  const handleNicknameChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setNickname(event.target.value);
  };

  return {
    lastRegisteredCard,
    nickname,
    handleNicknameSubmit,
    handleNicknameChange,
  };
};

export default useCardNicknameInputPage;
