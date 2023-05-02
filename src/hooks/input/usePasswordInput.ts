import { useState } from 'react';
import { isValidPassword } from '../../cardInputValidator';
import { isNumeric } from '../../utils/validator';
import { isEmptyInput, isFirst, isLast } from '../../utils';
import { ERROR, PASSWORD_SIZE } from '../../constants';
import { Password } from '../../types';

interface Props {
  allRef: React.RefObject<HTMLInputElement>[];
  password: Password;
  setPassword: (input: Password) => void;
}

export const usePasswordInput = ({ allRef, password, setPassword }: Props) => {
  const [passwordError, setPasswordError] = useState('');

  const handleBackspacePress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && isEmptyInput(password[index]) && !isFirst(index)) {
      e.preventDefault();
      allRef.at(index - 1)?.current?.focus();
    }
  };

  const handlePasswordInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = [...password];
    newPassword[index] = e.target.value;
    setPassword(newPassword);

    if (!isNumeric(e.target.value)) {
      setPasswordError(ERROR.IS_NOT_NUMBER);
      return;
    }

    setPasswordError('');

    if (!isLast(index, PASSWORD_SIZE) && !isEmptyInput(e.target.value)) {
      allRef.at(index + 1)?.current?.focus();
      return;
    }
  };

  const updatePasswordError = (e: React.FocusEvent<HTMLElement>) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    if (!(e.target instanceof HTMLInputElement)) return;

    const inputs = [...password.slice(0, -1), e.target.value];

    if (!isValidPassword(inputs)) {
      setPasswordError(ERROR.INVALID_PASSWORD);
      return;
    }

    setPasswordError('');
  };

  return { passwordError, updatePasswordError, handleBackspacePress, handlePasswordInputChange };
};
