import { useState } from 'react';
import { postCard } from '../api/cards';
import type { ApiError, CardResponse, RegisterCardRequest } from '../types/api';

type AsyncState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: CardResponse }
  | { status: 'error'; error: ApiError };

export function useRegisterCard() {
  const [state, setState] = useState<AsyncState>({ status: 'idle' });

  const register = async (body: RegisterCardRequest) => {
    setState({ status: 'loading' });
    try {
      const data = await postCard(body);
      setState({ status: 'success', data });
    } catch (error) {
      setState({ status: 'error', error: error as ApiError });
    }
  };

  return { state, register };
}
