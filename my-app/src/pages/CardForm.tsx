import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import Card from "@/components/Card/Card";
import CardNumberInputSection from "@/components/CardForm/CardNumberInputSection/CardNumberInputSection.tsx";
import CardCompanySelectSection from "@/components/CardForm/CardCompanySelectSection/CardCompanySelectSection.tsx";
import ExpiryDateInputSection from "@/components/CardForm/ExpiryDateInputSection/ExpiryDateInputSection.tsx";
import CvcInputSection from "@/components/CardForm/CvcInputSection/CvcInputSection.tsx";
import PasswordInputSection from "@/components/CardForm/PasswordInputSection/PasswordInputSection.tsx";
import CardFormLayout from "@/components/CardForm/CardFormLayout/CardFormLayout.tsx";
import useCardForm from "@/hooks/useCardForm.ts";
import { createCard } from "@/api/cards";
import { ROUTES } from "@/constants/routes";
import { ERROR_CODES } from "@/constants/errorCodes";
import { useState } from "react";
type Status = "idle" | "loading" | "success" | "error";

const CardForm = () => {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

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
  const hasServerError = Object.keys(serverErrors).length > 0;
  const canSubmit = isValid && !hasServerError;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit || status === "loading") return;
    setStatus("loading");

    try {
      await createCard({
        number: cardInfo.numbers.join(" "),
        expirationDate: cardInfo.expiry.join("/"),
        cvc: cardInfo.cvc,
        issuerCode: cardInfo.company,
      });
      setStatus("success");
      navigate(ROUTES.COMPLETE, { state: { numbers: cardInfo.numbers[0], brand } });
    } catch (error) {
      const { code, message } = error as { code: string; message: string };
      const fieldErrorCodes = Object.values(ERROR_CODES) as string[];
      if (fieldErrorCodes.includes(code)) {
        setServerErrors({ [code]: message });
      } else {
        alert("카드 등록에 실패했습니다. 잠시 후 다시 시도해주세요.");
      }
      setStatus("error");
    }
  };

  const clearServerError = (key: string) => {
    setServerErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleCardNumberChange = (v: string[]) => {
    clearServerError(ERROR_CODES.INVALID_CARD_NUMBER);
    cardNumberHandler(v);
  };

  const handleExpiryChange = (v: string[]) => {
    clearServerError(ERROR_CODES.INVALID_EXPIRATION_DATE);
    expiryHandler(v);
  };

  const handleCvcChange = (v: string) => {
    clearServerError(ERROR_CODES.INVALID_CVC);
    cvcHandler(v);
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

      <CardFormLayout canSubmit={canSubmit} onSubmit={handleSubmit} status={status}>
        {step >= 4 && <PasswordInputSection onChange={passwordHandler} inputValue={cardInfo.password} />}
        {step >= 3 && (
          <CvcInputSection
            onChange={handleCvcChange}
            serverError={serverErrors[ERROR_CODES.INVALID_CVC]}
            inputValue={cardInfo.cvc}
          />
        )}
        {step >= 2 && (
          <ExpiryDateInputSection
            serverError={serverErrors[ERROR_CODES.INVALID_EXPIRATION_DATE]}
            onChange={handleExpiryChange}
            inputValues={cardInfo.expiry}
          />
        )}
        {step >= 1 && <CardCompanySelectSection onChange={companyHandler} inputValue={cardInfo.company} />}
        <CardNumberInputSection
          onChange={handleCardNumberChange}
          serverError={serverErrors[ERROR_CODES.INVALID_CARD_NUMBER]}
          inputValues={cardInfo.numbers}
          fieldConfig={fieldConfig}
        />
      </CardFormLayout>
    </div>
  );
};

export default CardForm;
