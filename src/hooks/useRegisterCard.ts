import { useState } from 'react';
import { postCard } from '../api/cards';
import type { CardFormApiError, RegisterCardRequest, RegisterCardResponse } from '../types/api';

type AsyncState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: RegisterCardResponse }
  | { status: 'error'; error: CardFormApiError };

export function useRegisterCard() {
  const [state, setState] = useState<AsyncState>({ status: 'idle' });

  const register = async (body: RegisterCardRequest) => {
    setState({ status: 'loading' });
    try {
      const data = await postCard(body);
      setState({ status: 'success', data });
    } catch (error) {
      setState({ status: 'error', error: error as CardFormApiError });
    }
  };

  return { state, register };
}
