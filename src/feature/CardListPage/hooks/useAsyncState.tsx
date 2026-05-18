import { useState } from "react";

export const useAsyncState = () => {
  const [asyncState, setAsyncState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

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
