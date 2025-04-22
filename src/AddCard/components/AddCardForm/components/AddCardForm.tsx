import styles from "./AddCardForm.module.css";
import CardInputBox from "./CardInputBox/CardInputBox";
import CardNumberInputs, {
  type CardNumberInputsProps,
} from "./CardNumber/components/CardNumberInputs/CardNumberInputs";
import CardExpireDateInputs, {
  type CardExpireDateInputsProps,
} from "./ExpireDate/components/CardExpireDateInputs/CardExpireDateInputs";
import CVCInputs, { type CVCInputsProps } from "./CVC/components/CVCInputs";
import CardBrandDropdown, {
  type BrandDropdownProps,
} from "./CardBrand/components/CardBrandDropdown";
import { FlowStep, STEP_ORDER } from "../../../hooks/useCardRegistrationFlow";

interface AddCardFormProps {
  addCardState: CardNumberInputsProps &
    CardExpireDateInputsProps &
    CVCInputsProps &
    BrandDropdownProps;

  currentStep: FlowStep;
}

function AddCardForm({
  addCardState: {
    cardNumberState,
    handleCardNumberChange,
    expireDate,
    handleExpireMonthChange,
    handleExpireYearChange,
    handleExpireMonthBlur,
    CVCState,
    handleCVCChange,
    selectedBrand,
    setSelectedBrand,
  },
  currentStep,
}: AddCardFormProps) {
  const currentIndex = STEP_ORDER.indexOf(currentStep);

  return (
    <form className={styles.form}>
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
            <CVCInputs CVCState={CVCState} handleCVCChange={handleCVCChange} />
          }
        />
      )}
    </form>
  );
}

export default AddCardForm;
