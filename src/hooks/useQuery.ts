import { useCallback, useEffect, useState } from "react";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

type FetchStatus = "idle" | "loading" | "success" | "error";

interface QueryOption {
  method?: RequestInit["method"];
  url: string;
  params?: Record<string, string>;
  headers?: Record<string, string>;
  body?: JsonValue;
  enabled?: boolean;
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

export default function useQuery<T>(option: QueryOption) {
  const [status, setStatus] = useState<FetchStatus>("idle");
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const { method: rawMethod, url, params, headers, body, enabled } = option;

  const requset = useCallback(() => {
    const controller = new AbortController();
    const method = rawMethod?.toUpperCase() ?? "GET";
    const hasBody = method !== "GET" && body !== undefined;

    Promise.resolve()
      .then(() => {
        if (controller.signal.aborted) {
          throw new Error("Aborted");
        }

        setStatus("loading");
        setData(null);
        setError(null);

        return fetch(createUrl(url, params), {
          method,
          headers,
          body: hasBody ? JSON.stringify(body) : undefined,
          signal: controller.signal,
        });
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        return parseJsonResponse<T>(res);
      })
      .then((data) => {
        if (controller.signal.aborted) return;

        setData(data);
        setStatus("success");
      })
      .catch((reason) => {
        if (controller.signal.aborted) return;

        setStatus("error");
        setData(null);
        setError(reason instanceof Error ? reason : new Error(String(reason)));
      });

    return () => {
      controller.abort();
    };
  }, [rawMethod, url, params, headers, body]);

  useEffect(() => {
    if (enabled === false) return;
    return requset();
  }, [requset, enabled]);

  const refetch = useCallback(() => {
    requset();
  }, [requset]);

  return {
    status,
    data,
    error,
    refetch,
  };
}
