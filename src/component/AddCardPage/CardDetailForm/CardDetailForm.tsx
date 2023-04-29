import React, { useRef } from "react";

import CardNumberInput from "./CardNumberInput/CardNumberInput";
import CardDateInput from "./CardDateInput/CardDateInput";
import CardOwnerNameInput from "./CardOwnerNameInput/CardOwnerNameInput";
import CardCVCInput from "./CardCVCInput/CardCVCInput";
import CardPasswordInput from "./CardPasswordInput/CardPasswordInput";

import St from "./CardDetailFormStyled";
import CardCompanyModal from "../../CardCompanyModal/CardCompanyModal";
import useModal from "../../../hooks/useModal";
import useCardCompany from "../../../hooks/useCardCompany";

type CardDetailFormProps = {
  submitCreditCard: (e: React.FormEvent<HTMLFormElement>) => void;
};

function CardDetailForm({ submitCreditCard }: CardDetailFormProps) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { cardCompany } = useCardCompany();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const goNext = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!cardCompany) {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <St.Form onSubmit={submitCreditCard}>
      <CardNumberInput inputRefs={inputRefs} />
      <CardDateInput inputRefs={inputRefs} />
      <CardOwnerNameInput inputRefs={inputRefs} />
      <CardCVCInput inputRefs={inputRefs} />
      <CardPasswordInput inputRefs={inputRefs} />
      <St.SubmitButton type="submit" value={"다음"} onClick={goNext} />
      {isModalOpen && <CardCompanyModal closeModal={closeModal} />}
    </St.Form>
  );
}

export default CardDetailForm;
