import React, { FormEvent } from 'react';
import styled from 'styled-components';
import Card, { CardProps } from './Card';
import Input from '../common/Input';
import Button from '../common/Button';
import InputField from '../common/InputField';
import { UseInputProps } from '../../hooks/useInput';
import Error from '../common/Error';
import { InputValuesInformationProps } from '../../hooks/createFormInputValue';
import { getFormValidateResult } from '../../hooks/getFormValidateResult';

interface RegistredCardProps extends CardProps {
  cardTitle: UseInputProps;
  createCard: () => void;
}

export default function RegisteredCard({
  cardTitle,
  createCard,
  ...rest
}: RegistredCardProps) {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { cardTitleInput } = event.currentTarget;

    const inputInformation: InputValuesInformationProps[] = [
      { ...cardTitle, element: cardTitleInput },
    ];

    const { validationResult } = getFormValidateResult(inputInformation);

    if (!validationResult) {
      return;
    }

    createCard();
  };

  return (
    <Wrapper>
      <FinishMessage>카드등록이 완료되었습니다.</FinishMessage>
      <Card {...rest} />
      <Form onSubmit={onSubmit}>
        <InputWrapper>
          <InputField
            text="카드 별칭"
            inputLength={`${cardTitle.value.length}/20`}
          >
            <Input
              {...cardTitle}
              type="text"
              bgColor="#fff"
              textAlign="center"
              enterKeyHint="done"
              required
              autoComplete="off"
              maxLength={20}
              placeholder="카드 별칭을 입력해주세요."
            />
          </InputField>
        </InputWrapper>
        <ButtonWrapper>
          <Button text="확인" />
        </ButtonWrapper>
      </Form>
      {cardTitle.error && <Error text={cardTitle.error} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 130px 0 0 0;
`;

const Form = styled.form``;

const FinishMessage = styled.h2`
  margin-bottom: 36px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #383838;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 124px;
  border-bottom: 1px solid black;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;
