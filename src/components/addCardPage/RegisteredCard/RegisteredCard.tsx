import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { type UseInputProps } from '../../../hooks/useInput';
import { colors } from '../../../styles/theme';
import { formValidate } from '../../../utils/formValidate';
import { Button } from '../../common/Button';
import { Card } from '../../common/Card';
import { type CardProps } from '../../common/Card/Card';
import { Error } from '../../common/Error';
import { Input } from '../../common/Input';
import { InputField } from '../../common/InputField';

interface RegisteredCardProps extends CardProps {
  cardTitleInformation: UseInputProps;
  createCard: () => void;
}

export default function RegisteredCard({
  cardTitleInformation,
  createCard,
  ...rest
}: RegisteredCardProps) {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 유효성 검사를 진행합니다
    const { validationResult } = formValidate({ cardTitleInformation });

    if (!validationResult) {
      return;
    }

    createCard();
  };

  return (
    <Wrapper>
      <FinishMessage>카드등록이 완료되었습니다.</FinishMessage>
      <Card {...rest} />
      <form onSubmit={onSubmit}>
        <InputWrapper>
          <InputField
            text="카드 별칭"
            inputLength={`${cardTitleInformation.value.length}/20`}
          >
            <Input
              autoFocus
              {...cardTitleInformation}
              type="text"
              bgColor={colors.white}
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
      </form>
      {cardTitleInformation.error && (
        <Error text={cardTitleInformation.error} />
      )}
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

const FinishMessage = styled.h2`
  margin-bottom: 36px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
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
