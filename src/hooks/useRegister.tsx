import { Children, useState, isValidElement, PropsWithChildren } from 'react';
import { RegisterComponentProps, RegisterStep } from 'types';

interface StepProps {
  name: string;
}

function Register({ children, step }: PropsWithChildren<RegisterComponentProps>) {
  const steps = Children.toArray(children).reverse();

  const currentIndex = steps.findIndex(
    (child) => isValidElement(child) && child.props.name === step,
  );

  const validElements = steps.slice(0, currentIndex + 1).filter(isValidElement);

  return <>{validElements.reverse()}</>;
}

function Step({ children }: PropsWithChildren<StepProps>) {
  return <>{children}</>;
}

Register.Step = Step;

const useRegister = <T extends RegisterStep[]>(steps: readonly [...T]) => {
  const [step, setStep] = useState<T[number]>(steps[0]);
  const [stepIndex, setStepIndex] = useState(0);

  const nextStepHandler = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((prevStepIndex) => prevStepIndex + 1);
      setStep(steps[stepIndex + 1]);
    }
  };

  return { step, Register, nextStepHandler };
};

export default useRegister;
