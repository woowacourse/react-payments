import React from 'react';
import { Link } from 'react-router-dom';
import CardPreview from '../../components/CardPreview/CardPreview';
import useStore from '../../hooks/useStore';

const LandingPage = () => {
  const { cardList } = useStore();

  return (
    <div>
      {cardList &&
        cardList.map(({ id, ...cardInfo }) => (
          <CardPreview key={id} {...cardInfo} />
        ))}
      <Link to="/register">카드 추가</Link>
    </div>
  );
};

export default LandingPage;
