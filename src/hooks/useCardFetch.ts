import { useState } from "react";
import { Card } from "../types";

type MockFetch = {
  data: string;
};

const mockFetch = (url: string, card: Card) => {
  return new Promise<MockFetch>((resolve) => {
    setTimeout(() => resolve({ data: "mock Fetch ok" }), 3000);
  });
};

const useCardFetch = () => {
  const [data, setData] = useState<string>("");
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchCard = async (url: string, card: Card) => {
    setIsLoading(true);

    try {
      const response = await mockFetch(url, card);
      const data = response.data;

      setIsComplete(true);
      setData(data);
    } catch (error) {
      setIsError(true);
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const initCardFetchState = () => {
    setIsComplete(false);
    setIsLoading(false);
    setData("");
    setIsError(false);
    setError(null);
  };

  return { data, isComplete, isLoading, isError, error, fetchCard, initCardFetchState };
};

export default useCardFetch;
