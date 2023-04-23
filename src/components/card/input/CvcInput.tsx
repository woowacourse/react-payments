import React from 'react';
import styled from 'styled-components';
import Input from '../../common/Input';
import { UseInputProps } from '../../../hooks/useInput';

interface CvcInputProps {
  cvc: UseInputProps;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ecebf1;
  height: 45px;
  border-radius: 7px;
  padding: 0 16px;
`;

export default function CvcInput({ cvc }: CvcInputProps) {
  return (
    <Wrapper>
      <Input
        type="password"
        textAlign="center"
        autoComplete="off"
        isNumber={true}
        maxLength={3}
        required
        id="cvc"
        tabIndex={7}
        {...cvc}
      />
    </Wrapper>
  );
}
