import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import RegistrationLayout from './common/RegistrationLayout';
import { ErrorDetail } from './types/error';
import { ExpiryDate } from './types/card';

interface CardExpiryDateContainerProps {
  expiryDate: ExpiryDate;
  changeHandler: {
    month: (e: React.ChangeEvent<HTMLInputElement>) => void;
    year: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  errorInfo: {
    month: ErrorDetail;
    year: ErrorDetail;
  };
  errorMessageUpdater: {
    month: () => void;
    year: () => void;
  };
}

const CardExpiryDateContainer = ({
  expiryDate,
  changeHandler,
  errorMessageUpdater,
  errorInfo,
}: CardExpiryDateContainerProps) => {
  return (
    <div>
      <RegistrationLayout
        title="카드 유효기간을 입력해 주세요"
        subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."
        labelText="유효기간"
        labelFor="card-expiry-month-input"
      >
        <Input
          id="card-expiry-month-input"
          isError={errorInfo.month.isError}
          value={expiryDate.month}
          onChange={changeHandler.month}
          onBlur={errorMessageUpdater.month}
          placeholder="MM"
          maxLength={2}
          width="48%"
        />
        <Input
          id="card-expiry-year-input"
          isError={errorInfo.year.isError}
          value={expiryDate.year}
          onChange={changeHandler.year}
          onBlur={errorMessageUpdater.year}
          placeholder="YY"
          maxLength={2}
          width="48%"
        />
      </RegistrationLayout>
      <ErrorWrapper>
        <ErrorText>{errorInfo.month.errorMessage}</ErrorText>
        <ErrorText>{errorInfo.year.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardExpiryDateContainer;
