import { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardRegister/CardForm";
import CardPreview from "../components/CardRegister/CardPreview";
import { SubmitButton } from "../components/CardRegisterComplete/SubmitButton";
import { isCardFormComplete } from "../utils/validators";
import type { CardBrand, CardFormState } from "../types";
import { ISSUER_CODE_MAP } from "../types";

const View = styled.div`
  width: 100%;
  max-width: 376px;
  margin: 0 auto;
  padding: 16px 32px;
`;

interface CardRegisterPageProps {
  cardFormState: CardFormState;
  brand: CardBrand | undefined;
  handleSetFormState: (newState: CardFormState) => void;
}

export function CardRegisterPage(props: CardRegisterPageProps) {
  const { cardFormState, brand, handleSetFormState } = props;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState<{
    cardNumber?: string;
    cvc?: string;
    expirationDate?: string;
  }>({});

  const CODE_TO_FIELD: Record<string, keyof typeof serverErrors> = {
    INVALID_CARD_NUMBER: "cardNumber",
    INVALID_CVC: "cvc",
    INVALID_EXPIRATION_DATE: "expirationDate",
  };

  const handleFormStateChange = (newState: CardFormState) => {
    if (
      newState.expiryMonth !== cardFormState.expiryMonth ||
      newState.expiryYear !== cardFormState.expiryYear
    ) {
      setServerErrors((prev) => ({ ...prev, expirationDate: undefined }));
    }
    if (newState.cvc !== cardFormState.cvc) {
      setServerErrors((prev) => ({ ...prev, cvc: undefined }));
    }
    if (newState.cardNumberSegments !== cardFormState.cardNumberSegments) {
      setServerErrors((prev) => ({ ...prev, cardNumber: undefined }));
    }
    handleSetFormState(newState);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setServerErrors({});
    const issuerCode = ISSUER_CODE_MAP[cardFormState.cardCompany];

    try {
      const res = await fetch(`${import.meta.env.BASE_URL}cards`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          number: cardFormState.cardNumberSegments.join(""),
          expirationDate: `${cardFormState.expiryMonth}/${cardFormState.expiryYear}`,
          cvc: cardFormState.cvc,
          issuerCode,
        }),
      });
      if (res.ok) {
        navigate("/cards/register/success");
      } else if (res.status === 400) {
        const { code, message } = await res.json();
        const field = CODE_TO_FIELD[code];
        if (field) setServerErrors({ [field]: message });
      } else {
        alert("카드 등록에 실패했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View>
      <CardPreview
        cardBrand={brand}
        cardNumberSegments={cardFormState.cardNumberSegments}
        expiryMonth={cardFormState.expiryMonth}
        expiryYear={cardFormState.expiryYear}
        cardCompany={cardFormState.cardCompany}
      />
      <CardForm
        formState={cardFormState}
        setFormState={handleFormStateChange}
        brand={brand}
        serverErrors={serverErrors}
      />
      <SubmitButton
        isCardFormComplete={isCardFormComplete(cardFormState, brand)}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
      />
    </View>
  );
}
