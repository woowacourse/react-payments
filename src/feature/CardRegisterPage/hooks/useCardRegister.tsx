import { useAsyncState } from "../../../shared/hooks/useAsyncState";
import type { RequestErrorInformation } from "../../../shared/types/api";
import { requestRegisterCard } from "../api/card";
import type { PostCardRequestBody } from "../types/card";

export const useCardRegister = () => {
  const { asyncState, setLoading, setSuccess, setError } = useAsyncState();

  const registerCard = async (
    postCardInformation: PostCardRequestBody,
    onSuccess: () => void,
    onError: (error: RequestErrorInformation | Error) => void,
  ) => {
    try {
      setLoading();
      await requestRegisterCard(postCardInformation);

      setSuccess();
      onSuccess();
    } catch (error) {
      setError();
      onError(error as RequestErrorInformation | Error);
    }
  };

  return { asyncState, registerCard };
};
