import React from 'react';
import { useFormContext } from '../../../../../hooks/useForm/useFormContext';
import PositiveNumberInput from '../../common/PositiveNumberInput';
import { PasswordInput, passwordInputStyle } from './CardPasswordInput.styled';

type Props = {
  position: number;
  disabled?: boolean;
};

function CardPasswordInput(props: Props) {
  const { position, disabled } = props;
  const { register } = useFormContext();

  return (
    <div>
      {disabled ? (
        <PasswordInput disabled placeholder="•" />
      ) : (
        <PositiveNumberInput
          css={passwordInputStyle}
          {...register(`password-${position}`, {
            required: { value: true },
            pattern: { value: '[0-9]', message: '비밀번호를 입력해 주세요' },
            maxLength: { value: 1 },
          })}
        />
      )}
    </div>
  );
}
CardPasswordInput.displayName = 'CardPasswordInput';

export default CardPasswordInput;
