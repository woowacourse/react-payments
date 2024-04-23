import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import InputSection from './common/InputSection';
import { IErrorStatus } from '../validators/index.d';

type MM = string;
type YY = string;

type TErrorStatusUpdater = (targetValue?: string) => void;

interface CardExpiryDateInputContainerProps {
  monthControl: {
    value: MM;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    errorStatus: IErrorStatus;
    updateErrorStatus: TErrorStatusUpdater;
  };
  yearControl: {
    value: YY;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    errorStatus: IErrorStatus;
    updateErrorStatus: TErrorStatusUpdater;
  };
}

const CardExpiryDateInputContainer = ({ monthControl, yearControl }: CardExpiryDateInputContainerProps) => {
  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => monthControl.setValue(e.target.value);
  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => yearControl.setValue(e.target.value);

  const onMonthBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const shouldConvertToTwoDigits = e.target.value.length === 1 && e.target.value !== '0';
    const month = shouldConvertToTwoDigits ? `0${e.target.value}` : e.target.value;

    monthControl.setValue(month);
    monthControl.updateErrorStatus(month);
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
          isError={monthControl.errorStatus.isError}
          value={monthControl.value}
          onChange={onMonthChange}
          onBlur={onMonthBlur}
          placeholder="01"
          maxLength={2}
          width="48%"
        />
        <Input
          id="card-expiry-year-input"
          isError={yearControl.errorStatus.isError}
          value={yearControl.value}
          onChange={onYearChange}
          onBlur={() => yearControl.updateErrorStatus()}
          placeholder="24"
          maxLength={2}
          width="48%"
        />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{monthControl.errorStatus.errorMessage}</ErrorText>
        <ErrorText>{yearControl.errorStatus.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardExpiryDateInputContainer;
