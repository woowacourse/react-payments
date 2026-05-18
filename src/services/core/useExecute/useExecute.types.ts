export type Status = 'idle' | 'loading' | 'success' | 'error';

export type Options<T = unknown> = {
  executeFn: (...rest: any) => Promise<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: unknown) => void;
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

export type Result<T = unknown> = IdleStatus | SuccessStatus<T> | ErrorStatus | LoadingStatus;
