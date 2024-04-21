import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import RegistrationLayout from './common/RegistrationLayout';
import { IErrorStatus } from '../inquiry/index.d';

type MM = string;
type YY = string;

interface CardExpiryDateContainerProps {
  expiryDate: { month: MM; year: YY };
  expiryDateSetter: { month: React.Dispatch<React.SetStateAction<MM>>; year: React.Dispatch<React.SetStateAction<YY>> };
  errorStatus: {
    month: IErrorStatus;
    year: IErrorStatus;
  };
  errorStatusUpdater: {
    month: () => void;
    year: () => void;
  };
}

const CardExpiryDateContainer = ({
  expiryDate,
  expiryDateSetter,
  errorStatus,
  errorStatusUpdater,
}: CardExpiryDateContainerProps) => {
  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => expiryDateSetter.month(e.target.value);
  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => expiryDateSetter.year(e.target.value);

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
          isError={errorStatus.month.isError}
          value={expiryDate.month}
          onChange={onMonthChange}
          onBlur={errorStatusUpdater.month}
          placeholder="MM"
          maxLength={2}
          width="48%"
        />
        <Input
          id="card-expiry-year-input"
          isError={errorStatus.year.isError}
          value={expiryDate.year}
          onChange={onYearChange}
          onBlur={errorStatusUpdater.year}
          placeholder="YY"
          maxLength={2}
          width="48%"
        />
      </RegistrationLayout>
      <ErrorWrapper>
        <ErrorText>{errorStatus.month.errorMessage}</ErrorText>
        <ErrorText>{errorStatus.year.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardExpiryDateContainer;
