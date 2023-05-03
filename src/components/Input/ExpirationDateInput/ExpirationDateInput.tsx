import { Input } from 'components/common';
import { ChangeEventHandler } from 'react';
import { Styled as S } from './ExpirationDateInput.styles';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { useExpirationDataInput } from 'hooks/useExpirationDateInput';

export interface ExpirationDateProps {
  onChangeMonth: ChangeEventHandler<HTMLInputElement>;
  onChangeYear: ChangeEventHandler<HTMLInputElement>;
}

export function ExpirationDateInput({ onChangeMonth, onChangeYear }: ExpirationDateProps) {
  const { month, year } = useExpirationDataInput(onChangeMonth, onChangeYear);

  return (
    <>
      <FormLabel>만료일</FormLabel>
      <S.ExpirationDateContainer>
        <Input
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
