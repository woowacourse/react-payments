import React, { useContext } from 'react';
import styled from 'styled-components';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import InputContainer from '../styles/InputContainer';
import CardContext from '../CardContext';
import validator from '../validations/validator';
import ErrorMessage from './ErrorMessage';

import CARD_COMPANIES from '../constants';

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
  const { cardOwner, cardOwnerErrorMessage, cardCompanyIndex, dispatch } = useContext(CardContext);

  const onChangeInput = (e) => {
    dispatch({ type: 'SET_CARD_OWNER', value: e.target.value });
  };

  const nameLengthColor = () => (cardOwner.length > 30 ? '#E24141' : '#525252');

  const cardColor = cardCompanyIndex === -1 ? false : CARD_COMPANIES[cardCompanyIndex].COLOR;

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
          <InputBasicLeft
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            type="text"
            maxLength="30"
            color={cardColor}
            onChange={onChangeInput}
          />
        </InputContainer>
      </InputBox>
      <ErrorMessage
        value={cardOwner}
        validate={validator.checkCardOwner}
        type="SET_CARD_OWNER_ERROR_MESSAGE"
      >
        {cardOwnerErrorMessage}
      </ErrorMessage>
    </Container>
  );
}
