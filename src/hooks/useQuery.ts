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

  const request = useCallback(async (signal?: AbortSignal) => {
    const method = rawMethod?.toUpperCase() ?? "GET";
    const hasBody = method !== "GET" && body !== undefined;

    setStatus("loading");
    setData(null);
    setError(null);

    try {
      const res = await fetch(createUrl(url, params), {
        method,
        headers,
        body: hasBody ? JSON.stringify(body) : undefined,
        signal,
      });

      const data = await parseJsonResponse<T>(res);

      if (signal?.aborted) return;

      setData(data);

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      setStatus("success");
    } catch (reason) {
      if (signal?.aborted) return;
      setStatus("error");
      setError(reason instanceof Error ? reason : new Error(String(reason)));
    }
  }, [rawMethod, url, params, headers, body]);

  useEffect(() => {
    if (enabled === false) return;

    const controller = new AbortController();

    // eslint-disable-next-line react-hooks/set-state-in-effect
    request(controller.signal);

    return () => {
      controller.abort();
    };

  }, [request, enabled]);

  const refetch = useCallback(() => {
    const controller = new AbortController();

    request(controller.signal);
  }, [request]);

  return {
    status,
    data,
    error,
    refetch,
  };
}
