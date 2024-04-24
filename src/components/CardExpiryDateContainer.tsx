import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import InputField from './common/InputField';
import { ErrorDetail } from '../types/error';

interface ExpiryDateInfo {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateErrorMessage: () => void;
  errorInfo: ErrorDetail;
}

interface CardExpiryDateContainerProps {
  month: ExpiryDateInfo;
  year: ExpiryDateInfo;
}

const CardExpiryDateContainer = ({ month, year }: CardExpiryDateContainerProps) => {
  return (
    <div>
      <InputField
        title="카드 유효기간을 입력해 주세요"
        subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."
        labelText="유효기간"
        labelFor="card-expiry-month-input"
      >
        <Input
          id="card-expiry-month-input"
          isError={month.errorInfo.isError}
          value={month.value}
          onChange={month.handleChange}
          onBlur={month.updateErrorMessage}
          placeholder="MM"
          maxLength={2}
          width="48%"
        />
        <Input
          id="card-expiry-year-input"
          isError={year.errorInfo.isError}
          value={year.value}
          onChange={year.handleChange}
          onBlur={year.updateErrorMessage}
          placeholder="YY"
          maxLength={2}
          width="48%"
        />
      </InputField>
      <ErrorWrapper>
        <ErrorText>{month.errorInfo.errorMessage}</ErrorText>
        <ErrorText>{year.errorInfo.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardExpiryDateContainer;
