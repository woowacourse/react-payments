import React, { useContext } from 'react';
import styled from 'styled-components';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import InputContainer from '../styles/InputContainer';
import CardContext from '../CardContext';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const NameLength = styled.p`
  margin: 0;
  letter-spacing: -0.05em;
  font-size: 12px;
  color: ${(props) => props.color || '#525252'};
`;

export default function CardOwner() {
  const { cardOwner, dispatch } = useContext(CardContext);

  const onChangeInput = (e) => {
    dispatch({ type: 'SET_CARD_OWNER', value: e.target.value });
  };
  const nameLengthColor = () => cardOwner.length > 30 && '#E24141';

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
          <InputBasic type="text" maxLength="30" onChange={onChangeInput} />
        </InputContainer>
      </InputBox>
    </Container>
  );
}
