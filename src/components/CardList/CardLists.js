import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Card } from '../common/Card';

import { AddCardButton } from '../common/Card/AddCardButton';

export const CardLists = ({ cardInfos }) => {
  return (
    <Style.CardListLayout>
      {cardInfos.map((info) => (
        <Style.CardWrapper key={info.id}>
          <Link to={`./modify/${info.id}`}>
            <Card cardInfo={info} />
          </Link>
        </Style.CardWrapper>
      ))}
      <Link to={`./register`}>
        <Style.CardWrapper>
          <AddCardButton />
        </Style.CardWrapper>
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
  CardWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
};
