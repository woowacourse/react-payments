import { ENV } from '@/configs/env';

import type { Configs, RequestFetchResponse } from './requestAjax.types';

import { RequestAjaxError, RequestNetworkError } from './error';

export const requestAjax = async (url: string, config?: Configs): Promise<RequestFetchResponse> => {
  const { method = 'get', url: configUrl, pathParams, query, data, headers } = config || {};

  let finalUrl = `${ENV.API_URL || ''}${configUrl || url}`;

  if (pathParams) {
    const paramsstring = Object.values(pathParams).join('/');
    finalUrl += `/${paramsstring}`;
  }

  if (query) {
    const querystring = new URLSearchParams(query as Record<string, string>).toString();
    finalUrl += `?${querystring}`;
  }

  const customHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  let res;
  try {
    res = await fetch(finalUrl, {
      method,
      ...(!!Object.values(customHeaders).filter(Boolean).length && {
        headers: {
          ...(customHeaders as Record<string, string>),
        },
      }),
      // credentials: 'include',
      ...(data && {
        body: data instanceof FormData ? data : JSON.stringify(data),
      }),
    });
  } catch (error) {
    const response = {
      data: error,
      headers: customHeaders,
      config,
    };
    throw new RequestNetworkError(response);
  }

  let responseData = await res.text();
  try {
    responseData = JSON.parse(responseData);
  } catch (e) {
    console.error(e);
  }

  const response = {
    data: responseData,
    status: res.status,
    headers: customHeaders,
    config,
  };
  if (res.ok) {
    return response;
  } else {
    throw new RequestAjaxError(response);
  }
};
