type Method = 'get' | 'post' | 'put' | 'delete';

export type Configs = {
  method?: Method | undefined;
  url?: string | undefined;
  pathParams?: Record<string, unknown> | undefined;
  query?: Record<string, unknown> | undefined;
  data?: Record<string, unknown> | undefined;
  headers?: Record<string, unknown> | undefined;
};

export type RequestFetchResponse = {
  data: any;
  status: number;
  headers?: Record<string, unknown> | undefined;
  config?: Configs | undefined;
};
