import React, { useContext } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../common/ErrorMessage';
import { InputContainer, Span, Label, InputWrapper } from '../common/styled';
import QuestionContainer from '../common/QuestionIcon';
import Input from '../common/Input';
import { CardInfoDispatchContext } from '../../context';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CVC_EXPLANATION = `CVC번호는 카드뒷면의 7자리 숫자 중 뒷 3자리입니다.`;

function CardSecurityCode({ cardCode }) {
  const cardInfoDispatch = useContext(CardInfoDispatchContext);

  const handleInputChange = ({ target: { name, value } }) => {
    cardInfoDispatch({
      type: 'UPDATE_CARD_CODE',
      cardCode: {
        ...cardCode,
        [name]: value,
      },
    });
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
              />
            </Span>
          </InputWrapper>
        </div>
        <QuestionContainer>{CVC_EXPLANATION}</QuestionContainer>
      </Wrapper>
      {/* <ErrorMessage>{errorMessage}</ErrorMessage> */}
    </InputContainer>
  );
}

export default CardSecurityCode;
