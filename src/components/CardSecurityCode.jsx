import React from 'react';
import ErrorMessage from './common/ErrorMessage';
import { InputContainer, Span, Label, InputWrapper } from './common/styled';
import QuestionContainer from './common/QuestionIcon';
import Input from './common/Input';

const CVC_EXPLANATION = `CVC번호는 카드뒷면의 7자리 숫자 중 뒷 3자리입니다.`;

function CardSecurityCode({ errorMessage, cardCode, updateCardCode }) {
  const handleInputChange = ({ target }) => {
    updateCardCode(target);
  };

  return (
    <InputContainer position="relative" width="40%">
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
            />
          </Span>
        </InputWrapper>
        <QuestionContainer>{CVC_EXPLANATION}</QuestionContainer>
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export default CardSecurityCode;
