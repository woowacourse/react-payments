import { CARD_FORM_STEP, CardStep } from '../constants';

function findNextFormStep(currentCardStep: CardStep) {
  const currentStepNumber = CARD_FORM_STEP[currentCardStep];
  const nextStep = Object.entries(CARD_FORM_STEP).find(
    ([_, value]) => value === currentStepNumber + 1,
  );

  return nextStep?.[0] as CardStep;
}

export default findNextFormStep;
