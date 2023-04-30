import React from "react";
import St from "./CardDetailFormStyled";
import CardCompanyInput from "./CardCompanyInput/CardCompanyInput";
import CardNumberInput from "./CardNumberInput/CardNumberInput";
import CardDateInput from "./CardDateInput/CardDateInput";
import CardOwnerNameInput from "./CardOwnerNameInput/CardOwnerNameInput";
import CardCVCInput from "./CardCVCInput/CardCVCInput";
import CardPasswordInput from "./CardPasswordInput/CardPasswordInput";
import { SubmitButton } from "../../common/Button";
import { useNavigate } from "react-router";

function CardDetailForm() {
  const navigate = useNavigate();

  const goToResultPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("result", { replace: true });
  };

  return (
    <St.Form onSubmit={goToResultPage}>
      <CardCompanyInput />
      <CardNumberInput />
      <CardDateInput />
      <CardOwnerNameInput />
      <CardCVCInput />
      <CardPasswordInput />
      <SubmitButton type="submit" value={"다음"} />
    </St.Form>
  );
}

export default CardDetailForm;
