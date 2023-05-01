import { Input } from 'components/common';
import React, { ChangeEventHandler } from 'react';
import { Styled as S } from './ExpirationDateInput.styles';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { useExpirationDataInput } from 'hooks/useExpirationDateInput';

export interface ExpirationDateProps {
  onChangeMonth: ChangeEventHandler<HTMLInputElement>;
  onChangeYear: ChangeEventHandler<HTMLInputElement>;
}

export function ExpirationDateInput({ onChangeMonth, onChangeYear }: ExpirationDateProps) {
  const inputRefs = [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()];
  const { month, year } = useExpirationDataInput(inputRefs, onChangeMonth, onChangeYear);

  return (
    <>
      <FormLabel>만료일</FormLabel>
      <S.ExpirationDateContainer>
        <Input
          ref={inputRefs[0]}
          inputMode="numeric"
          value={month.value}
          type="text"
          maxLength={2}
          placeholder="MM"
          onChange={month.onChange}
          required
        />
        <S.SLASH />
        <Input
          ref={inputRefs[1]}
          inputMode="numeric"
          value={year.value}
          type="text"
          maxLength={2}
          placeholder="YY"
          onChange={year.onChange}
          required
        />
      </S.ExpirationDateContainer>
    </>
  );
}
