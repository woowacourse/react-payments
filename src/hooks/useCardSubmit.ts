import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CardNumbers } from "../components/InputField/CardNumberField";
import type { ExpNumber } from "../components/InputField/ExpNumberField";

export default function useCardSubmit({
  cardNumbers,
  expNumbers,
  cvcNumbers,
  cardFirm,
}: {
  cardNumbers: CardNumbers;
  expNumbers: ExpNumber;
  cvcNumbers: string;
  cardFirm: { value: string; label: string };
}) {
  const [serverError, setServerError] = useState<{
    code: string;
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  //완료 페이지 이동
  const handleComplete = async () => {
    try {
      setIsSubmitting(true);

      const res = await fetch("/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          number: Object.values(cardNumbers).join(""),
          expirationDate: Object.values(expNumbers).join("/"),
          cvc: cvcNumbers,
          issuerCode: cardFirm.value,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        setServerError(error);
        return;
      }
      setServerError(null);
      navigate("/cards");
    } catch {
      alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return { serverError, handleComplete, isSubmitting };
}
