/**
 * 에러 메세지를 갖는다.
 * 업데이트한다.
 * 가장 최근에 수정된 값을 반환한다.
 */

import { useState } from 'react';

const useErrorMessages = <T extends string = string>(size: number) => {
  const [errorMessages, setErrorMessages] = useState<T[]>(new Array(size).fill(''));

  const handleChangeErrorMessage = (errorMessage: T, index: number) => {
    const updatedErrorMessages = [...errorMessages];
    updatedErrorMessages[index] = errorMessage;
    setErrorMessages(updatedErrorMessages);
  };

  return {
    errorMessages,
    setErrorMessages: handleChangeErrorMessage,
  };
};

export default useErrorMessages;
