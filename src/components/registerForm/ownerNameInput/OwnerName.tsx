import React, { useState, useContext } from 'react';

import styled, { css } from 'styled-components';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import { CONTINUOUS_EMPTY_REGEXP, ONLY_ENG_AND_EMPTY_REGEXP } from '../../../utils/regexp';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';

function OwnerNameInput() {
  const [creditCardInfo, setCreditCardInfo] = useContext(CreditCardContext);

  const [validationStatus, setValidationStatus] = useState({
    isValid: true,
    message: '',
  });

  const _onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredName = (event.currentTarget.value as string).toUpperCase();

    if (!ONLY_ENG_AND_EMPTY_REGEXP.test(enteredName)) {
      setValidationStatus({
        isValid: false,
        message: '영어만 입력 가능합니다.',
      });

      return;
    }

    if (CONTINUOUS_EMPTY_REGEXP.test(enteredName)) {
      setValidationStatus({
        isValid: false,
        message: '공백을 연속해서 입력할 수 없습니다.',
      });

      return;
    }

    if (enteredName.length > 30) {
      setValidationStatus({
        isValid: false,
        message: '30자 이하로 입력해주세요.',
      });

      setTimeout(() => {
        setValidationStatus({
          isValid: true,
          message: '',
        });
      }, 2000);

      return;
    }

    if (!setCreditCardInfo) return;

    setValidationStatus({
      isValid: true,
      message: '',
    });

    setCreditCardInfo('ownerName', enteredName);
  };

  return (
    <OwnerNameInputContainer>
      <LabelContainer>
        <FormLabel>카드 소유자 이름(선택)</FormLabel>
        <span>{`${creditCardInfo.ownerName.length} / 30`}</span>
      </LabelContainer>
      <Input
        value={creditCardInfo.ownerName}
        onChange={_onChange}
        customInputStyle={OwnerNameStyle}
        inputmode="text"
      />
      {!validationStatus.isValid && <ErrorSpan>{validationStatus.message}</ErrorSpan>}
    </OwnerNameInputContainer>
  );
}

export default OwnerNameInput;

const OwnerNameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const OwnerNameStyle = css`
  width: 100%;

  font-size: 18px;
  font-weight: 500;

  letter-spacing: 1px;
`;
