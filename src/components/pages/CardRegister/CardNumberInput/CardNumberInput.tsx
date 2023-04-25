import React, { InputHTMLAttributes } from 'react';
import { useCardNumber } from '../../../../hooks/card/card';
import { REGEX } from '../../../../utils/validation';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import { StyledCardRegister } from '../@common/CardRegister.styles';
import * as Styled from './CardNumberInput.styles';

export default function CardNumberInput() {
  const { cardNumber, onChangeByKey } = useCardNumber();

  return (
    <StyledCardRegister.FieldSet>
      <Flex dir="column" justify="start">
        <StyledCardRegister.Legend>카드 번호</StyledCardRegister.Legend>
        <StyledCardRegister.InputBackground>
          <Input>
            <Input.Field onChange={onChangeByKey('first')} value={cardNumber['first']} {...defaultAttr}>
              <Styled.Input />
            </Input.Field>
          </Input>
          <Styled.Divider show={Boolean(cardNumber['first'] || cardNumber['second'])}>-</Styled.Divider>
          <Input>
            <Input.Field value={cardNumber['second']} onChange={onChangeByKey('second')} {...defaultAttr}>
              <Styled.Input />
            </Input.Field>
          </Input>
          <Styled.Divider show={Boolean(cardNumber['second'] || cardNumber['third'])}>-</Styled.Divider>
          <Input>
            <Input.Field value={cardNumber['third']} onChange={onChangeByKey('third')} {...defaultAttr}>
              <Styled.Input masking />
            </Input.Field>
          </Input>
          <Styled.Divider show={Boolean(cardNumber['third'] || cardNumber['fourth'])}>-</Styled.Divider>
          <Input>
            <Input.Field value={cardNumber['fourth']} onChange={onChangeByKey('fourth')} {...defaultAttr}>
              <Styled.Input masking />
            </Input.Field>
          </Input>
        </StyledCardRegister.InputBackground>
      </Flex>
    </StyledCardRegister.FieldSet>
  );
}

const defaultAttr: InputHTMLAttributes<HTMLInputElement> & { asChild: boolean } = {
  pattern: REGEX.FOUR_DIGIT,
  maxLength: 4,
  required: true,
  inputMode: 'numeric',
  asChild: true,
};
