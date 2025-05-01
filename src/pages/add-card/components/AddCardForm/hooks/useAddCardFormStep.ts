import { useEffect, useState } from "react";

export const ADD_CARD_FORM_STEPS = {
  CARD_NUMBER: "카드번호",
  CARD_TYPE: "카드사",
  EXPIRE_DATE: "유효기간",
  CVC: "CVC",
  CARD_PASSWORD: "비밀번호",
} as const;
const ADD_CARD_FORM_STEP_VALUES = Object.values(ADD_CARD_FORM_STEPS);

type AddCardFormStepKey = keyof typeof ADD_CARD_FORM_STEPS;
export type AddCardFormStep = (typeof ADD_CARD_FORM_STEPS)[AddCardFormStepKey];

const useAddCardFormStep = (stepConditions: boolean[]) => {
  const [addCardFormSteps, setAddCardFormSteps] = useState<AddCardFormStep[]>([
    ADD_CARD_FORM_STEPS.CARD_NUMBER,
  ]);

  useEffect(
    function checkNextStep() {
      const currentIndex = addCardFormSteps.length - 1;
      const nextStep = ADD_CARD_FORM_STEP_VALUES[currentIndex + 1];

      const currentStepCondition = stepConditions[currentIndex];
      if (!currentStepCondition) {
        return;
      }

      setAddCardFormSteps((prev) => [nextStep, ...prev]);
    },
    [...stepConditions]
  );

  return addCardFormSteps;
};

export default useAddCardFormStep;
