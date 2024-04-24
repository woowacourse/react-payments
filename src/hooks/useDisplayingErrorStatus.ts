import { useCallback, useEffect, useState } from 'react';

interface IAbstractErrorStatus {
  isError: boolean | Record<string, boolean>;
  errorMessage: string;
}

const useDisplayingErrorStatus = <T extends IAbstractErrorStatus>(origin: T) => {
  const [displayingErrorStatus, setDisplayingErrorStatus] = useState<T>(origin);

  const bringErrorStatus = useCallback(() => {
    setDisplayingErrorStatus(origin);
  }, [origin]);

  useEffect(() => {
    const isBoolean = typeof origin.isError === 'boolean';

    if (isBoolean) {
      const errorDisappeared = displayingErrorStatus.isError && !origin.isError;
      if (errorDisappeared) {
        bringErrorStatus();
      }
    } else {
      const displayingErrorExists = Object.values(origin.isError).some(isError => isError);
      const originErrorNotExists = Object.values(origin.isError).every(isError => !isError);
      const errorDisappeared = displayingErrorExists && originErrorNotExists;
      if (errorDisappeared) {
        bringErrorStatus();
      }
    }
  }, [displayingErrorStatus.isError, origin, bringErrorStatus]);

  return { displayingErrorStatus, bringErrorStatus };
};

export default useDisplayingErrorStatus;
