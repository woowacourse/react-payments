import { useEffect, useState } from 'react';

function useInput<T>(
  initValue: T,
  validFn: {
    [key: string]: (value: T) => { ok: boolean; errorMessage?: string };
  },
): [T, React.Dispatch<React.SetStateAction<T>>, string | null] {
  const [value, setValue] = useState(initValue);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  useEffect(() => {
    let newErrorMessage = null;
    Object.values(validFn).some((fn) => {
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
