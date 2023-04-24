import React, { useState, useContext } from 'react';

import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import { ONLY_NUMBER_OR_SLASH_REGEX } from '../../../utils/regexp';
import InputWrapper from '../../@common/InputWrapper';

function ExpireDate() {
  const [creditCardInfo, setCreditCardInfo] = useContext(CreditCardContext);
  const [validStatus, setValidStatus] = useState({
    isValid: true,
    message: '',
  });

  const reArrange = (value: string) => {
    const newValue = value.replace('/', '');
    const newValueList = [newValue.slice(0, 2), newValue.slice(2)];

    if (newValue.length > 2) {
      return newValueList.join('/');
    } else {
      return newValueList[0];
    }
  };

  const _onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredDate = reArrange(event.currentTarget.value as string);

    if (!ONLY_NUMBER_OR_SLASH_REGEX.test(enteredDate)) {
      setValidStatus({
        isValid: false,
        message: '숫자만 입력 가능합니다.',
      });

      return;
    }

    if (!setCreditCardInfo) return;

    setValidStatus({
      isValid: true,
      message: '',
    });

    setCreditCardInfo('expirationDate', enteredDate.split('/') as [string, string]);
  };

  const refineExpirationDate = ([month, year]: string[]): string => {
    if (month === '') {
      return '';
    }

    if (!year) {
      return `${month}/`;
    }

    return `${month}/${year}`;
  };

  const _onBlur: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredNumber = event.currentTarget.value as string;

    if (enteredNumber.length !== 5) {
      return setValidStatus({
        isValid: false,
        message: '만료일을 모두 작성해주세요.',
      });
    }
  };
  return (
    <InputWrapper>
      <FormLabel>{'만료일'}</FormLabel>
      <Input
        value={refineExpirationDate(creditCardInfo.expirationDate)}
        onChange={_onChange}
        onBlur={_onBlur}
        maxLength={5}
        inputMode="numeric"
        placeholder="MM / YY"
        width="137px"
        text-align="center"
        font-weight="500"
        line-height="21px"
      />
      {!validStatus.isValid && <ErrorSpan>{validStatus.message}</ErrorSpan>}
    </InputWrapper>
  );
}

export default ExpireDate;
