import React, { InputHTMLAttributes } from 'react';
import { useCardPassword } from '../../../../hooks/card/card';
import { REGEX } from '../../../../utils/validation';
import Input from '../../../@common/Input/Input';
import { StyledCardRegister } from '../@common/CardRegister.styles';
import * as Styled from './CardPasswordInput.styles';

export default function CardPasswordInput() {
  const { password, onChangeByKey } = useCardPassword();

  return (
    <Styled.FieldSet>
      <StyledCardRegister.Legend>카드 비밀번호</StyledCardRegister.Legend>
      <Styled.InputBackground>
        <Input>
          <Input.Field
            value={password['passwordFirstDigit']}
            onChange={onChangeByKey('passwordFirstDigit')}
            {...defaultAttr}
          >
            <Styled.Input />
          </Input.Field>
        </Input>
        <Input>
          <Input.Field
            value={password['passwordSecondDigit']}
            onChange={onChangeByKey('passwordSecondDigit')}
            {...defaultAttr}
          >
            <Styled.Input />
          </Input.Field>
        </Input>
        <Styled.Input type="password" value="0" disabled />
        <Styled.Input type="password" value="0" disabled />
      </Styled.InputBackground>
    </Styled.FieldSet>
  );
}

const defaultAttr: InputHTMLAttributes<HTMLInputElement> & { asChild: boolean } = {
  pattern: REGEX.NUMBER,
  maxLength: 1,
  asChild: true,
  required: true,
  inputMode: 'numeric',
};
