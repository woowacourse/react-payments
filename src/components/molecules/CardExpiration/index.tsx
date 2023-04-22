import React from 'react';
import styled from 'styled-components';

import CardInput from '../../atomics/CardInput';
import ErrorMessage from '../../atomics/ErrorMessage';
import Message from '../../atomics/Message';
import { VStack } from '../../layout/flexbox';

/* component */
const CardExpiration: React.FC = () => {
  return (
    <StyledCardExpirationWrapper>
      <StyledCardLabel>
        <Message type="label">만료일</Message>
        <CardInput
          type="text"
          placeholder="MM / YY"
          width="150px"
          minLength={7}
          maxLength={7}
          center={true}
        />
      </StyledCardLabel>
      <ErrorMessage isError={true}>만료가 되지 않은 카드 만료일만 입력이 가능합니다!!</ErrorMessage>
    </StyledCardExpirationWrapper>
  );
};

/* styles */
const StyledCardLabel = styled.label`
  ${VStack}

  span + input {
    margin-top: 8px;
  }
`;

const StyledCardExpirationWrapper = styled.article`
  ${VStack}

  label + span {
    margin-top: 8px;
  }

  margin-bottom: 8px;
`;

export default CardExpiration;
