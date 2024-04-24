import { validateExpiryMonth } from '../validators';
import { IErrorStatus } from '../validators/index.d';
import useDisplayingErrorStatus from './useDisplayingErrorStatus';

type MM = string;
type YY = string;

interface ExpiryDateControl {
  month: {
    value: MM;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validateValue: () => void;
    errorStatus: IErrorStatus;
  };
  year: {
    value: YY;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validateValue: () => void;
    errorStatus: IErrorStatus;
  };
}

const formatMonth = (month: MM): { isFormatted: boolean; value: string } => {
  const isNumber = /^\d$/.test(month);
  if (month.length === 1 && month !== '0' && isNumber) {
    return { isFormatted: true, value: `0${month}` };
  }

  return { isFormatted: false, value: month };
};

const useExpiryDate = ({ month, year }: ExpiryDateControl) => {
  const {
    displayingErrorStatus: { errorMessage: monthErrorMessage, isError: isMonthError },
    bringErrorStatus: bringMonthErrorStatus,
  } = useDisplayingErrorStatus(month.errorStatus);
  const {
    displayingErrorStatus: { errorMessage: yearErrorMessage, isError: isYearError },
    bringErrorStatus: bringYearErrorStatus,
  } = useDisplayingErrorStatus(year.errorStatus);

  const onMonthBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { isFormatted, value } = formatMonth(e.target.value);

    month.setValue(value);

    const isValidAfterFormatting = isFormatted && !validateExpiryMonth(value).isError;
    if (isValidAfterFormatting) {
      return;
    }

    bringMonthErrorStatus();
  };
  const onYearBlur = () => bringYearErrorStatus();

  return {
    onMonthChange: month.onChange,
    onYearChange: year.onChange,
    onMonthBlur,
    onYearBlur,
    isMonthError,
    isYearError,
    monthErrorMessage,
    yearErrorMessage,
  };
};

export default useExpiryDate;
