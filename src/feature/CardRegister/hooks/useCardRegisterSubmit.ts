import { useState } from 'react';
import type { CardFormInfoType } from '../../../domain/card/types/card';
import type { useRegisterServerError } from './useRegisterServerErrors';
import { postCard } from '../../../api/cards';
import { HTTPError, NetworkError } from '../../../api/error';

type UseCardRegisterSubmitParams = {
  serverErrors: ReturnType<typeof useRegisterServerError>;
  onSuccess: (cardFormInfo: CardFormInfoType) => void;
};

export const useCardRegisterSubmit = ({
  serverErrors,
  onSuccess,
}: UseCardRegisterSubmitParams) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitCard = async (cardFormInfo: CardFormInfoType) => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      serverErrors.resetServerFieldErrors();

      await postCard(cardFormInfo);

      onSuccess(cardFormInfo);
    } catch (error) {
      if (error instanceof HTTPError) {
        serverErrors.setServerFieldError(error.code, error.message);
      }

      if (error instanceof NetworkError) {
        serverErrors.setFormServerError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmitCard,
  };
};
