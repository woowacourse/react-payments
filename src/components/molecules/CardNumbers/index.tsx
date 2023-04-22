import React from 'react';
import styled from 'styled-components';

import CardInput from '../../atomics/CardInput';
import CardInputMessage from '../../atomics/CardInputMessage';

import { SBetweenStack, VStack } from '../../layout/flexbox';

/* component */
const CardNumbers: React.FC = () => {
  return (
    <StyledCardNumbersWrapper>
      <StyledCardLabel>
        <CardInputMessage type="title">카드 번호</CardInputMessage>
        <StyledCardInputWrapper>
          {Array(4)
            .fill(0)
            .map(() => (
              <CardInput type="text" width="75px" minLength={4} maxLength={4} center={true} />
            ))}
        </StyledCardInputWrapper>
      </StyledCardLabel>
      <CardInputMessage type="error">총 16자리 카드 번호를 입력해주세요!!</CardInputMessage>
    </StyledCardNumbersWrapper>
  );
};

/* styles */
const StyledCardLabel = styled.label`
  ${VStack}

  span + input {
    margin-top: 8px;
  }
`;

const StyledCardNumbersWrapper = styled.article`
  ${VStack}

  label + span {
    margin-top: 8px;
  }
`;

const StyledCardInputWrapper = styled.span`
  ${SBetweenStack}

  width: 350px;
  height: 45px;

  background-color: #ecebf1;

  input + input {
    margin-left: 12px;
  }
`;

export default CardNumbers;
