import React from 'react';
import styled from 'styled-components';

import { useInputError } from '../../../hooks/useInputError';
import { changeCardPWD } from '../../../store/action';

import Input from '../../atomics/Input';
import Message from '../../atomics/Message';
import {
  useCardFocusRefs,
  useCardPaymentDispatch,
  useMoveFocus,
} from '../../context/CardPaymentContext';

import { Stack, VStack } from '../../layout/flexbox';

/* component */
const CardPWD: React.FC = () => {
  const inputRefs = useCardFocusRefs();
  const [isErrorFirstPWD, handleErrorFirstPWD] = useInputError();
  const [isErrorSecondPWD, handleErrorSecondPWD] = useInputError();
  const moveFocus = useMoveFocus();
  const dispatch = useCardPaymentDispatch();

  const isError = isErrorFirstPWD || isErrorSecondPWD;

  const handleChange =
    (id: number, handleError: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleError(e);
      dispatch(changeCardPWD(id, e.target.value));
      moveFocus(e);
    };

  return (
    <StyledCardPWDWrapper>
      <StyledCardLabel>
        <Message fontWeight={500} fontSize="12px" color="#525252" lineHeight="14px">
          카드 비밀번호
        </Message>
        <StyledCardInputWrapper>
          <Input
            type="text"
            variant="underline"
            pattern="[0-9]{1}"
            width="40px"
            minLength={1}
            maxLength={1}
            center={true}
            isValid={!isErrorFirstPWD}
            data-form-id={8}
            ref={(el: HTMLInputElement) => (inputRefs.current[8] = el)}
            onChange={handleChange(0, handleErrorFirstPWD)}
          />
          <Input
            type="text"
            variant="underline"
            pattern="[0-9]{1}"
            width="40px"
            minLength={1}
            maxLength={1}
            center={true}
            isValid={!isErrorSecondPWD}
            data-form-id={9}
            ref={(el: HTMLInputElement) => (inputRefs.current[9] = el)}
            onChange={handleChange(1, handleErrorSecondPWD)}
          />
          <StyledDotWrapper>
            <StyledDot />
          </StyledDotWrapper>
          <StyledDotWrapper>
            <StyledDot />
          </StyledDotWrapper>
        </StyledCardInputWrapper>
      </StyledCardLabel>
      {isError && (
        <Message fontWeight={500} fontSize="12px" color="red" lineHeight="14px">
          카드 앞 두 자리 숫자를 입력해주세요!!
        </Message>
      )}
    </StyledCardPWDWrapper>
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
