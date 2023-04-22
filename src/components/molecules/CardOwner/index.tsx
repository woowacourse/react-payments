import React from 'react';
import styled from 'styled-components';

import CardInput from '../../atomics/CardInput';
import ErrorMessage from '../../atomics/ErrorMessage';
import Message from '../../atomics/Message';

import { SBetweenStack, VStack } from '../../layout/flexbox';

/* component */
const CardOwner: React.FC = () => {
  return (
    <StyledCardOwnerWrapper>
      <StyledCardLabel>
        <Message type="label">카드 소유자 이름(선택)</Message>
        <StyledCardInputWrapper>
          <CardInput
            type="text"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            width="250px"
            minLength={0}
            maxLength={30}
            center={false}
          />
        </StyledCardInputWrapper>
      </StyledCardLabel>
      <ErrorMessage isError={true}>30자 이하의 영어만 입력해주세요!!</ErrorMessage>
    </StyledCardOwnerWrapper>
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

const StyledCardOwnerWrapper = styled.article`
  ${VStack}

  label + span {
    margin-top: 8px;
  }

  margin-bottom: 8px;
`;

export default CardOwner;
