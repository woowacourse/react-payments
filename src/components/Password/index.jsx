import { useEffect } from 'react';
import useInputValue from '../../hooks/useInputValue';
import FieldSet from '../FieldSet';
import Input from '../Input';
import DotMark from '../DotMark';
import { checkPassword, checkNumberOnly } from '../../validation';
import * as styled from './index.styled';
import { useCardFormContext } from '../../context/card-form-context';

const Password = () => {
  const { dispatch } = useCardFormContext();
  const [firstPassword, isFirstPasswordError, onChangeFirstPassword] =
    useInputValue({
      isValidateInput: checkPassword,
      isInputAvailableValue: checkNumberOnly,
    });
  const [secondPassword, isSecondPasswordError, onChangeSecondPassword] =
    useInputValue({
      isValidateInput: checkPassword,
      isInputAvailableValue: checkNumberOnly,
    });

  useEffect(() => {
    if (
      firstPassword.length > 0 &&
      secondPassword.length > 0 &&
      !isFirstPasswordError &&
      !isSecondPasswordError
    ) {
      dispatch({ type: '' });
    }
  }, [
    firstPassword,
    secondPassword,
    isFirstPasswordError,
    isSecondPasswordError,
    dispatch,
  ]);

  return (
    <FieldSet
      id="password"
      description="카드 비밀번호"
      errorMessage="올바른 비밀번호를 입력해주세요."
      isError={isFirstPasswordError && isSecondPasswordError}
    >
      {
        <styled.Container>
          <Input
            type="password"
            id="firstPassword"
            scale="small"
            maxLength={1}
            value={firstPassword}
            onChange={onChangeFirstPassword}
          />
          <Input
            type="password"
            id="secondPassword"
            scale="small"
            maxLength={1}
            value={secondPassword}
            onChange={onChangeSecondPassword}
          />
          <DotMark />
          <DotMark />
        </styled.Container>
      }
    </FieldSet>
  );
};

export default Password;
