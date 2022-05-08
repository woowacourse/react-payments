import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardPreview from '../../components/CardPreview/CardPreview';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import CardRegistrationButton from '../../components/CardRegistrationButton/CardRegistrationButton';
import CardsContext from '../../contexts/CardsContext';

const LandingPage = () => {
  const { cardList } = useContext(CardsContext);

  return (
    <>
      <Header>
        <h2>보유카드</h2>
      </Header>
      <Content>
        <StyledCardList>
          {cardList &&
            cardList.map(({ id, alias, ...cardInfo }) => (
              <li key={id}>
                <CardPreview {...cardInfo} />
                <p className="card-alias">{alias}</p>
              </li>
            ))}
          <li>
            <Link to="/register">
              <CardRegistrationButton />
            </Link>
          </li>
        </StyledCardList>
      </Content>
    </>
  );
};

const StyledCardList = styled.ul`
  display: flex;
  width: 100%;
  height: 591px;
  overflow: scroll;
  flex-direction: column;
  gap: 8px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .card-alias {
    margin: 14px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
`;

export default LandingPage;
