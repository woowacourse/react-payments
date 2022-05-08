import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { initialCardInfo } from '../../constants/card';
import { Card } from '../common/Card';

import { AddCardButton } from '../common/Card/AddCardButton';
import { FlexWrapper } from '../common/styled';

const getLocalStorage = (id) => {
  localStorage.getItem(id);
};

export const CardLists = ({ cardIds }) => {
  // const cardInfos = cardIds.map((id) => getLocalStorage(id));
  const cardInfos = [
    {
      ...initialCardInfo,
      id: 123,
      cardType: { ...initialCardInfo.cardType, color: 'pink' },
    },
    {
      ...initialCardInfo,
      id: 456,
      cardType: { ...initialCardInfo.cardType, color: '#04c09e' },
    },
  ];

  return (
    <Style.CardListLayout>
      {cardInfos.map((info) => (
        <Style.CardWrapper>
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
  CardWrapper: styled(FlexWrapper)`
    justify-content: center;
  `,
};
