import { FocusEventHandler, useState } from 'react';

import {
  expiredDateValidator,
  isExpiredValidatorKey,
} from '../../../utils/validation';
import { EXPIRED_DATE_MESSAGE, ExpiredDateHelper } from '../constants/message';

const useExpiredDate = () => {
  const [errorMessage, setErrorMessage] = useState<ExpiredDateHelper>(
    EXPIRED_DATE_MESSAGE.helper.init,
  );

  const handleDateInputBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const {
      dataset: { property },
      value,
    } = event.currentTarget;

    if (!property) return;
    if (!isExpiredValidatorKey(property)) return;

    const validator = expiredDateValidator[property];

    if (validator(Number(value)) && event.currentTarget.checkValidity()) {
      setErrorMessage(EXPIRED_DATE_MESSAGE.helper.init);
      return;
    }

    setErrorMessage(EXPIRED_DATE_MESSAGE.helper[property]);
  };

  return { errorMessage, handleDateInputBlur };
};

export default useExpiredDate;
