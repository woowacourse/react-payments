import { css } from "@emotion/react";
import Card from "../components/Card/Card";
import CardNumberInputSection from "../components/CardForm/CardNumberInputSection/CardNumberInputSection.tsx";
import CardCompanySelectSection from "../components/CardForm/CardCompanySelectSection/CardCompanySelectSection.tsx";
import ExpiryDateInputSection from "../components/CardForm/ExpiryDateInputSection/ExpiryDateInputSection.tsx";
import CvcInputSection from "../components/CardForm/CvcInputSection/CvcInputSection.tsx";
import PasswordInputSection from "../components/CardForm/PasswordInputSection/PasswordInputSection.tsx";
import useCardForm from "../hooks/useCardForm.ts";

const CardForm = () => {
  const {
    cardInfo,
    step,
    brand,
    fieldConfig,
    isValid,
    cardNumberHandler,
    selectCompanyHandler,
    expiryHandler,
    cvcHandler,
    passwordHandler,
    handleSubmit,
  } = useCardForm();

  return (
    <>
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

        <div
          css={css`
            width: 100%;
            flex: 1;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 16px;
            scrollbar-width: none;
            &::-webkit-scrollbar {
              display: none;
            }
          `}
        >
          <form id="card-form" onSubmit={handleSubmit}>
            {step >= 4 && (
              <PasswordInputSection onChange={passwordHandler} inputValue={cardInfo.password} />
            )}
            {step >= 3 && <CvcInputSection onChange={cvcHandler} inputValue={cardInfo.cvc} />}
            {step >= 2 && (
              <ExpiryDateInputSection onChange={expiryHandler} inputValues={cardInfo.expiry} />
            )}
            {step >= 1 && (
              <CardCompanySelectSection onChange={selectCompanyHandler} inputValue={cardInfo.company} />
            )}
            <CardNumberInputSection
              onChange={cardNumberHandler}
              inputValues={cardInfo.numbers}
              fieldConfig={fieldConfig}
            />
          </form>
        </div>
        {isValid && (
          <button
            form="card-form"
            css={css`
              width: calc(100% + 60px);
              margin-bottom: -30px;
              background: #333333;
              color: #f3f3f3;
              height: 52px;
            `}
          >
            확인
          </button>
        )}
      </div>
    </>
  );
};

export default CardForm;
