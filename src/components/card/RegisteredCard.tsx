import React from 'react';
import styled from 'styled-components';
import Card, { CardProps } from './Card';
import Input from '../common/Input';
import Button from '../common/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 130px 48px 48px 0;
`;

const FinishMessage = styled.h2`
  margin-bottom: 36px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #383838;
`;

const InputWrapper = styled.div`
  margin-top: 124px;
  border-bottom: 1px solid black;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

interface RegistredCardProps extends CardProps {}

export default function RegisteredCard({ ...rest }: RegistredCardProps) {
  return (
    <Wrapper>
      <FinishMessage>카드등록이 완료되었습니다.</FinishMessage>
      <Card {...rest} />
      <InputWrapper>
        <Input
          type="text"
          bgColor="#fff"
          textAlign="center"
          placeholder="카드 별칭을 입력해주세요."
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button text="확인" />
      </ButtonWrapper>
    </Wrapper>
  );
}
