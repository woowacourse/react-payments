import React from 'react';
import styled from 'styled-components';

import { useInputError } from '../../../hooks/useInputError';
import { changeCardPWD } from '../../../store/action';

import Input from '../../atomics/Input';
import Message from '../../atomics/Message';
import { useCardFocusRefs, useCardPaymentDispatch } from '../../context/CardPaymentContext';

import { Stack, VStack } from '../../layout/flexbox';

/* component */
const CardPWD: React.FC = () => {
  const inputRefs = useCardFocusRefs();
  const [isError1, handleError1] = useInputError();
  const [isError2, handleError2] = useInputError();
  const dispatch = useCardPaymentDispatch();

  const handleChange =
    (id: number, handleError: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleError(e);
      dispatch(changeCardPWD(id, e.target.value));
    };

  return (
    <StyledCardPWDWrapper>
      <StyledCardLabel>
        <Message fontWeight={500} fontSize="12px" color="#525252" lineHeight="14px">
          카드 비밀번호
        </Message>
        <StyledCardInputWrapper>
          <Input
            id={7}
            type="text"
            variant="underline"
            pattern="[0-9]{1}"
            width="40px"
            minLength={1}
            maxLength={1}
            center={true}
            isValid={!isError1}
            ref={(el: HTMLInputElement) => (inputRefs.current[8] = el)}
            onChange={handleChange(0, handleError1)}
          />
          <Input
            id={8}
            type="text"
            variant="underline"
            pattern="[0-9]{1}"
            width="40px"
            minLength={1}
            maxLength={1}
            center={true}
            isValid={!isError2}
            ref={(el: HTMLInputElement) => (inputRefs.current[9] = el)}
            onChange={handleChange(1, handleError2)}
          />
          <StyledDotWrapper>
            <StyledDot />
          </StyledDotWrapper>
          <StyledDotWrapper>
            <StyledDot />
          </StyledDotWrapper>
        </StyledCardInputWrapper>
      </StyledCardLabel>
      {(isError1 || isError2) && (
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
