import { PaymentsInput } from 'components/common';
import { PaymentsInputLabel } from 'components/common/Label/PaymentsInputLabel';
import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { ValueAndOnChange } from './types';

export type NameInputProps = {
  width?: string;
} & ValueAndOnChange;

const NOT_ALPHABET_REGEX = /[^A-Za-z\s]/gi;

export function NameInput({ value, onChange, width }: NameInputProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.replace(NOT_ALPHABET_REGEX, '').toUpperCase();
    onChange?.(value);
  };

  return (
    <>
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
      />
    </>
  );
}

const NameLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);
  margin-bottom: 3px;
`;
