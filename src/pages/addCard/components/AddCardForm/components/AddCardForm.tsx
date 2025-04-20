import styles from "./AddCardForm.module.css";
import CardInputBox from "@card/CardInputBox/CardInputBox";
import CardNumberInputs, {
  type CardNumberInputsProps,
} from "@card/CardNumber/components/CardNumberInputs/CardNumberInputs";
import CardExpireDateInputs, {
  type CardExpireDateInputsProps,
} from "@card/ExpireDate/components/CardExpireDateInputs/CardExpireDateInputs";
import CVCInputs, { type CVCInputsProps } from "@card/CVC/components/CVCInputs";
import CardTypeDropdown, {
  CardTypeDropdownProps,
} from "@card/CardType/components/CardTypeDropdown";
import CardOwnerInput, {
  type CardOwnerInputProps,
} from "@/card/CardOwner/components/CardOwnerInput";

interface AddCardFormProps {
  addCardState: CardNumberInputsProps &
    CardTypeDropdownProps &
    CardExpireDateInputsProps &
    CardOwnerInputProps &
    CVCInputsProps;
}

function AddCardForm({ addCardState }: AddCardFormProps) {
  const {
    cardNumberState,
    inputRefs,
    handleCardNumberChange,
    cardType,
    handleCardTypeChange,
    expireDate,
    handleExpireMonthChange,
    handleExpireYearChange,
    handleExpireMonthBlur,
    cardOwner,
    handleCardOwnerChange,
    CVCState,
    handleCVCChange,
  } = addCardState;

  return (
    <form className={styles.form}>
      <CardInputBox
        title="결제할 카드 번호를 입력해 주세요"
        guideText="본인 명의의 카드만 결제 가능합니다."
        InputComponent={
          <CardNumberInputs
            inputRefs={inputRefs}
            cardNumberState={cardNumberState}
            handleCardNumberChange={handleCardNumberChange}
          />
        }
      />
      <CardInputBox
        title="카드 소유자 이름을 입력해 주세요"
        InputComponent={
          <CardOwnerInput
            cardOwner={cardOwner}
            handleCardOwnerChange={handleCardOwnerChange}
          />
        }
      />
      <CardInputBox
        title="카드사를 선택해 주세요"
        guideText="현재 국내 카드사만 가능합니다."
        InputComponent={
          <CardTypeDropdown
            cardType={cardType}
            handleCardTypeChange={handleCardTypeChange}
          />
        }
      />
      <CardInputBox
        title="카드 유효기간을 입력해 주세요"
        guideText="월/년도(MMYY)를 순서대로 입력해 주세요."
        InputComponent={
          <CardExpireDateInputs
            expireDate={expireDate}
            handleExpireMonthChange={handleExpireMonthChange}
            handleExpireYearChange={handleExpireYearChange}
            handleExpireMonthBlur={handleExpireMonthBlur}
          />
        }
      />
      <CardInputBox
        title="CVC 번호를 입력해 주세요"
        InputComponent={
          <CVCInputs CVCState={CVCState} handleCVCChange={handleCVCChange} />
        }
      />
    </form>
  );
}

export default AddCardForm;
