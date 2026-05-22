import { useEffect, useState } from "react";

type QueryState = "idle" | "loading" | "success" | "error";

interface UseQueryParams<ResponseType> {
  queryFn: () => Promise<ResponseType>;
}

const useQuery = <ResponseType>({ queryFn }: UseQueryParams<ResponseType>) => {
  const [state, setState] = useState<QueryState>("idle");
  const [data, setData] = useState<ResponseType | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  const reload = () => {
    setFetchTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    let cancelled = false;

    Promise.resolve().then(async () => {
      if (!cancelled) {
        setState("loading");
        setData(null);
        setError(null);
      }

      try {
        const response = await queryFn();

        if (!cancelled) {
          setData(response);
          setState("success");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setState("error");
        }
      }
    });

    return () => {
      cancelled = true;
    };
  }, [queryFn, fetchTrigger]);

  return { state, data, error, reload };
};

export default useQuery;
