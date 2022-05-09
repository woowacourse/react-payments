import React from 'react';

import ErrorMessage from '../../common/ErrorMessage';
import { InputContainer, Span, Label, InputWrapper } from '../../common/styled';
import QuestionContainer from '../../common/QuestionIcon';
import Input from '../../common/Input';
import { Wrapper } from './style';

import useInputHandler from '../../../hooks/useInputHandler';
import { validateCardCode } from '../../../validator';

const CVC_EXPLANATION = `CVC번호는 카드뒷면의 7자리 숫자 중 뒷 3자리입니다.`;

function CardSecurityCode({ cardCode }) {
  const { errorMessage, updateInputState } = useInputHandler(validateCardCode, {
    type: 'UPDATE_CARD_CODE',
    key: 'cardCode',
    prevData: cardCode,
  });

  const handleInputChange = ({ target }) => {
    updateInputState(target);
  };

  return (
    <InputContainer>
      <Wrapper>
        <div>
          <Label>보안코드(CVC/CVV)</Label>
          <InputWrapper width="80%">
            <Span>
              <Input
                type="password"
                maxLength="3"
                onChange={handleInputChange}
                value={cardCode.cvc}
                name="cvc"
                required
                data-testid="cvc"
              />
            </Span>
          </InputWrapper>
        </div>
        <QuestionContainer>{CVC_EXPLANATION}</QuestionContainer>
      </Wrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export default CardSecurityCode;
