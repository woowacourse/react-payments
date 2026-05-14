import { createContext } from "react";

export interface FunnelContextType<Step> {
  currentStep: Step;
  goToStep: (modifier: (currentStep: Step) => Step) => void;
}

const FunnelContext = createContext<FunnelContextType<number> | null>(null);

export default FunnelContext;
