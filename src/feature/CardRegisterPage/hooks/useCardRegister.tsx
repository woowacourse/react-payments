import { useAsyncState } from "../../../shared/hooks/useAsyncState";
import {
  requestRegisterCard,
  type ErrorInformation,
  type PostCardRequestBody,
} from "../api/card";

export const useCardRegister = () => {
  const { asyncState, setLoading, setSuccess, setError } = useAsyncState();

  const registerCard = async (
    postCardInformation: PostCardRequestBody,
    onSuccess: () => void,
    onError: (error: ErrorInformation | Error) => void,
  ) => {
    try {
      setLoading();
      await requestRegisterCard(postCardInformation);

      setSuccess();
      onSuccess();
    } catch (error) {
      setError();
      onError(error as ErrorInformation | Error);
    }
  };

  return { asyncState, registerCard };
};
