import React from 'react';
import styled from 'styled-components';

import { useInputError } from '../../../hooks/useInputError';
import { changeNumbersAction } from '../../../store/action';

import Input from '../../atomics/Input';
import Message from '../../atomics/Message';
import {
  useCardFocusRefs,
  useCardPaymentDispatch,
  useMoveFocus,
} from '../../context/CardPaymentContext';

import { VStack } from '../../layout/flexbox';

/* component */
const CardNumbers: React.FC = () => {
  const inputRefs = useCardFocusRefs();
  const moveFocus = useMoveFocus();
  const errorMap = {
    first: useInputError(),
    second: useInputError(),
    third: useInputError(),
    fourth: useInputError(),
  };
  const dispatch = useCardPaymentDispatch();
  const isError =
    errorMap.first[0] || errorMap.second[0] || errorMap.third[0] || errorMap.fourth[0];

  const handleChange =
    (id: number, handleError: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleError(e);
      dispatch(changeNumbersAction(id, e.target.value));
      moveFocus(e);
    };

  return (
    <StyledCardNumbersWrapper>
      <StyledCardLabel>
        <Message fontWeight={500} fontSize="12px" color="#525252" lineHeight="14px">
          카드 번호
        </Message>
        <StyledCardInputWrapper>
          {Object.values(errorMap).map(([error, handleError], idx) => (
            <Input
              key={idx}
              type={idx < 2 ? 'text' : 'password'}
              variant="underline"
              pattern="[0-9]{4}"
              width="75px"
              minLength={4}
              maxLength={4}
              center={true}
              required={true}
              isValid={!error}
              data-form-id={idx}
              ref={(el: HTMLInputElement) => (inputRefs.current[idx] = el)}
              onChange={handleChange(idx, handleError)}
            />
          ))}
        </StyledCardInputWrapper>
      </StyledCardLabel>
      {isError && (
        <Message fontWeight={500} fontSize="12px" color="red" lineHeight="14px">
          총 16자리 카드 번호를 입력해주세요!!
        </Message>
      )}
    </StyledCardNumbersWrapper>
  );
};

/* styles */
const StyledCardLabel = styled.label`
  ${VStack}

  span + div {
    margin-top: 8px;
  }
`;

const StyledCardInputWrapper = styled.div`
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
