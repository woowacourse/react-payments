import { Dispatch, SetStateAction, createContext, useMemo } from "react";
import useContextWrapper from "./useContextWrapper";

export const FormRenderOrderContext = createContext<
  [FormRenderOrder, Dispatch<SetStateAction<FormRenderOrder>>] | null
>(null);

type STEP_KEYS = Exclude<FormRenderOrder["step"], "cardPassword">;

const NEXT_STEP: Record<STEP_KEYS, FormRenderOrder["step"]> = {
  cardNumbers: "cardIssuer",
  cardIssuer: "cardPeriod",
  cardPeriod: "cardOwner",
  cardOwner: "cardCVC",
  cardCVC: "cardPassword",
};

const useRenderOrderState = () => {
  const [order, setOrder] = useContextWrapper(FormRenderOrderContext);

  const actions = {
    next: (currentStep: STEP_KEYS) => {
      setOrder((prev) => {
        if (prev.step === currentStep && NEXT_STEP[prev.step]) {
          return { index: prev.index + 1, step: NEXT_STEP[prev.step] };
        }
        return prev;
      });
    },
  };

  return [order, actions] as const;
};

export default useRenderOrderState;
