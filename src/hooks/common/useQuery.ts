import { useEffect, useState } from "react";

type QueryState = "idle" | "loading" | "success" | "error";

interface UseQueryParams<ResponseType> {
  queryFn: () => Promise<ResponseType>;
}

const useQuery = <ResponseType>({ queryFn }: UseQueryParams<ResponseType>) => {
  const [state, setState] = useState<QueryState>("idle");
  const [data, setData] = useState<ResponseType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  function reload() {
    setState("loading");
    setData(null);
    setError(null);
  }

  useEffect(() => {
    Promise.resolve().then(() => {
      if (state === "loading") return;
      setState("loading");
    });

    (async () => {
      try {
        const response = await queryFn();
        setData(response);
        setState("success");
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        setState("error");
      }
    })();
  }, [queryFn, state]);

  return { state, data, error, reload };
};

export default useQuery;
