import React from 'react';
import { useCardRegisterContext } from '../../../../context/CardRegisterContext';
import { useCardExpirationDate } from '../../../../hooks/card/card';
import { ExpirationDate } from '../../../../types/card.type';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import * as Styled from './CardExpirationDateInput.styles';
import { ErrorMessage } from '../../../../pages/CardRegister/CardRegisterPage.styles';
import { CardInputProps } from '../../../../pages/CardRegister/CardRegisterPage';

export default function CardExpirationDateInput({ onBlur, isValid }: CardInputProps) {
  const { cardRegisterInfo, handleCardInfo } = useCardRegisterContext();
  const { monthConditions, yearConditions } = useCardExpirationDate();
  const errorMessage = '현재 날짜 이후의 올바른 유효일을 입력해주세요.';

  if (!cardRegisterInfo) {
    return null;
  }

  const { expirationDate } = cardRegisterInfo;

  const onChangeValue: <T extends keyof ExpirationDate>(key: T, value: ExpirationDate[T]) => void = (key, value) => {
    handleCardInfo('expirationDate', {
      ...expirationDate,
      [key]: value,
    });
  };

  return (
    <Styled.FieldSet>
      <Flex dir='column' justify='start'>
        <Styled.Legend>만료일</Styled.Legend>
        <Styled.InputBackground isValid={isValid}>
          <Input>
            <Input.Field name='month' value={expirationDate['month']} onChange={({ target: { value } }) => onChangeValue('month', value)} {...monthConditions}>
              <Styled.Input onBlur={onBlur} />
            </Input.Field>
          </Input>
          <Styled.Divider>/</Styled.Divider>
          <Input>
            <Input.Field name='year' value={expirationDate['year']} onChange={({ target: { value } }) => onChangeValue('year', value)} {...yearConditions}>
              <Styled.Input onBlur={onBlur} />
            </Input.Field>
          </Input>
        </Styled.InputBackground>
      </Flex>
      <ErrorMessage>{!isValid && errorMessage}</ErrorMessage>
    </Styled.FieldSet>
  );
}
