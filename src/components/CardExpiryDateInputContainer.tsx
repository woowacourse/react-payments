import useDisplayingErrorStatus from '../hooks/useDisplayingErrorStatus';
import Input from './common/Input';
import InputSection from './common/InputSection';
import { ErrorWrapper, ErrorText } from '../styles/common';
import { IErrorStatus } from '../validators/index.d';
import { validateExpiryMonth } from '../validators';

type MM = string;
type YY = string;

const formatMonth = (month: MM): { isFormatted: boolean; value: string } => {
  const isNumber = /^\d$/.test(month);
  if (month.length === 1 && month !== '0' && isNumber) {
    return { isFormatted: true, value: `0${month}` };
  }

  return { isFormatted: false, value: month };
};

interface CardExpiryDateInputContainerProps {
  month: {
    value: MM;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    errorStatus: IErrorStatus;
  };
  year: {
    value: YY;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    errorStatus: IErrorStatus;
  };
}

const CardExpiryDateInputContainer = ({ month, year }: CardExpiryDateInputContainerProps) => {
  const {
    displayingErrorStatus: { errorMessage: monthErrorMessage, isError: isMonthError },
    bringErrorStatus: bringMonthErrorStatus,
  } = useDisplayingErrorStatus(month.errorStatus);
  const {
    displayingErrorStatus: { errorMessage: yearErrorMessage, isError: isYearError },
    bringErrorStatus: bringYearErrorStatus,
  } = useDisplayingErrorStatus(year.errorStatus);

  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => month.setValue(e.target.value);
  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => year.setValue(e.target.value);

  const onMonthBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { isFormatted, value } = formatMonth(e.target.value);

    month.setValue(value);

    const isValidAfterFormatting = isFormatted && validateExpiryMonth(value);
    if (isValidAfterFormatting) {
      return;
    }

    bringMonthErrorStatus();
  };
  const onYearBlur = () => bringYearErrorStatus();

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
          isError={isMonthError}
          value={month.value}
          onChange={onMonthChange}
          onBlur={onMonthBlur}
          placeholder="01"
          maxLength={2}
          width="48%"
        />
        <Input
          id="card-expiry-year-input"
          isError={isYearError}
          value={year.value}
          onChange={onYearChange}
          onBlur={onYearBlur}
          placeholder="24"
          maxLength={2}
          width="48%"
        />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{monthErrorMessage}</ErrorText>
        <ErrorText>{yearErrorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardExpiryDateInputContainer;
