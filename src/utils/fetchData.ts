import { useEffect, useState } from "react";

export function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
      }, 2000);
    }
  }, [isLoading]);

  function fetchData(setData: () => void) {
    setData();
    setIsLoading(true);
  }

  return { isLoading, isSuccess, fetchData };
}
