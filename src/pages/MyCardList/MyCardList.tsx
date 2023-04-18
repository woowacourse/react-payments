import React, { useState } from 'react';
import Input from '../../components/@common/Input/Input';
import styled from 'styled-components';
export default function MyCardList() {
  return (
    <Input>
      <Input.Field asChild>
        <StyledInput />
      </Input.Field>
      <Input.Limit limit={30} />
      <Input.Label>카드번호</Input.Label>
    </Input>
  );
}

const StyledInput = styled.input`
  /* background: gray; */
`;
