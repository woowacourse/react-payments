import React from 'react';
import { useCardExpirationDate } from '../../../../hooks/card/card';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import { StyledCardRegister } from '../@common/CardRegister.styles';
import * as Styled from './CardExpirationDateInput.styles';

export default function CardExpirationDateInput() {
  const { expirationDate, monthConditions, yearConditions, onChangeByKey } = useCardExpirationDate();

  return (
    <StyledCardRegister.FieldSet>
      <Flex dir="column" justify="start">
        <StyledCardRegister.Legend>만료일</StyledCardRegister.Legend>
        <Styled.InputBackground>
          <Input>
            <Input.Field
              value={expirationDate['month']}
              onChange={onChangeByKey('month')}
              {...monthConditions}
            >
              <Styled.Input />
            </Input.Field>
          </Input>
          <Styled.Divider>/</Styled.Divider>
          <Input>
            <Input.Field value={expirationDate['year']} onChange={onChangeByKey('year')} {...yearConditions}>
              <Styled.Input />
            </Input.Field>
          </Input>
        </Styled.InputBackground>
      </Flex>
    </StyledCardRegister.FieldSet>
  );
}
