import React, { InputHTMLAttributes } from 'react';
import { useCardExpirationDate } from '../../../../hooks/card/card';
import { REGEX } from '../../../../utils/validation';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import { StyledCardRegister } from '../@common/CardRegister.styles';
import * as Styled from './CardExpirationDateInput.styles';

export default function CardExpirationDateInput() {
  const { expirationDate, onChangeByKey } = useCardExpirationDate();

  return (
    <StyledCardRegister.FieldSet>
      <Flex dir="column" justify="start">
        <StyledCardRegister.Legend>만료일</StyledCardRegister.Legend>
        <Styled.InputBackground>
          <Input>
            <Input.Field value={expirationDate['month']} onChange={onChangeByKey('month')} {...monthAttr}>
              <Styled.Input />
            </Input.Field>
          </Input>
          <Styled.Divider>/</Styled.Divider>
          <Input>
            <Input.Field value={expirationDate['year']} onChange={onChangeByKey('year')} {...yearAttr}>
              <Styled.Input />
            </Input.Field>
          </Input>
        </Styled.InputBackground>
      </Flex>
    </StyledCardRegister.FieldSet>
  );
}

const defaultAttr = {
  maxLength: 2,
  asChild: true,
  required: true,
  inputMode: 'numeric',
} as const;

const monthAttr: InputHTMLAttributes<HTMLInputElement> = {
  pattern: REGEX.MONTH,
  placeholder: 'MM',
  ...defaultAttr,
};

const yearAttr: InputHTMLAttributes<HTMLInputElement> = {
  pattern: REGEX.YEAR,
  placeholder: 'YY',
  ...defaultAttr,
};
