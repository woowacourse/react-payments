import React from 'react';
import styled from 'styled-components';

import CardInput from '../../atomics/CardInput';
import ErrorMessage from '../../atomics/ErrorMessage';
import Message from '../../atomics/Message';

import { Stack, VStack } from '../../layout/flexbox';

/* component */
const CardPWD: React.FC = () => {
  return (
    <StyledCardPWDWrapper>
      <StyledCardLabel>
        <Message type="label">카드 비밀번호</Message>
        <StyledCardInputWrapper>
          <CardInput type="text" width="40px" minLength={1} maxLength={1} center={true} />
          <CardInput type="text" width="40px" minLength={1} maxLength={1} center={true} />
          <StyledDotWrapper>
            <StyledDot />
          </StyledDotWrapper>
          <StyledDotWrapper>
            <StyledDot />
          </StyledDotWrapper>
        </StyledCardInputWrapper>
      </StyledCardLabel>
      <ErrorMessage isError={true}>카드 앞 두 자리 숫자를 입력해주세요!!</ErrorMessage>
    </StyledCardPWDWrapper>
  );
};

/* styles */
const StyledCardLabel = styled.label`
  ${VStack}

  span + p {
    margin-top: 8px;
  }
`;

const StyledCardInputWrapper = styled.p`
  ${Stack}

  input + input {
    margin-left: 12px;
  }
`;

const StyledDotWrapper = styled.div`
  margin-left: 8px;
  width: 40px;
  height: 40px;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDot = styled.div`
  width: 5px;
  height: 5px;

  border-radius: 50%;
  background-color: black;
`;

const StyledCardPWDWrapper = styled.article`
  ${VStack}

  label + span {
    margin-top: 8px;
  }

  margin-bottom: 8px;
`;

export default CardPWD;
