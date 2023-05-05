import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/@common/Card/Card';
import * as Styled from './MyCardList.styles';
import { useMyCardList } from '../../hooks/card/card';
import { generateCardNumber } from '../../utils/card';
import Layout from '../../components/@common/Layout/Layout';
import { ROUTES } from '../../constants/routes';

export default function MyCardList() {
  const navigate = useNavigate();
  const { registeredCards } = useMyCardList();

  return (
    <Layout>
      <Styled.Root dir="column" align="center" scroll>
        {registeredCards.map((card, index) => (
          <div key={generateCardNumber(card.cardNumber)}>
            <Card type="card" {...card} />
            <Styled.Alias>{card.alias}</Styled.Alias>
          </div>
        ))}
        <Card type="button" onClick={() => navigate(ROUTES.REGISTER_CARD)} />
      </Styled.Root>
    </Layout>
  );
}
