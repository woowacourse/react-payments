import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import InputSection from './common/InputSection';
import { IErrorStatus } from '../validators/index.d';

type MM = string;
type YY = string;

type TErrorStatusUpdater = (value?: string) => void;

interface CardExpiryDateContainerProps {
  data: { month: MM; year: YY };
  dataSetter: {
    month: React.Dispatch<React.SetStateAction<string>>;
    year: React.Dispatch<React.SetStateAction<string>>;
  };
  errorStatus: { month: IErrorStatus; year: IErrorStatus };
  errorStatusUpdater: { month: TErrorStatusUpdater; year: TErrorStatusUpdater };
}

const CardExpiryDateContainer = ({
  data,
  dataSetter: { month: setMonth, year: setYear },
  errorStatus: { month: monthErrorStatus, year: yearErrorStatus },
  errorStatusUpdater: { month: updateMonthErrorStatus, year: updateYearErrorStatus },
}: CardExpiryDateContainerProps) => {
  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => setMonth(e.target.value);
  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => setYear(e.target.value);

  const onMonthBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const shouldConvertToTwoDigits = e.target.value.length === 1 && e.target.value !== '0';
    const month = shouldConvertToTwoDigits ? `0${e.target.value}` : e.target.value;

    setMonth(month);
    updateMonthErrorStatus(month);
  };

  return (
    <div>
      <InputSection
        title="카드 유효기간을 입력해 주세요"
        subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."
        labelText="유효기간"
        labelFor="card-expiry-month-input"
      >
        <Input
          id="card-expiry-month-input"
          isError={monthErrorStatus.isError}
          value={data.month}
          onChange={onMonthChange}
          onBlur={onMonthBlur}
          placeholder="01"
          maxLength={2}
          width="48%"
        />
        <Input
          id="card-expiry-year-input"
          isError={yearErrorStatus.isError}
          value={data.year}
          onChange={onYearChange}
          onBlur={() => updateYearErrorStatus()}
          placeholder="24"
          maxLength={2}
          width="48%"
        />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{monthErrorStatus.errorMessage}</ErrorText>
        <ErrorText>{yearErrorStatus.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardExpiryDateContainer;
