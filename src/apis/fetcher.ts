async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    try {
      const errorData = await response.json();
      throw new Error(errorData); //TODO: 커스텀 에러 클래스 사용하기
    } catch {
      throw new Error("알 수 없는 오류가 발생했습니다.");
    }
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
