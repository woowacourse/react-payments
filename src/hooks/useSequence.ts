import { useEffect, useState } from 'react';

const useSequence = (conditions: boolean[]) => {
  const [sequence, setSequence] = useState(0);

  useEffect(() => {
    const completedSequenceIndex = conditions
      .map((isSatisfied, index) => sequence === index && isSatisfied)
      .findIndex(v => v);

    if (completedSequenceIndex !== -1) {
      const nextSequence = completedSequenceIndex + 1;
      setSequence(nextSequence);
    }
  }, [sequence, conditions]);

  return sequence;
};

export default useSequence;
