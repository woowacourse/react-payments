import { FocusEventHandler, useState } from 'react';

import {
  expiredDateValidator,
  isExpiredValidatorKey,
} from '../../../utils/validation';

const ERROR_MESSAGE = {
  init: '만료일을 MM/YY 형식으로 입력해 주세요. (ex. 12/26)',
  month: '유효한 달을 입력해 주세요. (01-12 사이 숫자)',
  year: '유효한 연도를 입력해 주세요. (현재 년도 이상의 숫자)',
} as const;

type ErrorMessage = (typeof ERROR_MESSAGE)[keyof typeof ERROR_MESSAGE];

const useExpiredDate = () => {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(
    ERROR_MESSAGE.init,
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
      setErrorMessage(ERROR_MESSAGE.init);
      return;
    }

    setErrorMessage(ERROR_MESSAGE[property]);
  };

  return { errorMessage, handleDateInputBlur };
};

export default useExpiredDate;
