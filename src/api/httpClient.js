import { API_END_POINT, METHOD } from '../constants/api';

const fetchOptions = ({ method, body }) => {
  return {
    method,
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: body && JSON.stringify(body),
  };
};

const paymentsFetch = async ({ path, method, body, returnType }) => {
  try {
    const response = await fetch(`${API_END_POINT}${path}`, fetchOptions({ method, body }));

    if (!response.ok) {
      throw new Error(await response.text());
    }

    if (returnType) {
      const data = await response[returnType]();

      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const httpClient = {
  get: ({ path, returnType }) => paymentsFetch({ path, returnType }),
  post: ({ path, body, returnType }) => paymentsFetch({ path, method: METHOD.POST, body, returnType }),
  put: ({ path, body, returnType }) => paymentsFetch({ path, method: METHOD.PUT, body, returnType }),
  delete: ({ path, returnType }) => paymentsFetch({ path, method: METHOD.DELETE, returnType }),
};
