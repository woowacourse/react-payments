import React from 'react';
import { useCardName } from '../../../../hooks/card/card';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import { StyledCardRegister } from '../@common/CardRegister.styles';
import * as Styled from './CardNameInput.styles';

export default function CardNameInput() {
  const { holderName, defaultConditions, onChange } = useCardName();

  return (
    <Flex dir="column">
      <Input>
        <Flex justify="space-between">
          <Input.Label asChild>
            <StyledCardRegister.Label>카드소유자이름(선택)</StyledCardRegister.Label>
          </Input.Label>
          <Input.Limit limit={30}>
            {({ value, limit }) => (
              <span>
                {value.length}/{limit}
              </span>
            )}
          </Input.Limit>
        </Flex>
        <StyledCardRegister.InputBackground>
          <Input.Field name="name" id="name" value={holderName} onChange={onChange} {...defaultConditions}>
            <Styled.Input />
          </Input.Field>
        </StyledCardRegister.InputBackground>
      </Input>
    </Flex>
  );
}
