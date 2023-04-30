import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCardListDispatch, useCardListState } from '../../../hooks/useContextHooks';
import Button from '../../atomics/Button';
import Input from '../../atomics/Input';
import Message from '../../atomics/Message';
import { VStack } from '../../layout/flexbox';
import CardItem from '../../molecules/CardItem';

const NameRegisterCard: React.FC = () => {
  const [nickName, setNickName] = useState<string>('');

  const cardList = useCardListState();
  const cardListDispatcher = useCardListDispatch();

  const navigate = useNavigate();

  const card = cardList[cardList.length - 1];

  const handleRegisterCard = () => {
    card.nickName = nickName;

    cardListDispatcher([...cardList.slice(0, cardList.length - 1), card]);
    navigate('/');
  };

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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNickName(e.target.value);
        }}
      />
      <ButtonWrapper>
        <Button type="button" width="50px" height="30px" onClick={handleRegisterCard}>
          <Message fontSize="14px" lineHeight="16px" fontWeight={700} color="#000">
            확인
          </Message>
        </Button>
      </ButtonWrapper>
    </NameRegisterCardWrapper>
  );
};

const ButtonWrapper = styled.div`
  margin-top: 24px;

  width: 90%;

  display: flex;
  justify-content: flex-end;
`;

const NameRegisterCardWrapper = styled.div`
  ${VStack};

  width: 100%;
  align-items: center;

  span + div {
    margin-top: 20px;
  }

  div + input {
    margin-top: 124px;
  }
`;

export default NameRegisterCard;
