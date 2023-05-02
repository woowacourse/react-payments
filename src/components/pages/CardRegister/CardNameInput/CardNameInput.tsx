import React from 'react';
import { useCardRegisterContext } from '../../../../context/CardRegisterContext';
import { useCardName } from '../../../../hooks/card/card';
import { CardRegisterInfo } from '../../../../types/card.type';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import * as Styled from './CardNameInput.styles';
import { CardInputProps } from '../../../../pages/CardRegister/CardRegisterPage';
import { ErrorMessage } from '../../../../pages/CardRegister/CardRegisterPage.styles';

export default function CardNameInput({ onBlur, isValid }: CardInputProps) {
  const { cardRegisterInfo, handleCardInfo } = useCardRegisterContext();
  const { defaultConditions } = useCardName();
  const errorMessage = '카드에 기재된 이름을 올바르게 입력해주세요.';

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
        <Styled.InputBackground isValid={isValid}>
          <Input.Field
            name='name'
            id='name'
            value={holderName}
            onChange={({ target: { value } }) => {
              onChangeValue(value);
            }}
            {...defaultConditions}
          >
            <Styled.Input onBlur={onBlur} />
          </Input.Field>
        </Styled.InputBackground>
      </Input>
      <ErrorMessage>{!isValid && errorMessage}</ErrorMessage>
    </Flex>
  );
}
