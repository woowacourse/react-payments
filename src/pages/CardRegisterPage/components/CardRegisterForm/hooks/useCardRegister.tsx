import { requestRegisterCard } from "../../../../../domain/card/api/cards";
import type {
  CardRegisterError,
  CardRegisterRequestBody,
} from "../../../../../domain/card/api/cards.types";
import { useAsyncState } from "../../../../../shared/hooks/useAsyncState";

export const useCardRegister = () => {
  const { asyncState, setLoading, setSuccess, setError } = useAsyncState();

  const registerCard = async (
    postCardInformation: CardRegisterRequestBody,
    onSuccess: () => void,
    onError: (error: CardRegisterError | Error) => void,
  ) => {
    try {
      setLoading();
      await requestRegisterCard(postCardInformation);

      setSuccess();
      onSuccess();
    } catch (error) {
      setError();
      onError(error as CardRegisterError | Error);
    }
  };

  return { asyncState, registerCard };
};
