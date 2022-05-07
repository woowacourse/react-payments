import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Card } from '../common/Card';

import { AddCardButton } from '../common/Card/AddCardButton';

const getLocalStorage = (id) => {
  localStorage.getItem(id);
};

export const CardLists = ({ cardIds }) => {
  const cardInfos = cardIds.map((id) => getLocalStorage(id));

  return (
    <Style.CardListLayout>
      {cardInfos.map((info) => (
        <Link to={`./modify/${info.id}`}>
          <Card cardInfo={info} />
        </Link>
      ))}
      <Link to={`./register`}>
        <AddCardButton />
      </Link>
    </Style.CardListLayout>
  );
};

const Style = {
  CardListLayout: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    margin: 24px 0;
  `,
};
