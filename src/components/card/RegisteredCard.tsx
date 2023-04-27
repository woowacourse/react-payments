import React, { FormEvent } from 'react';
import styled from 'styled-components';
import Card, { CardProps } from './Card';
import Input from '../common/Input';
import Button from '../common/Button';
import InputField from '../common/InputField';
import { UseInputProps } from '../../hooks/useInput';
import { InputValidate, formValidate } from '../../hooks/formValidate';
import { isOnlyKoreanAndEnglish } from '../../utils';
import Error from '../common/Error';

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
  margin-top: 124px;
  border-bottom: 1px solid black;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

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

    const cardTitleValue: InputValidate = {
      cardTitle: {
        data: [cardTitleInput],
        maxLength: 20,
        isRequired: false,
        validation: isOnlyKoreanAndEnglish,
        setError: cardTitle.setError,
        errorMessage: '카드 별칭은 한글 혹은 영어로만 입력 가능합니다.',
      },
    };
    const cardTitleKey = ['cardTitle'] as const;

    const { validationResult, wrongInputs } = formValidate(
      cardTitleValue,
      cardTitleKey
    );

    if (!validationResult) {
      wrongInputs[0].focus();
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
              required
              autoComplete="off"
              maxLength={20}
              placeholder="카드 별칭을 입력해주세요."
            />
          </InputField>
        </InputWrapper>
        {cardTitle.error && <Error text={cardTitle.error} />}
        <ButtonWrapper>
          <Button text="확인" />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
