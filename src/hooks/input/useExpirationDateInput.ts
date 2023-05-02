import { useEffect, useState } from 'react';
import { isNumeric, isValidDate, isValidMonth } from '../../utils/validator';
import { isEmptyInput, isFullInput } from '../../utils';
import { ERROR, MONTH_SIZE, YEAR_SIZE } from '../../constants';
import { ExpirationDate } from '../../types';

interface Props {
  expirationDate: ExpirationDate;
  monthInputRef: React.RefObject<HTMLInputElement>;
  yearInputRef: React.RefObject<HTMLInputElement>;
  setExpirationDate: (input: ExpirationDate) => void;
  moveFocusToOwnerName?: () => void;
}

export const useExpirationDateInput = ({
  expirationDate,
  monthInputRef,
  yearInputRef,
  setExpirationDate,
  moveFocusToOwnerName,
}: Props) => {
  const [expirationDateError, setExpirationDateError] = useState('');

  const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && isEmptyInput(expirationDate.year)) {
      e.preventDefault();
      monthInputRef.current?.focus();
    }
  };

  const handleMonthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate({
      ...expirationDate,
      month: e.target.value,
    });

    if (!isNumeric(e.target.value)) {
      setExpirationDateError(ERROR.IS_NOT_NUMBER);
      return;
    }

    if (!isValidMonth(e.target.value)) {
      setExpirationDateError(ERROR.INVALID_MONTH);
      return;
    }

    setExpirationDateError('');

    const month = e.target.value;
    if (isFullInput(month, MONTH_SIZE)) yearInputRef.current?.focus();
  };

  const handleYearInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate({
      ...expirationDate,
      year: e.target.value,
    });

    if (!isNumeric(e.target.value)) {
      setExpirationDateError(ERROR.IS_NOT_NUMBER);
      return;
    }

    if (!isValidDate(expirationDate.month, e.target.value)) {
      setExpirationDateError(ERROR.INVALID_EXPIRATION_DATE);
      return;
    }

    setExpirationDateError('');
  };

  const updateExpirationDateError = (e: React.FocusEvent<HTMLElement>) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    if (!(e.target instanceof HTMLInputElement)) return;

    if (!isValidDate(expirationDate.month, expirationDate.year)) {
      setExpirationDateError(ERROR.INVALID_EXPIRATION_DATE);
      return;
    }

    setExpirationDateError('');
  };

  useEffect(() => {
    if (
      isFullInput(expirationDate.year, YEAR_SIZE) &&
      isValidDate(expirationDate.month, expirationDate.year) &&
      moveFocusToOwnerName
    )
      moveFocusToOwnerName();
  }, [expirationDate.year]);

  return {
    expirationDateError,
    updateExpirationDateError,
    handleBackspacePress,
    handleMonthInputChange,
    handleYearInputChange,
  };
};
