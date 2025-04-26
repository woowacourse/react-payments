import {ChangeEvent, useState} from 'react';

const useErrors = <
  T extends Record<string, boolean>,
  M extends Record<string, any>
>(
  initialData: T,
  initialMessages: M
) => {
  // 각 필드에 에러의 여부를 담고 있는 상태
  const [isErrors, setIsErrors] = useState(initialData);
  // 각 필드에 에러 메시지를 담고 있는 상태
  const [errorMessages, setErrorMessages] = useState(initialMessages);

  const onError = (name: string, isError: boolean) => {
    setIsErrors((prev) => ({...prev, [name]: isError}));
  };

  const onValidate = (
    validateRule: any,
    e: ChangeEvent<HTMLInputElement>,
    order?: string
  ) => {
    const {value, name} = e.target;

    const matchedError = validateRule.find((rule: any) =>
      rule.validate(value, order)
    );

    if (order) {
      setErrorMessages((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          [order]: matchedError?.error ?? '',
        },
      }));

      if (Object.values(errorMessages[name]).some((value) => value !== '')) {
        onError(name, true);
        return;
      }

      onError(name, false);
      return;
    }

    setErrorMessages((prev) => ({...prev, [name]: matchedError?.error ?? ''}));

    if (errorMessages[name].length > 0) {
      onError(name, true);
      return;
    }

    onError(name, false);
  };

  const onFocusout = (
    e: ChangeEvent<HTMLInputElement>,
    maxLength: number,
    message: string,
    order?: string
  ) => {
    const {value, name} = e.target;

    if (value.length < maxLength) {
      if (order) {
        setErrorMessages((prev) => ({
          ...prev,
          [name]: {
            ...prev[name],
            [order]: message,
          },
        }));
        return;
      }

      setErrorMessages((prev) => ({...prev, [name]: message}));
      onError(name, true);
    }
  };

  return {isErrors, onError, onValidate, onFocusout, errorMessages};
};

export default useErrors;
