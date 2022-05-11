import { Link } from 'react-router-dom';

import styled from 'styled-components';
import PATH from '../../constants/path';
import { Card } from '../common/Card';
import { AddCardButton } from '../common/Card/AddCardButton';

export const CardLists = ({ cardInfos }) => {
  return (
    <Style.CardListLayout>
      {Object.values(cardInfos).map((info) => (
        <Style.CardWrapper key={info.id}>
          <Link to={`${PATH.MODIFY}/${info.id}`}>
            <Card cardInfo={info} />
            <Style.NickNameWrapper>{info.cardNickName}</Style.NickNameWrapper>
          </Link>
        </Style.CardWrapper>
      ))}
      <Link to={`${PATH.REGISTER}`}>
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
    gap: 15px;
    margin: 24px 0;
    height: 600px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
  `,
  CardWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  NickNameWrapper: styled.p`
    margin-top: 0.6rem;
    color: black;
  `,
};
