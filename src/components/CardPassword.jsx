import React from 'react';
import styled from 'styled-components';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import Wrapper from './Wrapper';
import Circle from './Circle';

const ExtendedInputBox = styled(InputBox)`
  width: 220px;
  justify-content: space-between;
`;

export default function CardPassword() {
  return (
    <Container>
      <InputTitle>카드 비밀번호</InputTitle>
      <ExtendedInputBox>
        <InputBasic width="43px" />
        <InputBasic width="43px" />
        <Wrapper>
          <Circle size="5px" color="#04C09E" />
        </Wrapper>
        <Wrapper>
          <Circle size="5px" color="#04C09E" />
        </Wrapper>
      </ExtendedInputBox>
    </Container>
  );
}
