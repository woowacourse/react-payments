import React from 'react';
import { useCardRegisterContext } from '../../../../context/CardRegisterContext';
import { useCardExpirationDate } from '../../../../hooks/card/card';
import { ExpirationDate } from '../../../../types/card.type';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import { StyledCardRegister } from '../@common/CardRegister.styles';
import * as Styled from './CardExpirationDateInput.styles';

export default function CardExpirationDateInput() {
  const {
    cardRegisterInfo: { expirationDate },
    handleCardInfo,
  } = useCardRegisterContext();
  const { monthConditions, yearConditions } = useCardExpirationDate();

  const onChangeValue: <T extends keyof ExpirationDate>(key: T, value: ExpirationDate[T]) => void = (
    key,
    value
  ) => {
    handleCardInfo('expirationDate', {
      ...expirationDate,
      [key]: value,
    });
  };

  return (
    <StyledCardRegister.FieldSet>
      <Flex dir="column" justify="start">
        <StyledCardRegister.Legend>만료일</StyledCardRegister.Legend>
        <Styled.InputBackground>
          <Input>
            <Input.Field
              name="month"
              value={expirationDate['month']}
              onChange={({ target: { value } }) => {
                onChangeValue('month', value);
              }}
              {...monthConditions}
            >
              <Styled.Input />
            </Input.Field>
          </Input>
          <Styled.Divider>/</Styled.Divider>
          <Input>
            <Input.Field
              name="year"
              value={expirationDate['year']}
              onChange={({ target: { value } }) => onChangeValue('year', value)}
              {...yearConditions}
            >
              <Styled.Input />
            </Input.Field>
          </Input>
        </Styled.InputBackground>
      </Flex>
    </StyledCardRegister.FieldSet>
  );
}
