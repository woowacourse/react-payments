type StepStackProps = {
  children: React.ReactNode[];
  currentStep: number;
};

const StepStack = ({ children, currentStep }: StepStackProps) => {
  return <>{children.slice(0, currentStep + 1).reverse()}</>;
};

export default StepStack;
