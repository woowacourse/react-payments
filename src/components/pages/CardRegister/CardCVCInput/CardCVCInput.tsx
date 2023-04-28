import React, { InputHTMLAttributes } from 'react';
import { useCardCVC } from '../../../../hooks/card/card';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import * as Styled from './CardCVCInput.styles';
import { StyledCardRegister } from '../@common/CardRegister.styles';
import { REGEX } from '../../../../utils/validation';

export default function CardCVCInput() {
  const { error, cvc, onChange, onBlur } = useCardCVC();

  return (
    <Flex dir="column" onBlur={onBlur}>
      <Input>
        <Input.Label asChild>
          <StyledCardRegister.Label>보안코드(CVC/CVV)</StyledCardRegister.Label>
        </Input.Label>
        <Flex align="center">
          <Styled.InputBackground>
            <Input.Field name="cvc" id="cvc" value={cvc} onChange={onChange} {...defaultAttr}>
              <Styled.Input masking />
            </Input.Field>
          </Styled.InputBackground>
          <Styled.Info type="button">?</Styled.Info>
        </Flex>
      </Input>
      <StyledCardRegister.Error>{error}</StyledCardRegister.Error>
    </Flex>
  );
}

const defaultAttr: InputHTMLAttributes<HTMLInputElement> & { asChild: boolean } = {
  pattern: REGEX.THREE_DIGIT,
  maxLength: 3,
  asChild: true,
  required: true,
  inputMode: 'numeric',
};
