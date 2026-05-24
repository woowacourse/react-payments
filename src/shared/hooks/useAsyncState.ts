import { useCallback, useState } from "react";

export type AsyncState = "idle" | "loading" | "success" | "error";

export const useAsyncState = () => {
  const [asyncState, setAsyncState] = useState<AsyncState>("idle");

  const setLoading = useCallback(() => {
    setAsyncState("loading");
  }, []);

  const setSuccess = useCallback(() => {
    setAsyncState("success");
  }, []);

  const setError = useCallback(() => {
    setAsyncState("error");
  }, []);

  return {
    asyncState,
    setLoading,
    setSuccess,
    setError,
  };
};
