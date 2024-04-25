import { useEffect, useState, Children, ReactNode } from 'react';

export interface ISequenceContainerProps {
  predicates: boolean[];
  componentQueue: ReactNode;
}

export default function SequenceContainer({ predicates, componentQueue }: ISequenceContainerProps) {
  const [stage, setStage] = useState(0);
  const childrenElements = Children.toArray(componentQueue);

  useEffect(() => {
    const stages = predicates.map((predicate, index) => stage === index && predicate);
    const nextStageIndex = stages.findIndex(v => v);

    if (nextStageIndex !== -1) {
      setStage(nextStageIndex + 1);
    }
  }, [predicates, stage]);

  const visibleElements = childrenElements.reduce<ReactNode[]>((result, child, index) => {
    const isVisibleElement = stage >= index;

    if (isVisibleElement) {
      return [child, ...result];
    }
    return result;
  }, []);

  return <>{visibleElements}</>;
}
