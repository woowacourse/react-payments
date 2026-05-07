import { createContext } from "react";

export interface FunnelContextType<Step> {
  currentStep: Step;
  goToStep: (modifier: (currentStep: Step) => Step) => void;
}

const FunnelContext = createContext<FunnelContextType<number>>({
  currentStep: 0,
  goToStep: () => {},
});

export default FunnelContext;
