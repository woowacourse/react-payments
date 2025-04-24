import { useNavigate } from "react-router";
import { useRef, useEffect } from "react";

import Button from "@/components/Button/Button";
import CardInputBox from "./CardInputBox/CardInputBox";
import CardNumberInputs from "./CardNumber/components/CardNumberInputs/CardNumberInputs";
import CardBrandDropdown from "./CardBrand/components/CardBrandDropdown";
import CardExpireDateInputs from "./ExpireDate/components/CardExpireDateInputs/CardExpireDateInputs";
import CVCInputs from "./CVC/components/CVCInputs";
import PasswordInputs from "./Password/components/PasswordInputs";

import { STEP_ORDER } from "@/AddCard/constants";
import type { FlowStep } from "@/AddCard/types/hook";
import type { CardState, CardHandlers } from "@/AddCard/types/card";

import styles from "./AddCardForm.module.css";

interface AddCardFormProps {
  addCardState: CardState & CardHandlers;
  currentStep: FlowStep;
  allValid: boolean;
}

function AddCardForm({
  addCardState: {
    cardNumberState,
    expireDate,
    CVCState,
    selectedBrand,
    passwordState,
    handleCardNumberChange,
    handleExpireMonthChange,
    handleExpireYearChange,
    handleExpireMonthBlur,
    handleCVCChange,
    handlePasswordChange,
    setSelectedBrand,
  },
  currentStep,
  allValid,
}: AddCardFormProps) {
  const navigate = useNavigate();
  const currentIndex = STEP_ORDER.indexOf(currentStep);

  const brandDropdownRef = useRef<HTMLSelectElement>(null);
  const expireMonthInputRef = useRef<HTMLInputElement>(null);
  const cvcInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const addCardButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentIndex === 1) {
        brandDropdownRef.current?.focus();
      } else if (currentIndex === 2) {
        expireMonthInputRef.current?.focus();
      } else if (currentIndex === 3) {
        cvcInputRef.current?.focus();
      } else if (currentIndex === 4) {
        passwordInputRef.current?.focus();
      } else if (allValid) {
        addCardButtonRef.current?.focus();
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, allValid]);

  function handleAddCardButton() {
    navigate("/AddCardComplete", {
      state: {
        firstCardNumber: cardNumberState["first"].value,
        selectedBrand: selectedBrand,
      },
    });
  }

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <CardInputBox
        title="결제할 카드 번호를 입력해 주세요"
        guideText="본인 명의의 카드만 결제 가능합니다."
        InputComponents={
          <CardNumberInputs
            cardNumberState={cardNumberState}
            handleCardNumberChange={handleCardNumberChange}
          />
        }
      />

      {currentIndex >= 1 && (
        <CardInputBox
          title="카드사를 선택해 주세요"
          guideText="현재 국내 카드사만 지원합니다."
          InputComponents={
            <CardBrandDropdown
              ref={brandDropdownRef}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
            />
          }
        />
      )}

      {currentIndex >= 2 && (
        <CardInputBox
          title="카드 유효기간을 입력해 주세요"
          guideText="월/년도(MMYY)를 순서대로 입력해 주세요."
          InputComponents={
            <CardExpireDateInputs
              ref={expireMonthInputRef}
              expireDate={expireDate}
              handleExpireMonthChange={handleExpireMonthChange}
              handleExpireYearChange={handleExpireYearChange}
              handleExpireMonthBlur={handleExpireMonthBlur}
            />
          }
        />
      )}

      {currentIndex >= 3 && (
        <CardInputBox
          title="CVC 번호를 입력해 주세요"
          InputComponents={
            <CVCInputs
              ref={cvcInputRef}
              CVCState={CVCState}
              handleCVCChange={handleCVCChange}
            />
          }
        />
      )}

      {currentIndex >= 4 && (
        <CardInputBox
          title="비밀번호를 입력해주세요"
          InputComponents={
            <PasswordInputs
              ref={passwordInputRef}
              passwordState={passwordState}
              handlePasswordChange={handlePasswordChange}
            />
          }
        />
      )}

      {allValid && (
        <Button
          ref={addCardButtonRef}
          variant="default"
          size="large"
          fullWidth={true}
          fixed={true}
          onClick={handleAddCardButton}
        >
          확인
        </Button>
      )}
    </form>
  );
}

export default AddCardForm;
