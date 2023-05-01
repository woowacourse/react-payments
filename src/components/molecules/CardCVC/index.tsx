import React from 'react';
import styled from 'styled-components';

import Input from '../../atomics/Input';
import Message from '../../atomics/Message';

import { useInputError } from '../../../hooks/useInputError';
import { VStack } from '../../layout/flexbox';

import { changeCardCVCAction } from '../../../store/action';
import { useCardFocusRefs, useCardPaymentDispatch } from '../../context/CardPaymentContext';

/* component */
const CardCVC: React.FC = () => {
  const inputRefs = useCardFocusRefs();
  const [isError, handleError] = useInputError();
  const dispatch = useCardPaymentDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleError(e);
    dispatch(changeCardCVCAction(0, e.target.value));
  };

  return (
    <StyledCardCVCWrapper>
      <StyledCardLabel>
        <Message fontWeight={500} fontSize="12px" color="#525252" lineHeight="14px">
          보안 코드(CVC/CVV)
        </Message>
        <Input
          id={6}
          variant="underline"
          type="password"
          pattern="[0-9]{3}"
          isValid={!isError}
          width="75px"
          minLength={3}
          maxLength={3}
          center={true}
          required={true}
          ref={(el: HTMLInputElement) => (inputRefs.current[7] = el)}
          onChange={handleChange}
        />
      </StyledCardLabel>
      {isError && (
        <Message fontWeight={500} fontSize="12px" color="red" lineHeight="14px">
          3자리 숫자를 입력하세요!!
        </Message>
      )}
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
