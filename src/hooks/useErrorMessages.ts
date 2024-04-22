import { useState } from 'react';

type UpdatedErrorMessage<T> = { errorMessage: T; index: number };
type UpdatedErrorMessages<T> = UpdatedErrorMessage<T>[];

const useErrorMessages = <T extends string = string>(size: number, initialItem: T) => {
  const [errorMessages, setErrorMessages] = useState<T[]>(new Array(size).fill(initialItem));

  const handleChangeErrorMessage = (updatedErrorMessagesInput: UpdatedErrorMessages<T> | UpdatedErrorMessage<T>) => {
    const updatedErrorMessages = [...errorMessages];

    if (Array.isArray(updatedErrorMessagesInput))
      updatedErrorMessagesInput.forEach(({ errorMessage, index }) => (updatedErrorMessages[index] = errorMessage));
    else {
      const { errorMessage, index } = updatedErrorMessagesInput;
      updatedErrorMessages[index] = errorMessage;
    }

    setErrorMessages(updatedErrorMessages);
  };

  return {
    errorMessages,
    setErrorMessages: handleChangeErrorMessage,
  };
};

export default useErrorMessages;
