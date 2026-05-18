export type StatusType = 'idle' | 'loading' | 'success' | 'error';

export type Options<T = unknown> = {
  queryFn: () => Promise<T>;
};

type IdleStatus = {
  status: 'idle';
  data: null;
  error: null;
};

type SuccessStatus<T> = {
  status: 'success';
  data: T;
  error: null;
};

type ErrorStatus = {
  status: 'error';
  data: null;
  error: true;
};

type LoadingStatus = {
  status: 'loading';
  data: null;
  error: null;
};

export type Status<T = unknown> = IdleStatus | SuccessStatus<T> | ErrorStatus | LoadingStatus;

export type Result<T = unknown> = {
  status: Status<T>;
  refetch: () => Promise<T | void>;
};
