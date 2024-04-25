import { useEffect, useState, Children, ReactNode } from 'react';

export interface ISequenceContainerProps {
  completionFlagQueue: boolean[];
  componentQueue: ReactNode;
}

export default function SequenceContainer({ completionFlagQueue, componentQueue }: ISequenceContainerProps) {
  const [stage, setStage] = useState(0);
  const childrenElements = Children.toArray(componentQueue);

  useEffect(() => {
    const stages = completionFlagQueue.map((isCompleted, index) => stage === index && isCompleted);
    const completedStageIndex = stages.findIndex(v => v);

    if (completedStageIndex !== -1) {
      const nextStage = completedStageIndex + 1;
      setStage(nextStage);
    }
  }, [completionFlagQueue, stage]);

  const visibleElements = childrenElements.reduce<ReactNode[]>((result, child, index) => {
    const isVisibleElement = stage >= index;

    if (isVisibleElement) {
      return [child, ...result];
    }
    return result;
  }, []);

  return <>{visibleElements}</>;
}
