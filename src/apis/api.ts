const BASE_URL = import.meta.env.VITE_BASE_URL;

type RequestOptions = Omit<RequestInit, 'method' | 'body'>;

const request = async <TResponse>(path: string, init?: RequestInit): Promise<TResponse> => {
  const res = await fetch(`${BASE_URL}${path}`, init);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as TResponse;
};

export const http = {
  get: <TResponse>(path: string, options?: RequestOptions) =>
    request<TResponse>(path, { ...options, method: 'GET' }),

  post: <TResponse, TBody = unknown>(path: string, body: TBody, options?: RequestOptions) =>
    request<TResponse>(path, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    }),

  delete: <TResponse>(path: string, options?: RequestOptions) =>
    request<TResponse>(path, {
      ...options,
      method: 'DELETE',
    }),
};
