import {useEffect} from 'react';
import type {ReactNode} from 'react';

type StepFocusTarget = {
  slot: ReactNode;
  focusTargetId?: string;
};

export const useStepFocus = (steps: StepFocusTarget[]) => {
  const focusTargetId = steps.find(({slot, focusTargetId}) => slot && focusTargetId)?.focusTargetId;

  useEffect(() => {
    if (focusTargetId) document.getElementById(focusTargetId)?.focus();
  }, [focusTargetId]);
};
