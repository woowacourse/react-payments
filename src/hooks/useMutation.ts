import { useCallback, useEffect, useRef, useState } from "react";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

type FetchStatus = "idle" | "loading" | "success" | "error";

interface MutationOption<T> {
  method: RequestInit["method"];
  url: string;
  headers?: Record<string, string>;
  onSuccess?: (data: T | null) => void;
  onError?: (error: Error) => void;
}

interface MutateOption {
  body?: JsonValue;
  query?: Record<string, string>;
}

const parseJsonResponse = async <T>(res: Response) => {
  if (res.status === 204) return null;

  const text = await res.text();

  return text.trim() ? (JSON.parse(text) as T) : null;
};

const createUrl = (url: string, params?: Record<string, string>) => {
  if (!params) return url;

  const searchParams = new URLSearchParams(params);
  const queryString = searchParams.toString();

  if (!queryString) return url;

  return `${url}${url.includes("?") ? "&" : "?"}${queryString}`;
};

export default function useMutation<T>(option: MutationOption<T>) {
  const [status, setStatus] = useState<FetchStatus>("idle");
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const isMounted = useRef(true);

  const { method, url, headers, onSuccess, onError } = option;

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setData(null);
    setError(null);
  }, []);

  const mutateAsync = useCallback(
    async ({ body, query }: MutateOption = {}) => {
      setStatus("loading");
      setData(null);
      setError(null);

      try {
        const res = await fetch(createUrl(url, query), {
          method: method?.toUpperCase() ?? "POST",
          headers,
          body: body !== undefined ? JSON.stringify(body) : undefined,
        });

        const result = await parseJsonResponse<T>(res);

        if (isMounted.current) {
          setData(result);
        }

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        if (isMounted.current) {
          setStatus("success");
          onSuccess?.(result);
        }

        return result;
      } catch (reason) {
        const err =
          reason instanceof Error ? reason : new Error(String(reason));

        if (isMounted.current) {
          setError(err);
          setStatus("error");
          onError?.(err);
        }

        throw err;
      }
    },
    [method, url, headers, onSuccess, onError]
  );

  const mutate = useCallback(
    (option: MutateOption = {}) => {
      mutateAsync(option).catch(() => {});
    },
    [mutateAsync]
  );

  return { mutate, mutateAsync, status, data, error, reset };
}
