import { ReactElement, useCallback, useState } from 'react';

type StepProps<T> = {
  name: T;
  children: React.ReactNode;
};

export const useStack = <T extends string>(initialStep: T) => {
  const [step, setStep] = useState<T>(initialStep);

  const StackComponent = useCallback(
    ({ children }: { children: ReactElement<StepProps<T>>[] }) => {
      if (!children) return null;

      const stepIndex = children.findIndex((child) => child.props.name === step);
      if (stepIndex === -1) return null;

      const visibleSteps = children.slice(0, stepIndex + 1).reverse();

      return <>{visibleSteps.map((child) => child)}</>;
    },
    [step]
  );

  const Step = useCallback(({ children }: StepProps<T>) => {
    return <>{children}</>;
  }, []);

  const Stack = Object.assign(StackComponent, { Step });

  return { Stack, Step, setStep };
};
