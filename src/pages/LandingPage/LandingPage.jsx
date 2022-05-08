import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardPreview from '../../components/CardPreview/CardPreview';
import Header from '../../components/Header/Header';
import CardRegistrationButton from '../../components/CardRegistrationButton/CardRegistrationButton';
import CardsContext from '../../contexts/CardsContext';

const LandingPage = () => {
  const { cardList } = useContext(CardsContext);

  return (
    <>
      <Header>
        <h2>보유카드</h2>
      </Header>
      <div style={{ alignItems: 'center', height: '100%' }}>
        <StyledCardList>
          {cardList &&
            cardList.map(({ id, alias, ...cardInfo }) => (
              <li>
                <CardPreview key={id} {...cardInfo} />
                <p style={{ margin: '14px', textAlign: 'center' }}>{alias}</p>
              </li>
            ))}
          <li>
            <Link to="/register">
              <CardRegistrationButton />
            </Link>
          </li>
        </StyledCardList>
      </div>
    </>
  );
};

const StyledCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default LandingPage;
