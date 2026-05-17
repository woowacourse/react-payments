import useFunnelContext from "./useFunnelContext";

interface StepProps {
  step: number;
  comparisonOperator?:
    | "equal"
    | "lessThan"
    | "greaterThan"
    | "lessThanOrEqual"
    | "greaterThanOrEqual";
  children: (arg: {
    goToStep: (modifier: (currentStep: number) => number) => void;
  }) => React.ReactNode;
}

const Step = ({ children, step, comparisonOperator = "equal" }: StepProps) => {
  const { currentStep, goToStep } = useFunnelContext();

  let shouldRender = false;

  if (comparisonOperator === "equal") shouldRender = currentStep === step;

  if (comparisonOperator === "lessThan") shouldRender = currentStep < step;

  if (comparisonOperator === "greaterThan") shouldRender = currentStep > step;

  if (comparisonOperator === "lessThanOrEqual")
    shouldRender = currentStep <= step;

  if (comparisonOperator === "greaterThanOrEqual")
    shouldRender = currentStep >= step;

  return <>{shouldRender && children({ goToStep })}</>;
};

export default Step;
