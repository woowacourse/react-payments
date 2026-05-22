import { requestDeleteCard } from "../../../../../domain/card/api/cards";
import { useAsyncState } from "../../../../../shared/hooks/useAsyncState";

export const useDeleteCardMutation = () => {
  const { asyncState, setLoading, setSuccess, setError } = useAsyncState();

  const deleteCardById = async (
    cardId: string,
    options?: {
      onSuccess?: () => void;
      onError?: (error: Error) => void;
    },
  ) => {
    try {
      setLoading();
      await requestDeleteCard(cardId);
      setSuccess();
      options?.onSuccess?.();
    } catch (error) {
      setError();
      if (error instanceof Error) {
        options?.onError?.(error);
      }
    }
  };

  return {
    asyncState,
    deleteCardById,
  };
};
