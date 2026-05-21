import { useState } from "react";

export type AsyncState = "idle" | "loading" | "success" | "error";

export const useAsyncState = () => {
  const [asyncState, setAsyncState] = useState<AsyncState>("idle");

  const setLoading = () => {
    setAsyncState("loading");
  };

  const setSuccess = () => {
    setAsyncState("success");
  };

  const setError = () => {
    setAsyncState("error");
  };

  return {
    asyncState,
    setLoading,
    setSuccess,
    setError,
  };
};
