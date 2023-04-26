import React from 'react';
import { useCardRegisterContext } from '../../../../context/CardRegisterContext';
import { Password } from '../../../../types/card.type';
import { useCardPassword } from '../../../../hooks/card/card';

import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import * as Styled from './CardPasswordInput.styles';

export default function CardPasswordInput() {
  const { cardRegisterInfo, handleCardInfo } = useCardRegisterContext();
  const { defaultConditions } = useCardPassword();

  if (!cardRegisterInfo) {
    return null;
  }

  const { password } = cardRegisterInfo;

  const onChangeValue: <T extends keyof Password>(key: T, value: Password[T]) => void = (key, value) => {
    handleCardInfo('password', {
      ...password,
      [key]: value,
    });
  };

  return (
    <Styled.FieldSet>
      <Styled.Legend>카드 비밀번호</Styled.Legend>
      <Flex>
        <Input>
          <Input.Field
            name='passwordFirstDigit'
            id='passwordFirstDigit'
            value={password['passwordFirstDigit']}
            onChange={({ target: { value } }) => onChangeValue('passwordFirstDigit', value)}
            {...defaultConditions}
          >
            <Styled.Input />
          </Input.Field>
        </Input>
        <Input>
          <Input.Field
            name='passwordFirstDigit'
            id='passwordFirstDigit'
            value={password['passwordSecondDigit']}
            onChange={({ target: { value } }) => onChangeValue('passwordSecondDigit', value)}
            {...defaultConditions}
          >
            <Styled.Input />
          </Input.Field>
        </Input>
        <Styled.Input type='password' value='0' disabled />
        <Styled.Input type='password' value='0' disabled />
      </Flex>
    </Styled.FieldSet>
  );
}
