import React, { useContext } from 'react';
import styled from 'styled-components';

import * as S from '../styles.js';
import Wrapper from './Wrapper';
import Circle from './Circle';
import CardContext from '../CardContext';
import ErrorMessage from './ErrorMessage';
import validator from '../validations/validator';

const ExtendedInputBox = styled(S.InputBox)`
  width: 220px;
  justify-content: space-between;
`;

export default function CardPassword({ color }) {
  const { cardPassword, cardPasswordErrorMessage, dispatch } = useContext(CardContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: 'SET_CARD_PASSWORD', value: e.target.value, index });
  };

  return (
    <S.Container>
      <S.InputTitle>카드 비밀번호</S.InputTitle>
      <ExtendedInputBox>
        <S.InputBasic
          type="password"
          width="43px"
          maxLength="1"
          color={color}
          value={cardPassword[0]}
          onChange={onChangeInput(0)}
        />
        <S.InputBasic
          type="password"
          width="43px"
          maxLength="1"
          color={color}
          value={cardPassword[1]}
          onChange={onChangeInput(1)}
        />
        <Wrapper>
          <Circle size="5px" color={color} />
        </Wrapper>
        <Wrapper>
          <Circle size="5px" color={color} />
        </Wrapper>
      </ExtendedInputBox>
      <ErrorMessage
        value={cardPassword}
        validate={validator.checkCardPassword}
        type="SET_CARD_PASSWORD_ERROR_MESSAGE"
      >
        {cardPasswordErrorMessage}
      </ErrorMessage>
    </S.Container>
  );
}
