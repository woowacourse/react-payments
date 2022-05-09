import { useCallback, useState } from "react";

function useAsyncError() {
  const [_, setError] = useState();

  return useCallback(
    e => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
}

export default useAsyncError;
