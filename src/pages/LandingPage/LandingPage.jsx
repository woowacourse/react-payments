import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CardPreview from '../../components/CardPreview/CardPreview';
import Header from '../../components/Header/Header';
import CardsContext from '../../contexts/CardsContext';

const LandingPage = () => {
  const { cardList } = useContext(CardsContext);

  return (
    <>
      <Header>
        <h2>보유카드</h2>
      </Header>
      <div>
        {cardList &&
          cardList.map(({ id, alias, ...cardInfo }) => (
            <>
              <CardPreview key={id} {...cardInfo} />
              <p>{alias}</p>
            </>
          ))}
        <Link to="/register">카드 추가</Link>
      </div>
    </>
  );
};

export default LandingPage;
