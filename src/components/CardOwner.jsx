import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import InputContainer from '../styles/InputContainer';
import CardContext from '../CardContext';
import validator from '../validations/validator';
import ErrorMessage from '../styles/ErrorMessage';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const NameLength = styled.p`
  margin: 0;
  letter-spacing: -0.05em;
  font-size: 12px;
  color: ${(props) => props.color};
`;

const InputBasicLeft = styled(InputBasic)`
  text-align: left;
  padding-left: 30px;
`;

export default function CardOwner() {
  const { cardOwner, cardOwnerErrorMessage, dispatch } = useContext(CardContext);

  const onChangeInput = (e) => {
    dispatch({ type: 'SET_CARD_OWNER', value: e.target.value });
  };

  useEffect(() => {
    try {
      validator.checkCardOwner(cardOwner);
      dispatch({
        type: 'SET_CARD_OWNER_ERROR_MESSAGE',
        errorMessage: '',
      });
    } catch ({ message }) {
      dispatch({
        type: 'SET_CARD_OWNER_ERROR_MESSAGE',
        errorMessage: message,
      });
    }
  }, [cardOwner]);

  const nameLengthColor = () => (cardOwner.length > 30 ? '#E24141' : '#525252');

  return (
    <Container>
      <TitleWrapper>
        <InputTitle marginBottom="0px">카드소유자 이름(선택)</InputTitle>
        <NameLength color={nameLengthColor()}>
          <span>{cardOwner.length}</span>/<span>30</span>
        </NameLength>
      </TitleWrapper>
      <InputBox>
        <InputContainer>
          <InputBasicLeft type="text" maxLength="30" onChange={onChangeInput} />
        </InputContainer>
      </InputBox>
      <ErrorMessage>{cardOwnerErrorMessage}</ErrorMessage>
    </Container>
  );
}
