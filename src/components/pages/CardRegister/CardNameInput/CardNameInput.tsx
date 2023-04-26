import React from 'react';
import { useCardRegisterContext } from '../../../../context/CardRegisterContext';
import { useCardName } from '../../../../hooks/card/card';
import { CardRegisterInfo } from '../../../../types/card.type';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import * as Styled from './CardNameInput.styles';

export default function CardNameInput() {
  const { cardRegisterInfo, handleCardInfo } = useCardRegisterContext();
  const { defaultConditions } = useCardName();

  if (!cardRegisterInfo) {
    return null;
  }

  const { holderName } = cardRegisterInfo;

  const onChangeValue = (value: CardRegisterInfo['holderName']) => {
    handleCardInfo('holderName', value);
  };

  return (
    <Flex dir='column'>
      <Input>
        <Flex justify='space-between'>
          <Input.Label asChild>
            <Styled.Label>카드소유자이름(선택)</Styled.Label>
          </Input.Label>
          <Input.Limit limit={30}>
            {({ value, limit }) => (
              <span>
                {value.length}/{limit}
              </span>
            )}
          </Input.Limit>
        </Flex>
        <Styled.InputBackground>
          <Input.Field
            name='name'
            id='name'
            value={holderName}
            onChange={({ target: { value } }) => {
              onChangeValue(value);
            }}
            {...defaultConditions}
          >
            <Styled.Input />
          </Input.Field>
        </Styled.InputBackground>
      </Input>
    </Flex>
  );
}
