import React from 'react';
import styled from 'styled-components';

import CardInput from '../../atomics/CardInput';
import CardMessage from '../../atomics/Message';
import ErrorMessage from '../../atomics/ErrorMessage';

import { VStack } from '../../layout/flexbox';

/* component */
const CardCVC: React.FC = () => {
  return (
    <StyledCardCVCWrapper>
      <StyledCardLabel>
        <CardMessage fontWeight={500} fontSize="12px" color="#525252" lineHeight="14px">
          보안 코드(CVC/CVV)
        </CardMessage>
        <CardInput type="password" width="75px" minLength={3} maxLength={3} center={true} />
      </StyledCardLabel>
      <ErrorMessage isError={true}>3자리 숫자를 입력하세요!!</ErrorMessage>
    </StyledCardCVCWrapper>
  );
};

/* styles */
const StyledCardLabel = styled.label`
  ${VStack}

  span + input {
    margin-top: 8px;
  }
`;

const StyledCardCVCWrapper = styled.article`
  ${VStack}

  label + span {
    margin-top: 8px;
  }

  margin-bottom: 8px;
`;

export default CardCVC;
