import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardsContext from '../../contexts/CardsContext';

const LandingPage = () => {
  const { cardList } = useContext(CardsContext);

  return (
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
  );
};

export default LandingPage;
