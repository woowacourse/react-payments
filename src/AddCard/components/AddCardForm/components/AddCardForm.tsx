import styles from "./AddCardForm.module.css";
import CardInputBox from "./CardInputBox/CardInputBox";
import CardNumberInputs, {
  type CardNumberInputsProps,
} from "./CardNumber/components/CardNumberInputs/CardNumberInputs";
import CardExpireDateInputs, {
  type CardExpireDateInputsProps,
} from "./ExpireDate/components/CardExpireDateInputs/CardExpireDateInputs";
import CVCInputs, { type CVCInputsProps } from "./CVC/components/CVCInputs";

interface AddCardFormProps {
  addCardState: CardNumberInputsProps &
    CardExpireDateInputsProps &
    CVCInputsProps;
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
  },
}: AddCardFormProps) {
  return (
    <form className={styles.form}>
      <CardInputBox
        title="결제할 카드 번호를 입력해 주세요"
        guideText="본인 명의의 카드만 결제 가능합니다."
        InputComponent={
          <CardNumberInputs
            cardNumberState={cardNumberState}
            handleCardNumberChange={handleCardNumberChange}
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
