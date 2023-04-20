import React from 'react';
import { useCardRegisterContext } from '../../../../context/CardRegisterContext';
import { CardRegisterInfo } from '../../../../types/card.type';
import { useCardCVC } from '../../../../hooks/card/card';

import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import * as Styled from './CardCVCInput.styles';

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
    <Styled.Root>
      <Input>
        <Input.Label asChild>
          <Styled.Label>보안코드(CVC/CVV)</Styled.Label>
        </Input.Label>
        <Flex align="center">
          <Styled.InputBackground>
            <Input.Field
              name="cvc"
              id="cvc"
              value={cvc}
              onChange={({ target: { value } }) => onChangeValue(value)}
              {...defaultConditions}>
              <Styled.Input />
            </Input.Field>
          </Styled.InputBackground>
          <Styled.Info>?</Styled.Info>
        </Flex>
      </Input>
    </Styled.Root>
  );
}
