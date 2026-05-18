import { useEffect, useState } from "react";

type QueryState = "loading" | "success" | "error";

interface UseQueryParams<ResponseType> {
  queryFn: () => Promise<ResponseType>;
}

const useQuery = <ResponseType>({ queryFn }: UseQueryParams<ResponseType>) => {
  const [state, setState] = useState<QueryState>("loading");
  const [data, setData] = useState<ResponseType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
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
  }, [queryFn]);

  return { state, data, error };
};

export default useQuery;
