import { useEffect, useState } from 'react';

type ValidFn<T> = (value: T) => { ok: boolean; errorMessage?: string };

function useInput<T>(
  initValue: T,
  validFns: ValidFn<T>[],
): [T, React.Dispatch<React.SetStateAction<T>>, string | null] {
  const [value, setValue] = useState(initValue);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  useEffect(() => {
    let newErrorMessage = null;
    validFns.some((fn) => {
      const result = fn(value);
      if (!result.ok) {
        newErrorMessage = result.errorMessage;
        return true;
      }

      return false;
    });

    setErrorMessage(newErrorMessage);
  }, [value]);

  return [value, setValue, errorMessage];
}

export default useInput;
