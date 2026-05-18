import { useNavigate } from "react-router-dom";
import { useAsyncState } from "../../../shared/hooks/useAsyncState";
import {
  requestRegisterCard,
  type ErrorInformation,
  type PostCardRequestBody,
} from "../api/card";
import { useState } from "react";

export const useCardRegister = () => {
  const navigate = useNavigate();

  const { asyncState, setLoading, setSuccess, setError } = useAsyncState();
  const [cardRegisterError, setCardRegisterError] = useState<
    Error | ErrorInformation | null
  >(null);

  const registerCard = async (postCardInformation: PostCardRequestBody) => {
    try {
      setLoading();
      const id = await requestRegisterCard(postCardInformation);

      console.log(`카드 등록 성공!,id : ${id}`);
      setSuccess();
      navigate("/cards");
    } catch (error) {
      setError();
      setCardRegisterError(error as Error | ErrorInformation);
    }
  };

  return { asyncState, cardRegisterError, registerCard };
};
