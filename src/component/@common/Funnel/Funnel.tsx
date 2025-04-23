import {
  Children,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useEffect,
} from 'react';
import { NonEmptyArray } from '../../../../types/types';
import { assert } from '../../../utils/error';

export interface FunnelProps<Steps extends NonEmptyArray<string>> {
  steps: Steps;
  step: Steps[number];
  children:
    | Array<ReactElement<StepProps<Steps>>>
    | ReactElement<StepProps<Steps>>;
}

export interface StepProps<Steps extends NonEmptyArray<string>>
  extends PropsWithChildren {
  name: Steps[number];
  onNext?: VoidFunction;
}

export const Funnel = <Steps extends NonEmptyArray<string>>(
  props: FunnelProps<Steps>
) => {
  const { steps, step, children } = props;

  const validChildren = Children.toArray(children)
    .filter(isValidElement<StepProps<Steps>>)
    .filter(({ props }) => steps.includes(props.name));

  const targetStep = validChildren.find((child) => child.props.name === step);

  assert(targetStep != null, `${step} step 컴포넌트를 찾지 못했습니다.`);

  return targetStep;
};

export const Step = <T extends NonEmptyArray<string>>(props: StepProps<T>) => {
  const { onNext, children } = props;

  useEffect(() => {
    onNext?.();
  }, [onNext]);

  return children;
};
