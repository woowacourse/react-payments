import { useState } from "react";
import type { CardNumbers } from "../components/InputField/CardNumberField";
import type { ExpNumber } from "../components/InputField/ExpNumberField";
import { cardsApi } from "../api/cardsApi";
import convertCardInfo from "../utils/convertCardInfo";

export default function useCardSubmit({
  cardNumbers,
  expNumbers,
  cvcNumbers,
  cardFirm,
  onSuccess,
}: {
  cardNumbers: CardNumbers;
  expNumbers: ExpNumber;
  cvcNumbers: string;
  cardFirm: { value: string; label: string };
  onSuccess: () => void;
}) {
  const [serverError, setServerError] = useState<{
    code: string;
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleComplete = async () => {
    try {
      setIsSubmitting(true);

      const res = await cardsApi.post(
        convertCardInfo({ cardNumbers, expNumbers, cvcNumbers, cardFirm }),
      );

      if (!res.ok) {
        const error = await res.json();
        setServerError(error);
        return;
      }
      setServerError(null);
      onSuccess();
    } catch {
      alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return { serverError, handleComplete, isSubmitting, onSuccess };
}
