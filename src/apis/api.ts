const BASE_URL = import.meta.env.VITE_BASE_URL;

export type ApiErrorCode = 'INVALID_CARD_NUMBER' | 'INVALID_CVC' | 'INVALID_EXPIRATION_DATE';

export class ApiError extends Error {
  constructor(
    public status: number,
    public code: ApiErrorCode | string,
    public message: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

type RequestOptions = Omit<RequestInit, 'method' | 'body'>;
type ErrorResponse = {
  code: ApiErrorCode | string;
  message: string;
};

const request = async <TResponse>(path: string, init?: RequestInit): Promise<TResponse> => {
  const res = await fetch(`${BASE_URL}${path}`, init);
  if (!res.ok) {
    const payload = (await res.json().catch(() => null)) as ErrorResponse | null;

    throw new ApiError(
      res.status,
      payload?.code ?? 'UNKNOWN_ERROR',
      payload?.message ?? `요청 처리 중 문제가 발생했어요 (${res.status})`
    );
  }

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
