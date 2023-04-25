import React from 'react';
import { useCardRegisterContext } from '../../../../context/CardRegisterContext';
import { CardRegisterInfo } from '../../../../types/card.type';
import { useCardCVC } from '../../../../hooks/card/card';

import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import * as Styled from './CardCVCInput.styles';
import { StyledCardRegister } from '../@common/CardRegister.styles';

export default function CardCVCInput() {
  const {
    cardRegisterInfo: { cvc },
    handleCardInfo,
  } = useCardRegisterContext();
  const { defaultConditions } = useCardCVC();

  const onChangeValue = (value: CardRegisterInfo['cvc']) => {
    handleCardInfo('cvc', value);
  };

  return (
    <Flex dir="column">
      <Input>
        <Input.Label asChild>
          <StyledCardRegister.Label>보안코드(CVC/CVV)</StyledCardRegister.Label>
        </Input.Label>
        <Flex align="center">
          <Styled.InputBackground>
            <Input.Field
              name="cvc"
              id="cvc"
              value={cvc}
              onChange={({ target: { value } }) => onChangeValue(value)}
              {...defaultConditions}
            >
              <Styled.Input />
            </Input.Field>
          </Styled.InputBackground>
          <Styled.Info type="button">?</Styled.Info>
        </Flex>
      </Input>
    </Flex>
  );
}
