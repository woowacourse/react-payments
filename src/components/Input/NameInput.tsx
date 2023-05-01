import { PaymentsInput } from 'components/common';
import { PaymentsInputErrorLabel } from 'components/common/Label/PaymentsInputErrorLabel';
import { PaymentsInputLabel } from 'components/common/Label/PaymentsInputLabel';
import { useIsPaymentsInputErrors } from 'hooks/useIsPaymentsInputErrors';
import { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import { ValueAndOnChange } from './types';

export type NameInputProps = {
  width?: string;
} & ValueAndOnChange;

const NOT_ALPHABET_REGEX = /[^A-Za-z\s]/gi;

export function NameInput(props: NameInputProps) {
  const { value, onChange, width } = props;
  const [isError, setIsError] = useIsPaymentsInputErrors(1);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.match(NOT_ALPHABET_REGEX)) {
      setIsError(true);
      return;
    }
    const value = e.target.value.replace(NOT_ALPHABET_REGEX, '').toUpperCase();

    onChange?.(value);
    setIsError(false);
  };

  return (
    <Container>
      <NameLabelContainer>
        <PaymentsInputLabel>카드 소유자 이름(선택)</PaymentsInputLabel>
        <PaymentsInputLabel>{`${value?.length} / 30`}</PaymentsInputLabel>
      </NameLabelContainer>
      <PaymentsInput
        value={value}
        type="text"
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요"
        onChange={handleChange}
        width={width}
        isError={isError}
      />
      {isError && (
        <PaymentsInputErrorLabel>이름은 영문 대문자로만 입력해주세요.</PaymentsInputErrorLabel>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const NameLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);
`;
