import { fetcher } from './fetcher';
import PaymentsError, { type IPaymentsError } from './PaymentsError.ts';

const isPaymentsError = (error: unknown): error is IPaymentsError => {
  return error instanceof Object && 'code' in error && 'message' in error;
};

export const paymentsFetcher = async <T>(endpoint: string, options: RequestInit = {}) => {
  const defaultOptions = {
    method: 'GET',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetcher<T, PaymentsError>(`${import.meta.env.BASE_URL}${endpoint}`, defaultOptions);
    return response;
  } catch (error) {
    if (isPaymentsError(error)) {
      throw new PaymentsError(error);
    }
    throw error;
  }
};
