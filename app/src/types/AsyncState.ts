export type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; responseData: T }
  | { status: 'error'; message: string };
