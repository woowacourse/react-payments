import React, { InputHTMLAttributes } from 'react';
import { useCardExpirationDate } from '../../../../hooks/card/card';
import { REGEX } from '../../../../utils/validation';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import { StyledCardRegister } from '../@common/CardRegister.styles';
import * as Styled from './CardExpirationDateInput.styles';

export default function CardExpirationDateInput() {
  const { error, expirationDate, onChangeByKey, onBlur } = useCardExpirationDate();

  return (
    <StyledCardRegister.FieldSet onBlur={onBlur}>
      <Flex dir="column" justify="start">
        <StyledCardRegister.Legend>만료일</StyledCardRegister.Legend>
        <Styled.InputBackground>
          <Input>
            <Input.Field
              name="month"
              value={expirationDate['month']}
              onChange={onChangeByKey('month')}
              {...monthAttr}
            >
              <Styled.Input />
            </Input.Field>
          </Input>
          <Styled.Divider>/</Styled.Divider>
          <Input>
            <Input.Field
              name="year"
              value={expirationDate['year']}
              onChange={onChangeByKey('year')}
              {...yearAttr}
            >
              <Styled.Input />
            </Input.Field>
          </Input>
        </Styled.InputBackground>
      </Flex>
      <StyledCardRegister.Error>{error}</StyledCardRegister.Error>
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
