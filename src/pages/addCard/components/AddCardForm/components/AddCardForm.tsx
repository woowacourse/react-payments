import styles from "./AddCardForm.module.css";
import CardInputBox from "@card/CardInputBox/CardInputBox";
import CardNumberInputs, {
  type CardNumberInputsProps,
} from "@card/CardNumber/components/CardNumberInput";
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
import useAddCardFormStep, {
  ADD_CARD_FORM_STEPS,
} from "../hooks/useAddCardFormStep";
import { Fragment } from "react/jsx-runtime";
import SwitchCase from "@/components/SwitchCase/SwitchCase";
import { useNavigate } from "react-router";
import { PAGE_URL } from "@/constants/pageUrl";
import { FormEvent } from "react";
import { getIsAddFormSubmit } from "../validation";

interface NextStepIndicator {
  isNextStep: boolean;
}

interface AddCardFormProps {
  addCardState: {
    controlledCardNumber: CardNumberInputsProps & NextStepIndicator;
    controlledCardType: CardTypeDropdownProps & NextStepIndicator;
    controlledExpireDate: CardExpireDateInputsProps & NextStepIndicator;
    controlledCVC: CVCInputsProps & NextStepIndicator;
    controlledCardPassword: CardPasswordInputProps;
  };
}

function AddCardForm({ addCardState }: AddCardFormProps) {
  const {
    controlledCardNumber,
    controlledCardType,
    controlledExpireDate,
    controlledCVC,
    controlledCardPassword,
  } = addCardState;
  const { cardNumberState, isNextStep: isCardNumberNextStep } =
    controlledCardNumber;
  const { cardType, isNextStep: isCardTypeNextStep } = controlledCardType;
  const { expireDate, isNextStep: isExpireDateNextStep } = controlledExpireDate;
  const { CVCState, isNextStep: isCVCNextStep } = controlledCVC;
  const { cardPasswordState } = controlledCardPassword;

  const addCardFormSteps = useAddCardFormStep([
    isCardNumberNextStep,
    isCardTypeNextStep,
    isExpireDateNextStep,
    isCVCNextStep,
  ]);

  const navigate = useNavigate();
  const handleAddCardFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(PAGE_URL.ADD_CARD_SUCCESS, {
      state: {
        firstCardNumber: cardNumberState.first.value,
        cardType,
      },
    });
  };

  const isAddFormSubmit = getIsAddFormSubmit({
    cardNumberState,
    cardType,
    expireDate,
    CVCState,
    cardPasswordState,
  });

  return (
    <form className={styles.form} onSubmit={handleAddCardFormSubmit}>
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
                      <CardNumberInputs {...controlledCardNumber} />
                    }
                  />
                ),
                [ADD_CARD_FORM_STEPS.CARD_TYPE]: () => (
                  <CardInputBox
                    title="카드사를 선택해 주세요"
                    guideText="현재 국내 카드사만 가능합니다."
                    InputComponent={
                      <CardTypeDropdown {...controlledCardType} />
                    }
                  />
                ),
                [ADD_CARD_FORM_STEPS.EXPIRE_DATE]: () => (
                  <CardInputBox
                    title="카드 유효기간을 입력해 주세요"
                    guideText="월/년도(MMYY)를 순서대로 입력해 주세요."
                    InputComponent={
                      <CardExpireDateInputs {...controlledExpireDate} />
                    }
                  />
                ),
                [ADD_CARD_FORM_STEPS.CVC]: () => (
                  <CardInputBox
                    title="CVC 번호를 입력해 주세요"
                    InputComponent={<CVCInput {...controlledCVC} />}
                  />
                ),
                [ADD_CARD_FORM_STEPS.CARD_PASSWORD]: () => (
                  <CardInputBox
                    title="비밀번호를 입력해 주세요"
                    guideText="앞의 2자리를 입력해 주세요"
                    InputComponent={
                      <CardPasswordInput {...controlledCardPassword} />
                    }
                  />
                ),
              }}
            />
          }
        </Fragment>
      ))}
      {isAddFormSubmit && (
        <div className={styles.submitButtonContainer}>
          <button type="submit" className={styles.submitButton}>
            확인
          </button>
        </div>
      )}
    </form>
  );
}

export default AddCardForm;
