import React from 'react';
import { useFormContext } from '../../../hooks/useForm/useFormContext';
import PositiveNumberInput from '../../shared/PositiveNumberInput';
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
          {...register(`password-${position}`, { maxLength: { value: 1 } })}
        />
      )}
    </div>
  );
}
CardPasswordInput.displayName = 'CardPasswordInput';

export default CardPasswordInput;
