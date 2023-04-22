import React from 'react';
import styled from 'styled-components';

import CardInput from '../../atomics/CardInput';
import ErrorMessage from '../../atomics/ErrorMessage';
import Message from '../../atomics/Message';

import { SBetweenStack, VStack } from '../../layout/flexbox';

/* component */
const CardNumbers: React.FC = () => {
  return (
    <StyledCardNumbersWrapper>
      <StyledCardLabel>
        <Message type="label">카드 번호</Message>
        <StyledCardInputWrapper>
          {Array(4)
            .fill(0)
            .map(() => (
              <CardInput type="text" width="75px" minLength={4} maxLength={4} center={true} />
            ))}
        </StyledCardInputWrapper>
      </StyledCardLabel>
      <ErrorMessage isError={true}>총 16자리 카드 번호를 입력해주세요!!</ErrorMessage>
    </StyledCardNumbersWrapper>
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
  ${SBetweenStack}

  width: 350px;
  height: 45px;

  background-color: #ecebf1;

  input + input {
    margin-left: 12px;
  }
`;

const StyledCardNumbersWrapper = styled.article`
  ${VStack}

  label + span {
    margin-top: 8px;
  }

  margin-bottom: 8px;
`;

export default CardNumbers;
