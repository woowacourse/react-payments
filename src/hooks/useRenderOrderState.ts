import { Dispatch, SetStateAction, createContext, useMemo } from "react";
import useContextWrapper from "./useContextWrapper";

export const FormRenderOrderContext = createContext<
  [FormRenderOrder, Dispatch<SetStateAction<FormRenderOrder>>] | null
>(null);

const NEXT_STEP: Record<Exclude<FormRenderOrder["step"], "cardPassword">, FormRenderOrder["step"]> = {
  cardNumbers: "cardIssuer",
  cardIssuer: "cardPeriod",
  cardPeriod: "cardOwner",
  cardOwner: "cardCVC",
  cardCVC: "cardPassword",
};

const useRenderOrderState = () => {
  const [order, setOrder] = useContextWrapper(FormRenderOrderContext);

  const actions = useMemo(
    () => ({
      next: () => {
        setOrder((prev) => {
          if (prev.step === "cardPassword") {
            return prev;
          }
          return { index: prev.index + 1, step: NEXT_STEP[prev.step] };
        });
      },
    }),
    [setOrder]
  );

  return [order, actions] as const;
};

export default useRenderOrderState;
