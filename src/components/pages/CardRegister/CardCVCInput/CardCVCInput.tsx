import React from 'react';
import { useCardCVC } from '../../../../hooks/card/card';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import * as Styled from './CardCVCInput.styles';
import { StyledCardRegister } from '../@common/CardRegister.styles';

export default function CardCVCInput() {
  const { cvc, defaultConditions, onChange } = useCardCVC();

  return (
    <Flex dir="column">
      <Input>
        <Input.Label asChild>
          <StyledCardRegister.Label>보안코드(CVC/CVV)</StyledCardRegister.Label>
        </Input.Label>
        <Flex align="center">
          <Styled.InputBackground>
            <Input.Field name="cvc" id="cvc" value={cvc} onChange={onChange} {...defaultConditions}>
              <Styled.Input masking />
            </Input.Field>
          </Styled.InputBackground>
          <Styled.Info type="button">?</Styled.Info>
        </Flex>
      </Input>
    </Flex>
  );
}
