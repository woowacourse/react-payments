import React from 'react';
import styled from 'styled-components';
import Input from '../../atomics/Input';

import Message from '../../atomics/Message';

import { VStack } from '../../layout/flexbox';

import { changeCardExpirationDate } from '../../../store/action';
import { useExpirationError } from '../../../hooks/useExpirationError';
import {
  useCardFocusRefs,
  useCardPaymentDispatch,
  useMoveFocus,
} from '../../context/CardPaymentContext';

/* component */
const CardExpiration: React.FC = () => {
  const inputRefs = useCardFocusRefs();
  const [{ isDateError, isMonthError, isYearError }, { handleMonthError, handleYearError }] =
    useExpirationError();
  const moveFocus = useMoveFocus();
  const dispatch = useCardPaymentDispatch();

  const handleChange = (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCardExpirationDate(id, e.target.value));
    moveFocus(e);

    if (id === 0) {
      handleMonthError(e);
      return;
    }

    handleYearError(e);
  };

  return (
    <StyledCardExpirationWrapper>
      <StyledCardLabel>
        <Message fontWeight={500} fontSize="12px" color="#525252" lineHeight="14px">
          만료일
        </Message>
        <StyledCardInputWrapper>
          <Input
            type="text"
            variant="underline"
            placeholder="MM"
            pattern="0[1-9]|1[012]"
            width="75px"
            minLength={2}
            maxLength={2}
            center={true}
            required={true}
            isValid={!isMonthError}
            data-form-id={4}
            ref={(el: HTMLInputElement) => (inputRefs.current[4] = el)}
            onChange={handleChange(0)}
          />
          <Input
            id={5}
            type="text"
            variant="underline"
            placeholder="YY"
            pattern="^2[3-9]{1}$|^[3-9]{1}[0-9]{1}$"
            width="75px"
            minLength={2}
            maxLength={2}
            center={true}
            required={true}
            isValid={!isYearError}
            data-form-id={5}
            ref={(el: HTMLInputElement) => (inputRefs.current[5] = el)}
            onChange={handleChange(1)}
          />
        </StyledCardInputWrapper>
      </StyledCardLabel>
      {(isDateError || isMonthError || isYearError) && (
        <Message fontWeight={500} fontSize="12px" color="red" lineHeight="14px">
          만료가 되지 않은 카드 만료일만 입력이 가능합니다!!
        </Message>
      )}
    </StyledCardExpirationWrapper>
  );
};

/* styles */
const StyledCardLabel = styled.label`
  ${VStack}

  span + div {
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

const StyledCardInputWrapper = styled.div`
  input + input {
    margin-left: 12px;
  }
`;

export default CardExpiration;
