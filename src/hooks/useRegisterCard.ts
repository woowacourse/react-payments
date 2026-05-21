import { useState } from 'react';
import { postCard } from '../api/cards';
import type { CardFormApiError, RegisterCardRequest, RegisterCardResponse } from '../api/api';

type RegisterCardState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: RegisterCardResponse }
  | { status: 'error'; error: CardFormApiError };

export function useRegisterCard() {
  const [registerCardState, setRegisterCardState] = useState<RegisterCardState>({ status: 'idle' });

  const register = async (body: RegisterCardRequest) => {
    setRegisterCardState({ status: 'loading' });
    try {
      const data = await postCard(body);
      setRegisterCardState({ status: 'success', data });
    } catch (error) {
      setRegisterCardState({ status: 'error', error: error as CardFormApiError });
    }
  };

  return { registerCardState, register };
}
