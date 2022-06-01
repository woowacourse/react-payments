import React from 'react';
import { useFormContext } from '../../../../../hooks/useForm/useFormContext';
import PositiveNumberInput from '../../common/PositiveNumberInput';
import Fieldset from '../Fieldset';
import { PasswordInput, passwordInputStyle } from './CardPassword.styled';

function CardPassword() {
  const { register } = useFormContext();

  return (
    <Fieldset>
      <Fieldset.Head>
        <label htmlFor="card-password">카드 비밀번호</label>
      </Fieldset.Head>
      <Fieldset.Content>
        <div css={{ display: 'flex' }}>
          <PositiveNumberInput
            id="card-password"
            css={passwordInputStyle}
            {...register(`password-1`, {
              required: { value: true },
              pattern: { value: '[0-9]', message: '비밀번호를 입력해 주세요' },
              maxLength: { value: 1 },
            })}
          />
          <PositiveNumberInput
            css={passwordInputStyle}
            {...register(`password-2`, {
              required: { value: true },
              pattern: { value: '[0-9]', message: '비밀번호를 입력해 주세요' },
              maxLength: { value: 1 },
            })}
          />
          <PasswordInput disabled placeholder="•" />
          <PasswordInput disabled placeholder="•" />
        </div>
      </Fieldset.Content>
    </Fieldset>
  );
}

export default CardPassword;
