import React from 'react';
import styled from 'styled-components';

import InputContainer from '../styles/InputContainer';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const NameLength = styled.p`
  margin: 0;
  letter-spacing: -0.05em;
  font-size: 12px;
  color: #525252;
`;

export default function CardOwner() {
  return (
    <InputContainer>
      <TitleWrapper>
        <InputTitle marginBottom="0px">카드소유자 이름(선택)</InputTitle>
        <NameLength>
          <span>0</span>/<span>30</span>
        </NameLength>
      </TitleWrapper>
      <InputBox>
        <InputBasic type="text" maxLength="30" />
      </InputBox>
    </InputContainer>
  );
}
