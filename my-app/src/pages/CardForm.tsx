import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card/Card";
import CardNumberInputSection from "../components/CardForm/CardNumberInputSection/CardNumberInputSection.tsx";
import CardCompanySelectSection from "../components/CardForm/CardCompanySelectSection/CardCompanySelectSection.tsx";
import ExpiryDateInputSection from "../components/CardForm/ExpiryDateInputSection/ExpiryDateInputSection.tsx";
import CvcInputSection from "../components/CardForm/CvcInputSection/CvcInputSection.tsx";
import PasswordInputSection from "../components/CardForm/PasswordInputSection/PasswordInputSection.tsx";
import CardFormLayout from "../components/CardForm/CardFormLayout/CardFormLayout.tsx";
import useCardForm from "../hooks/useCardForm.ts";

const CardForm = () => {
  const navigate = useNavigate();
  const {
    cardInfo,
    step,
    brand,
    fieldConfig,
    isValid,
    cardNumberHandler,
    companyHandler,
    expiryHandler,
    cvcHandler,
    passwordHandler,
  } = useCardForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    const res = await fetch("/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        number: cardInfo.numbers.join(" "),
        expirationDate: cardInfo.expiry.join("/"),
        cvc: cardInfo.cvc,
        issuerCode: cardInfo.company,
      }),
    });

    if (!res.ok) {
      const { message } = await res.json();
      alert(message);
      return;
    }

    navigate("/complete", { state: { numbers: cardInfo.numbers[0], brand } });
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 30px;
        align-items: center;
      `}
    >
      <div
        css={css`
          padding: 45px 0;
        `}
      >
        <Card cardInfo={cardInfo} brand={brand} />
      </div>

      <CardFormLayout isValid={isValid} onSubmit={handleSubmit}>
        {step >= 4 && (
          <PasswordInputSection onChange={passwordHandler} inputValue={cardInfo.password} />
        )}
        {step >= 3 && <CvcInputSection onChange={cvcHandler} inputValue={cardInfo.cvc} />}
        {step >= 2 && (
          <ExpiryDateInputSection onChange={expiryHandler} inputValues={cardInfo.expiry} />
        )}
        {step >= 1 && (
          <CardCompanySelectSection onChange={companyHandler} inputValue={cardInfo.company} />
        )}
        <CardNumberInputSection
          onChange={cardNumberHandler}
          inputValues={cardInfo.numbers}
          fieldConfig={fieldConfig}
        />
      </CardFormLayout>
    </div>
  );
};

export default CardForm;
