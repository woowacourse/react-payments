import React, { useState, useContext } from 'react';

import styled, { css } from 'styled-components';
import CreditCardContext from '../../../contexts/InputValueContext';
import { CONTINUOUS_EMPTY_REGEXP, ONLY_ENG_AND_EMPTY_REGEXP } from '../../../utils/regexp';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';

function OwnerNameInput() {
  const [creditCardInfo, setCreditCardInfo] = useContext(CreditCardContext);

  const [error, setError] = useState({
    isError: false,
    message: '',
  });

  const ownerNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value as string;

    if (!ONLY_ENG_AND_EMPTY_REGEXP.test(value)) return;
    try {
      if (value.length > 0) {
        if (CONTINUOUS_EMPTY_REGEXP.test(value)) {
          throw new Error('카드 소유자 이름은 공백을 연속해서 작성할 수 없습니다.');
        }

        if (value.length < 3 || value.length > 30) {
          throw new Error('카드 소유자 이름은 3글자 이상 30글자 이하입니다.');
        }
      }

      setError({
        isError: false,
        message: '',
      });
    } catch (error) {
      if (!(error instanceof Error)) return;

      setError({
        isError: true,
        message: error.message,
      });
    } finally {
      if (value.length <= 30) {
        if (!setCreditCardInfo) return;
        setCreditCardInfo('ownerName', value.toUpperCase());
      }
    }
  };

  return (
    <OwnerNameInputContainer>
      <LabelContainer>
        <FormLabel>카드 소유자 이름(선택)</FormLabel>
        <span>{`${creditCardInfo.ownerName.length} / 30`}</span>
      </LabelContainer>
      <Input
        value={creditCardInfo.ownerName}
        onChange={ownerNameChange}
        customInputStyle={OwnerNameStyle}
      />
      {error.isError && <ErrorSpan>{error.message}</ErrorSpan>}
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
