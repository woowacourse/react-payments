import { useEffect } from 'react';
import useInputValue from '../../hooks/useInputValue';
import FieldSet from '../FieldSet';
import Input from '../Input';
import AskMarkTooltip from '../AskMarkTooltip';
import { checkSecureCode, checkNumberOnly } from '../../validation';
import { useCardFormContext } from '../../context/card-form-context';
import * as styled from './index.styled';

const SecureCode = () => {
  const { dispatch } = useCardFormContext();
  const [secureCode, isSecureCodeError, onChangeSecureCode] = useInputValue({
    isValidateInput: checkSecureCode,
    isInputAvailableValue: checkNumberOnly,
  });

  useEffect(() => {
    if (secureCode.length > 0 && !isSecureCodeError) {
      dispatch({ type: 'complete-input-secure-code', data: { secureCode } });
      return;
    }
    dispatch({ type: 'incomplete-input-secure-code' });
  }, [secureCode, isSecureCodeError, dispatch]);

  return (
    <FieldSet
      id="secureCode"
      description="보안코드(CVC/CVV)"
      errorMessage="유효한 보안코드를 입력해주세요"
      isError={isSecureCodeError}
    >
      {
        <styled.Container>
          <Input
            id="secureCode"
            scale="medium"
            type="password"
            maxLength={3}
            value={secureCode}
            onChange={onChangeSecureCode}
          />
          <AskMarkTooltip />
        </styled.Container>
      }
    </FieldSet>
  );
};

export default SecureCode;
