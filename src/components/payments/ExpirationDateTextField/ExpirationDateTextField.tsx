import TextField from '@components/common/TextField/TextField';
import ExpirationDateInput from '@components/payments/ExpirationDateInput/ExpirationDateInput';

interface ExpirationDateTextFieldProps {
  month: string;
  year: string;
  onAddExpirationDate: (field: 'month' | 'year', value: string) => void;
  expirationError: { isError: boolean; errorMessage: string };
}

const ExpirationDateTextField: React.FC<ExpirationDateTextFieldProps> = ({
  month,
  year,
  onAddExpirationDate,
  expirationError,
}) => {
  return (
    <section>
      <TextField.Title title="카드 유효기간을 입력해 주세요" />
      <TextField.SubTitle subTitle="월/년도(MMYY)를 순서대로 입력해 주세요." />
      <TextField.Label htmlFor="expiration" labelText="유효 기간" />
      <TextField.Content>
        <ExpirationDateInput
          id="expiration"
          placeholder="MM"
          isError={expirationError.isError}
          value={month}
          onAddExpirationDate={(event) => onAddExpirationDate('month', event.target.value)}
        />
        <ExpirationDateInput
          placeholder="YY"
          isError={expirationError.isError}
          value={year}
          onAddExpirationDate={(event) => onAddExpirationDate('year', event.target.value)}
        />
      </TextField.Content>
      <TextField.ErrorText isError={expirationError.isError} errorText={expirationError.errorMessage} />
    </section>
  );
};

export default ExpirationDateTextField;
