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
    const isNotError = !origin.isError || Object.values(origin.isError).every(isError => !isError);

    const errorDoesNotExists = isNotError && !origin.errorMessage;

    const errorDisappears = displayingErrorStatus.isError && errorDoesNotExists;
    if (errorDisappears) {
      bringErrorStatus();
    }
  }, [displayingErrorStatus.isError, origin, bringErrorStatus]);

  return { displayingErrorStatus, bringErrorStatus };
};

export default useDisplayingErrorStatus;
