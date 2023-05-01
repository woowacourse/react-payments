import React from 'react';
import { useCardRegisterContext } from '../../../../context/CardRegisterContext';
import { CardRegisterInfo } from '../../../../types/card.type';
import { useCardCVC } from '../../../../hooks/card/card';

import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import * as Styled from './CardCVCInput.styles';
import { CardInputProps } from '../../../../pages/CardRegister/CardRegisterPage';
import { ErrorMessage } from '../../../../pages/CardRegister/CardRegisterPage.styles';

export default function CardCVCInput({ isValid, onBlur }: CardInputProps) {
  const { cardRegisterInfo, handleCardInfo } = useCardRegisterContext();
  const { defaultConditions } = useCardCVC();
  const errorMessage = '카드에 기재된 cvc 번호를 올바르게 입력해주세요.';

  const onChangeValue = (value: CardRegisterInfo['cvc']) => {
    handleCardInfo('cvc', value);
  };

  if (!cardRegisterInfo) {
    return null;
  }

  const { cvc } = cardRegisterInfo;

  return (
    <Styled.Root>
      <Input>
        <Input.Label asChild>
          <Styled.Label>보안코드(CVC/CVV)</Styled.Label>
        </Input.Label>
        <Flex align='center'>
          <Styled.InputBackground isValid={isValid}>
            <Input.Field name='cvc' id='cvc' value={cvc} onChange={({ target: { value } }) => onChangeValue(value)} {...defaultConditions}>
              <Styled.Input onBlur={onBlur} />
            </Input.Field>
          </Styled.InputBackground>
          <Styled.Info>?</Styled.Info>
        </Flex>
      </Input>
      <ErrorMessage>{!isValid && errorMessage}</ErrorMessage>
    </Styled.Root>
  );
}
