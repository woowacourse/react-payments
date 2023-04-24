import React from 'react';
import styled from 'styled-components';
import Input from '../../common/Input';
import { UseInputProps } from '../../../hooks/useInput';
import Error from '../../common/Error';

export interface PasswordInputProps {
  firstPassword: UseInputProps;
  secondPassword: UseInputProps;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  border-radius: 7px;
  align-items: center;
  gap: 7px;
`;

const GrayWrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px;
  width: 45px;
  height: 45px;
  border-radius: 7px;
  background-color: #ecebf1;
`;

const WhiteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: solid 1px #ecebf1;
  border-radius: 7px;
  cursor: not-allowed;
`;

export default function PasswordInput({
  firstPassword,
  secondPassword,
}: PasswordInputProps) {
  return (
    <Container>
      <Wrapper>
        <GrayWrapper>
          <Input
            isNumber={true}
            maxLength={1}
            id="password"
            required
            type="password"
            placeholder="0"
            textAlign="center"
            autoComplete="off"
            tabIndex={8}
            {...firstPassword}
          />
        </GrayWrapper>
        <GrayWrapper>
          <Input
            isNumber={true}
            maxLength={1}
            placeholder="0"
            required
            type="password"
            textAlign="center"
            tabIndex={9}
            autoComplete="off"
            {...secondPassword}
          />
        </GrayWrapper>
        <WhiteWrapper>•</WhiteWrapper>
        <WhiteWrapper>•</WhiteWrapper>
      </Wrapper>
      {firstPassword.error && <Error text={firstPassword.error} />}
    </Container>
  );
}
