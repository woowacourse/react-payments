import ApiError from "./ApiError";

const DEFAULT_ERROR_MESSAGE = "알 수 없는 오류가 발생했습니다.";

interface ApiErrorBody {
  code?: string;
  message?: string;
}

async function parseErrorBody(response: Response): Promise<ApiErrorBody> {
  try {
    return (await response.json()) as ApiErrorBody;
  } catch {
    return {};
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const { code, message } = await parseErrorBody(response);

    throw new ApiError({
      status: response.status,
      code,
      message: message ?? DEFAULT_ERROR_MESSAGE,
    });
  }

  if (response.status === 204) {
    return null as T;
  }

  return response.json() as Promise<T>;
}

const fetcher = {
  get: async <Response>(
    uri: string,
    headers?: HeadersInit,
  ): Promise<Response> => {
    const response = await fetch(uri, {
      method: "GET",
      headers,
    });
    return handleResponse<Response>(response);
  },

  post: async <Response>(
    uri: string,
    body: object,
    headers?: HeadersInit,
  ): Promise<Response> => {
    const response = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });
    return handleResponse<Response>(response);
  },

  delete: async <Response = null>(
    uri: string,
    headers?: HeadersInit,
  ): Promise<Response> => {
    const response = await fetch(uri, {
      method: "DELETE",
      headers,
    });
    return handleResponse<Response>(response);
  },
};

export default fetcher;
