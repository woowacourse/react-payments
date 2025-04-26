import { useNavigate } from "react-router";

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
import type { AddCardCompleteLocationState } from "@/AddCard/types/location";

import styles from "./AddCardForm.module.css";
import { useFocusControl } from "@/AddCard/hooks/useFocusControl";
import { locations } from "@/AddCard/constants/locations";

interface AddCardFormProps {
  addCardState: CardState & CardHandlers;
  currentStep: FlowStep;
  allValid: boolean;
}

function AddCardForm({
  addCardState: {
    cardNumberState,
    handleCardNumberChange,

    selectedBrand,
    setSelectedBrand,

    expireDate,
    handleExpireMonthChange,
    handleExpireYearChange,
    handleExpireMonthBlur,

    CVCState,
    handleCVCChange,

    passwordState,
    handlePasswordChange,
  },
  currentStep,
  allValid,
}: AddCardFormProps) {
  const navigate = useNavigate();
  const currentIndex = STEP_ORDER.indexOf(currentStep);
  const {
    firstCardNumberInputRef,
    brandDropdownRef,
    expireMonthInputRef,
    cvcInputRef,
    passwordInputRef,
    addCardButtonRef,
  } = useFocusControl(currentStep, allValid);

  function handleAddCardButton() {
    const state: AddCardCompleteLocationState = {
      firstCardNumber: cardNumberState["first"].value,
      selectedBrand: selectedBrand,
    };
    navigate(locations.ADD_CARD_COMPLETE.pathname, { state });
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
      aria-label="카드 등록 양식"
      role="form"
      name="cc-number"
      autoComplete="cc-number"
    >
      <div className={styles.inputsContainer}>
        <CardInputBox
          title="결제할 카드 번호를 입력해 주세요"
          guideText="본인 명의의 카드만 결제 가능합니다."
          InputComponents={
            <CardNumberInputs
              ref={firstCardNumberInputRef}
              cardNumberState={cardNumberState}
              handleCardNumberChange={handleCardNumberChange}
            />
          }
        />

        {currentIndex >= STEP_ORDER.indexOf("CARD_BRAND") && (
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

        {currentIndex >= STEP_ORDER.indexOf("EXPIRE_DATE") && (
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

        {currentIndex >= STEP_ORDER.indexOf("CVC") && (
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

        {currentIndex >= STEP_ORDER.indexOf("PASSWORD") && (
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
      </div>

      {allValid && (
        <div className={styles.buttonWrapper}>
          <Button
            ref={addCardButtonRef}
            variant="default"
            size="large"
            fullWidth={true}
            onClick={handleAddCardButton}
          >
            확인
          </Button>
        </div>
      )}
    </form>
  );
}

export default AddCardForm;
