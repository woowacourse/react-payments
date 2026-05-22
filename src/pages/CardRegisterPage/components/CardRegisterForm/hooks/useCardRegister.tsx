import { requestRegisterCard } from "../../../../../domain/card/api/cards";
import { CardRegisterError } from "../../../../../domain/card/api/cards.error";
import type { CardRegisterRequestBody } from "../../../../../domain/card/api/cards.types";
import { useAsyncState } from "../../../../../shared/hooks/useAsyncState";

export const useCardRegister = () => {
  const { asyncState, setLoading, setSuccess, setError } = useAsyncState();

  const registerCard = async (
    postCardInformation: CardRegisterRequestBody,
    onSuccess: () => void,
    onError: (error: CardRegisterError) => void,
  ) => {
    try {
      setLoading();
      await requestRegisterCard(postCardInformation);

      setSuccess();
      onSuccess();
    } catch (error) {
      setError();
      if (error instanceof CardRegisterError) {
        onError(error as CardRegisterError);
        return;
      }

      alert("카드 등록 중 알 수 없는 에러가 발생했습니다.");
    }
  };

  return { asyncState, registerCard };
};
