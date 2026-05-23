import { useState } from "react";
import { NetworkError, HttpError } from "../Api";
import { createCard } from "../Api";

export default function useCardSubmit() {
  const [formErrorCodes, setFormErrorCodes] = useState<string[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const getCodes = (
    errorMessages: Record<
      string,
      { code: string; message: string } | null | undefined
    >,
  ) => Object.values(errorMessages).filter(Boolean).map((message) => message!.code);

  const submitCard = async (
    cardNumber: string,
    cardExpiryDate: string,
    cardCVC: string,
    cardBrand: string,
  ): Promise<boolean> => {
    try {
      setSubmitError(null);
      setFormErrorCodes([]);
      await createCard(cardNumber, cardExpiryDate, cardCVC, cardBrand);
      return true;
    } catch (error) {
      handleFormError(error);
      return false;
    }
  };

  const handleFormError = (error: unknown) => {
    if (error instanceof NetworkError) {
      setSubmitError(error.message);
      return;
    }
    if (error instanceof HttpError) {
      if (error.errorMessages) {
        const codes = getCodes(error.errorMessages);
        setFormErrorCodes(codes);
      } else {
        setSubmitError("카드 등록에 실패했어요. 입력 정보를 확인해 주세요.");
      }
    }
  };

  return { formErrorCodes, submitError, submitCard } as {
    formErrorCodes: string[];
    submitError: string | null;
    submitCard: typeof submitCard;
  };
}
