import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCard } from "./useCard";

const CARD_COMPANY_INFO = {
  "": "",
  bc: "BC카드",
  shinhan: "신한카드",
  kakaobank: "카카오뱅크",
  hyundai: "현대카드",
  woori: "우리카드",
  lotte: "롯데카드",
  hana: "하나카드",
  kb: "국민카드",
};

export function useCardSubmit() {
  const { cardCompany, cardNumbers, isFormComplete } = useCard();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/register-complete", {
      state: {
        cardFirstSegment: cardNumbers.first,
        cardName: CARD_COMPANY_INFO[cardCompany],
      },
    });
  };

  return {
    handleSubmit,
    isFormComplete,
  };
}
