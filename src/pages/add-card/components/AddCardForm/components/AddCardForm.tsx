import styles from "./AddCardForm.module.css";
import FormField from "@/components/FormField/FormField";
import CardNumberInputs from "@card/CardNumber/components/CardNumberInput";
import CardExpireDateInputs from "@card/ExpireDate/components/CardExpireDateInputs/CardExpireDateInputs";
import CVCInput from "@/card/CVC/components/CVCInput";
import CardTypeDropdown from "@card/CardType/components/CardTypeDropdown";
import CardPasswordInput from "@/card/CardPassword/components/CardPasswordInput";
import useAddCardFormStep, {
  ADD_CARD_FORM_STEPS,
} from "../hooks/useAddCardFormStep";
import { Fragment } from "react/jsx-runtime";
import SwitchCase from "@/components/SwitchCase/SwitchCase";
import { useNavigate } from "react-router";
import { PAGE_URL } from "@/constants/pageUrl";
import { FormEvent } from "react";
import { AddCardState } from "@/pages/add-card/hooks/useAddCard";

interface AddCardFormProps {
  addCardState: AddCardState;
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
  const { isNextStep: isExpireDateNextStep } = controlledExpireDate;
  const { isNextStep: isCVCNextStep } = controlledCVC;
  const { isNextStep: isPasswordNextStep } = controlledCardPassword;

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

  const isAddFormSubmit =
    isCardNumberNextStep &&
    isCardTypeNextStep &&
    isExpireDateNextStep &&
    isCVCNextStep &&
    isPasswordNextStep;

  return (
    <form className={styles.form} onSubmit={handleAddCardFormSubmit}>
      {addCardFormSteps.map((step) => (
        <Fragment key={step}>
          {
            <SwitchCase
              value={step}
              caseBy={{
                [ADD_CARD_FORM_STEPS.CARD_NUMBER]: () => (
                  <FormField
                    title="결제할 카드 번호를 입력해 주세요"
                    guideText="본인 명의의 카드만 결제 가능합니다."
                  >
                    <CardNumberInputs {...controlledCardNumber} />
                  </FormField>
                ),
                [ADD_CARD_FORM_STEPS.CARD_TYPE]: () => (
                  <FormField
                    title="카드사를 선택해 주세요"
                    guideText="현재 국내 카드사만 가능합니다."
                  >
                    <CardTypeDropdown {...controlledCardType} />
                  </FormField>
                ),
                [ADD_CARD_FORM_STEPS.EXPIRE_DATE]: () => (
                  <FormField
                    title="카드 유효기간을 입력해 주세요"
                    guideText="월/년도(MMYY)를 순서대로 입력해 주세요."
                  >
                    <CardExpireDateInputs {...controlledExpireDate} />
                  </FormField>
                ),
                [ADD_CARD_FORM_STEPS.CVC]: () => (
                  <FormField title="CVC 번호를 입력해 주세요">
                    <CVCInput {...controlledCVC} />
                  </FormField>
                ),
                [ADD_CARD_FORM_STEPS.CARD_PASSWORD]: () => (
                  <FormField
                    title="비밀번호를 입력해 주세요"
                    guideText="앞의 2자리를 입력해 주세요"
                  >
                    <CardPasswordInput {...controlledCardPassword} />
                  </FormField>
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
