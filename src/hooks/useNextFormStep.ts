import { useRef } from 'react';

import { CardStep } from '../constants';
import { findNextFormStep } from '../utils';

interface Props {
  currentCardStep: CardStep;
}
function useNextFormStep(props: Props) {
  const { currentCardStep } = props;
  const nextFormStep = useRef<CardStep>();

  const updateNextFormStep = () => {
    const nextStep = findNextFormStep(currentCardStep);
    if (!nextStep) return;
    nextFormStep.current = nextStep;
  };

  updateNextFormStep();

  return { nextFormStep: nextFormStep.current };
}

export default useNextFormStep;
