import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../store/type';
import Input from '../../atomics/Input';
import Message from '../../atomics/Message';
import { VStack } from '../../layout/flexbox';
import CardItem from '../../molecules/CardItem';

interface NameRegisterCardProps {
  card: Card;
}

const NameRegisterCard: React.FC<NameRegisterCardProps> = ({ card }) => {
  return (
    <NameRegisterCardWrapper>
      <Message fontSize="24px" lineHeight="28px" color="#383838">
        카드 등록이 완료되었습니다.
      </Message>
      <CardItem card={card} />
      <Input
        type="text"
        isValid={true}
        variant="underline"
        width="244px"
        center={true}
        placeholder="엄마카드"
      />
    </NameRegisterCardWrapper>
  );
};

const NameRegisterCardWrapper = styled.div`
  ${VStack};

  width: 100%;
  align-items: center;

  span + div {
    margin-top: 36px;
  }

  div + input {
    margin-top: 124px;
  }
`;

export default NameRegisterCard;
