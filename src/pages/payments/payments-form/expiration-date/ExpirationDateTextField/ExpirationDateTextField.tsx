import { TextField } from '@components/index';
import { ExpirationDateInput } from '@pages/payments';
import { createRef, useRef } from 'react';

export interface ExpirationDateTextFieldProps {
  month: string;
  year: string;
  onAddExpirationDate: (field: 'month' | 'year', value: string) => void;
  expirationDateState: { isError: { month: boolean; year: boolean }; errorMessage: string };
}

const ExpirationDateTextField: React.FC<ExpirationDateTextFieldProps> = ({
  month,
  year,
  onAddExpirationDate,
  expirationDateState,
}) => {
  const inputRefs = useRef(
    Array(2)
      .fill(0)
      .map(() => createRef() as React.RefObject<HTMLInputElement>),
  );

  return (
    <section>
      <TextField.Title title="카드 유효기간을 입력해 주세요" />
      <TextField.SubTitle subTitle="월/년도(MMYY)를 순서대로 입력해 주세요." />
      <TextField.Label htmlFor="expiration" labelText="유효 기간" />
      <TextField.Content>
        <ExpirationDateInput
          id="expiration"
          placeholder="MM"
          isError={expirationDateState.isError.month}
          value={month}
          onAddExpirationDate={(event) => onAddExpirationDate('month', event.target.value)}
          ref={inputRefs.current[0]}
          nextRef={inputRefs.current[1]}
        />
        <ExpirationDateInput
          placeholder="YY"
          isError={expirationDateState.isError.year}
          value={year}
          onAddExpirationDate={(event) => onAddExpirationDate('year', event.target.value)}
          ref={inputRefs.current[1]}
        />
      </TextField.Content>
      <TextField.ErrorText errorText={expirationDateState.errorMessage} />
    </section>
  );
};

export default ExpirationDateTextField;
