export type Options<T = unknown> = {
  queryFn: () => Promise<T>;
};

export type Result<T = unknown> = {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
};
