import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { URL } from '../../../utils/constant';
import Button from '../../atomics/Button';
import Input from '../../atomics/Input';
import Message from '../../atomics/Message';
import { VStack } from '../../layout/flexbox';
import CardItem from '../../molecules/CardItem';

const NameRegisterCard: React.FC = () => {
  const nickName = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleRegisterCard = async () => {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        ...state,
        nickName: nickName.current!.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    navigate('/');
  };

  return (
    <NameRegisterCardWrapper>
      <Message fontSize="24px" lineHeight="28px" color="#383838">
        카드 등록이 완료되었습니다.
      </Message>
      <CardItem card={state} />
      <Input
        type="text"
        isValid={true}
        variant="underline"
        width="244px"
        center={true}
        placeholder="엄마카드"
        ref={nickName}
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
