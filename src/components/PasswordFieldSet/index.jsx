import { useEffect } from 'react';
import useInputValue from '../../hooks/useInputValue';
import FieldSet from '../FieldSet';
import Input from '../Input';
import { checkPassword, checkNumberOnly } from '../../validation';
import * as Styled from './index.styled';
import { ACTION, useCardFormContext } from '../../context/card-form-context';

const PasswordFieldSet = () => {
  const { dispatch, state } = useCardFormContext();
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
    const isError = isFirstPasswordError || isSecondPasswordError;
    if (!state.isPasswordError && isError)
      dispatch({ type: ACTION.PASSWORD_ERROR });
  }, [state, dispatch, isFirstPasswordError, isSecondPasswordError]);

  useEffect(() => {
    if (
      firstPassword.length <= 0 ||
      secondPassword.length <= 0 ||
      isFirstPasswordError ||
      isSecondPasswordError
    )
      return;

    dispatch({
      type: ACTION.PASSWORD,
      data: { firstPassword, secondPassword },
    });
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
        <Styled.Container>
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
          <Styled.DotContainer>•</Styled.DotContainer>
          <Styled.DotContainer>•</Styled.DotContainer>
        </Styled.Container>
      }
    </FieldSet>
  );
};

export default PasswordFieldSet;
