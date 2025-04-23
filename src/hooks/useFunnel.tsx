import { useMemo, useState } from 'react';
import { NonEmptyArray } from '../../types/types';
import { Funnel, FunnelProps, Step } from '../component/@common/Funnel/Funnel';

type UseFunnelProps<T extends NonEmptyArray<string>> = Omit<
  FunnelProps<T>,
  'children'
>;

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  props: UseFunnelProps<Steps>
) => {
  const { steps, step: defaultStep } = props;
  const [step, setStep] = useState<Steps[number]>(defaultStep);

  const FunnelComponent = useMemo(() => {
    const FunnelWithSteps = (
      props: Omit<FunnelProps<Steps>, 'step' | 'steps'>
    ) => <Funnel<Steps> step={step} steps={steps} {...props} />;

    FunnelWithSteps.Step = Step;

    return FunnelWithSteps;
  }, [step, steps]);

  return { Funnel: FunnelComponent, step, setStep };
};
