import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardRegisterInfo } from '../../types/card.type';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import * as Styled from './MyCardList.styles';
import AddCardButton from '../../components/pages/CardList/AddCardButton/AddCardButton';
import CardContent from '../../components/pages/CardList/CardContent/CardContent';
import { getItemFromLocalStorage } from '../../utils/localStorage';

export default function MyCardList() {
  const navigate = useNavigate();
  const location = useLocation();
  const { initCardRegisterInfo } = useCardRegisterContext();
  const [registeredCards, setRegisteredCards] = useState(getItemFromLocalStorage<CardRegisterInfo[]>('CardList'));

  useEffect(() => {
    if (location.state?.isReadyForRegister) {
      setRegisteredCards(getItemFromLocalStorage<CardRegisterInfo[]>('CardList'));
      initCardRegisterInfo();
    }

    return () => {
      window.history.replaceState({}, document.title);
    };
  }, []);

  return (
    <Styled.Root dir='column' align='center'>
      {registeredCards && registeredCards.map((card, index) => <CardContent key={index} {...card} />)}
      <AddCardButton onClick={() => navigate('./registerCard')} />
    </Styled.Root>
  );
}
