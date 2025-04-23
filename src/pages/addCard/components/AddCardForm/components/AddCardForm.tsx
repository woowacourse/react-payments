import styles from "./AddCardForm.module.css";
import CardInputBox from "@card/CardInputBox/CardInputBox";
import CardNumberInputs, {
  type CardNumberInputsProps,
} from "@card/CardNumber/components/CardNumberInputs/CardNumberInputs";
import CardExpireDateInputs, {
  type CardExpireDateInputsProps,
} from "@card/ExpireDate/components/CardExpireDateInputs/CardExpireDateInputs";
import CVCInput, { type CVCInputsProps } from "@/card/CVC/components/CVCInput";
import CardTypeDropdown, {
  CardTypeDropdownProps,
} from "@card/CardType/components/CardTypeDropdown";
import CardPasswordInput, {
  CardPasswordInputProps,
} from "@/card/CardPassword/components/CardPasswordInput";
import {
  ADD_CARD_FORM_STEPS,
  AddCardFormStep,
} from "@/pages/addCard/hooks/useAddCardFormStep";
import { Fragment } from "react/jsx-runtime";
import SwitchCase from "@/components/SwitchCase/SwitchCase";

interface AddCardFormProps {
  addCardState: {
    addCardFormSteps: AddCardFormStep[];
    isAddFormSubmit: boolean;
  } & CardNumberInputsProps &
    CardTypeDropdownProps &
    CardExpireDateInputsProps &
    CVCInputsProps &
    CardPasswordInputProps;
}

function AddCardForm({ addCardState }: AddCardFormProps) {
  const {
    addCardFormSteps,
    cardNumberState,
    cardNumberInputRefs,
    handleCardNumberChange,
    cardType,
    handleCardTypeChange,
    expireDate,
    expireDateInputRefs,
    handleExpireMonthChange,
    handleExpireYearChange,
    handleExpireMonthBlur,
    CVCState,
    handleCVCChange,
    cardPasswordState,
    handleCardPasswordChange,
    isAddFormSubmit,
  } = addCardState;

  return (
    <form className={styles.form}>
      {addCardFormSteps.map((step) => (
        <Fragment key={step}>
          {
            <SwitchCase
              value={step}
              caseBy={{
                [ADD_CARD_FORM_STEPS.CARD_NUMBER]: () => (
                  <CardInputBox
                    title="결제할 카드 번호를 입력해 주세요"
                    guideText="본인 명의의 카드만 결제 가능합니다."
                    InputComponent={
                      <CardNumberInputs
                        cardNumberInputRefs={cardNumberInputRefs}
                        cardNumberState={cardNumberState}
                        handleCardNumberChange={handleCardNumberChange}
                      />
                    }
                  />
                ),
                [ADD_CARD_FORM_STEPS.CARD_TYPE]: () => (
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
                ),
                [ADD_CARD_FORM_STEPS.EXPIRE_DATE]: () => (
                  <CardInputBox
                    title="카드 유효기간을 입력해 주세요"
                    guideText="월/년도(MMYY)를 순서대로 입력해 주세요."
                    InputComponent={
                      <CardExpireDateInputs
                        expireDate={expireDate}
                        expireDateInputRefs={expireDateInputRefs}
                        handleExpireMonthChange={handleExpireMonthChange}
                        handleExpireYearChange={handleExpireYearChange}
                        handleExpireMonthBlur={handleExpireMonthBlur}
                      />
                    }
                  />
                ),
                [ADD_CARD_FORM_STEPS.CVC]: () => (
                  <CardInputBox
                    title="CVC 번호를 입력해 주세요"
                    InputComponent={
                      <CVCInput
                        CVCState={CVCState}
                        handleCVCChange={handleCVCChange}
                      />
                    }
                  />
                ),
                [ADD_CARD_FORM_STEPS.CARD_PASSWORD]: () => (
                  <CardInputBox
                    title="비밀번호를 입력해 주세요"
                    guideText="앞의 2자리를 입력해 주세요"
                    InputComponent={
                      <CardPasswordInput
                        cardPasswordState={cardPasswordState}
                        handleCardPasswordChange={handleCardPasswordChange}
                      />
                    }
                  />
                ),
              }}
            />
          }
        </Fragment>
      ))}
      {isAddFormSubmit && (
        <button type="submit" className={styles.submitButton}>
          확인
        </button>
      )}
    </form>
  );
}

export default AddCardForm;
