import { ReactElement, useCallback, useState } from 'react';

type StepProps<T> = {
  name: T;
  children: React.ReactNode;
};

export const useStack = <T,>(stepNames: T) => {
  const [step, setStep] = useState<T>(stepNames);

  const StackComponent = useCallback(
    ({ children }: { children: ReactElement<StepProps<T>>[] }) => {
      const stepComponentIndex = children.findIndex((child) => child.props.name === step);
      if (stepComponentIndex === -1) return;

      const StepComponent = children.slice(0, stepComponentIndex + 1).reverse();
      return <>{StepComponent}</>;
    },
    [step]
  );

  const Step = useCallback(({ children }: StepProps<T>) => {
    return <>{children}</>;
  }, []);

  const Stack = Object.assign(StackComponent, { Step });

  return { Stack, setStep };
};
