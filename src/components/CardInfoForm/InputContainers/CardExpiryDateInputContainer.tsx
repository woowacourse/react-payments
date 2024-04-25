import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';
import { ErrorWrapper, ErrorText } from '../../../styles/common';
import { IErrorStatus } from '../../../validators/index.d';
import useExpiryDate from '../../../hooks/useExpiryDate';

type MM = string;
type YY = string;

interface CardExpiryDateInputContainerProps {
  month: {
    value: MM;
    setValue: React.Dispatch<React.SetStateAction<MM>>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validateValue: (targetValue: string) => void;
    errorStatus: IErrorStatus;
  };
  year: {
    value: YY;
    setValue: React.Dispatch<React.SetStateAction<YY>>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validateValue: (targetValue: string) => void;
    errorStatus: IErrorStatus;
  };
}

const CardExpiryDateInputContainer = ({ month, year }: CardExpiryDateInputContainerProps) => {
  const {
    onMonthChange,
    onYearChange,
    onMonthBlur,
    onYearBlur,
    monthErrorMessage,
    yearErrorMessage,
    isMonthError,
    isYearError,
  } = useExpiryDate({ month, year });

  return (
    <div>
      <InputContainer
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
      </InputContainer>
      <ErrorWrapper>
        <ErrorText>{monthErrorMessage}</ErrorText>
        <ErrorText>{yearErrorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardExpiryDateInputContainer;
