import React from 'react';
import styled from 'styled-components';

import Input from '../../atomics/Input';
import Message from '../../atomics/Message';

import { useInputError } from '../../../hooks/useInputError';
import { SBetweenStack, VStack } from '../../layout/flexbox';
import { changeCardOwner } from '../../../store/action';
import {
  useCardFocusRefs,
  useCardPaymentDispatch,
  useCardPaymentState,
} from '../../context/CardPaymentContext';

/* component */
const CardOwner: React.FC = () => {
  const inputRefs = useCardFocusRefs();
  const state = useCardPaymentState();
  const [isError, handleError] = useInputError();
  const dispatch = useCardPaymentDispatch();

  const handleChange = (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleError(e);
    dispatch(changeCardOwner(id, e.target.value));
  };

  return (
    <StyledCardOwnerWrapper>
      <StyledCardLabel>
        <StyledCardOwnerInfoWrapper>
          <Message fontWeight={500} fontSize="12px" color="#525252" lineHeight="14px">
            카드 소유자 이름(선택)
          </Message>
          <Message fontWeight={500} fontSize="12px" lineHeight="14px" color="#525252">
            {state.cardOwner[0].length} / 30
          </Message>
        </StyledCardOwnerInfoWrapper>
        <Input
          type="text"
          variant="underline"
          pattern="^[a-zA-Z]*"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          width="100%"
          minLength={0}
          maxLength={30}
          center={false}
          isValid={!isError}
          date-form-id={6}
          ref={(el: HTMLInputElement) => (inputRefs.current[6] = el)}
          onChange={handleChange(0)}
        />
      </StyledCardLabel>
      {isError && (
        <Message fontWeight={500} fontSize="12px" color="red" lineHeight="14px">
          30자 이하의 영어만 입력해주세요!!
        </Message>
      )}
    </StyledCardOwnerWrapper>
  );
};

/* styles */
const StyledCardLabel = styled.label`
  ${VStack}

  span + div {
    margin-top: 8px;
  }
`;

const StyledCardOwnerInfoWrapper = styled.div`
  ${SBetweenStack}
`;

const StyledCardOwnerWrapper = styled.article`
  ${VStack}

  label + span {
    margin-top: 8px;
  }

  margin-bottom: 8px;
`;

export default CardOwner;
