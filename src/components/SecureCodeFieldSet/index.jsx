import { useEffect } from 'react';
import useInputValue from '../../hooks/useInputValue';
import FieldSet from '../FieldSet';
import Input from '../Input';
import AskMarkTooltip from '../AskMarkTooltip';
import { checkSecureCode, checkNumberOnly } from '../../validation';
import { ACTION, useCardFormContext } from '../../context/card-form-context';
import * as Styled from './index.styled';

const SecureCodeFieldSet = () => {
  const { dispatch, state } = useCardFormContext();
  const [secureCode, isSecureCodeError, onChangeSecureCode] = useInputValue({
    isValidateInput: checkSecureCode,
    isInputAvailableValue: checkNumberOnly,
  });

  useEffect(() => {
    if (!state.isSecureCodeError && isSecureCodeError)
      dispatch({ type: ACTION.SECURE_CODE_ERROR });
  }, [dispatch, state, isSecureCodeError]);

  useEffect(() => {
    if (secureCode.length <= 0 || isSecureCodeError) return;
    dispatch({ type: ACTION.SECURE_CODE, data: { secureCode } });
  }, [secureCode, isSecureCodeError, dispatch]);

  return (
    <FieldSet
      id="secureCode"
      description="보안코드(CVC/CVV)"
      errorMessage="유효한 보안코드를 입력해주세요"
      isError={isSecureCodeError}
    >
      {
        <Styled.Container>
          <Input
            id="secureCode"
            scale="medium"
            type="password"
            maxLength={3}
            value={secureCode}
            onChange={onChangeSecureCode}
          />
          <AskMarkTooltip />
        </Styled.Container>
      }
    </FieldSet>
  );
};

export default SecureCodeFieldSet;
