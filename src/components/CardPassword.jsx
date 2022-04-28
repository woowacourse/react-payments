import React, { useContext } from 'react';
import styled from 'styled-components';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import Wrapper from './Wrapper';
import Circle from './Circle';
import CardContext from '../CardContext';
import ErrorMessage from './ErrorMessage';
import validator from '../validations/validator';

const ExtendedInputBox = styled(InputBox)`
  width: 220px;
  justify-content: space-between;
`;

export default function CardPassword() {
  const { cardPassword, cardPasswordErrorMessage, dispatch } = useContext(CardContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: 'SET_CARD_PASSWORD', value: e.target.value, index });
  };

  const validate = (value) => value.join('') && validator.checkCardPassword(value);

  return (
    <Container>
      <InputTitle>카드 비밀번호</InputTitle>
      <ExtendedInputBox>
        <InputBasic
          type="password"
          width="43px"
          maxLength="1"
          value={cardPassword[0]}
          onChange={onChangeInput(0)}
        />
        <InputBasic
          type="password"
          width="43px"
          maxLength="1"
          value={cardPassword[1]}
          onChange={onChangeInput(1)}
        />
        <Wrapper>
          <Circle size="5px" color="#04C09E" />
        </Wrapper>
        <Wrapper>
          <Circle size="5px" color="#04C09E" />
        </Wrapper>
      </ExtendedInputBox>
      <ErrorMessage value={cardPassword} validate={validate} type="SET_CARD_PASSWORD_ERROR_MESSAGE">
        {cardPasswordErrorMessage}
      </ErrorMessage>
    </Container>
  );
}
