import React, { useEffect, useState } from 'react';

interface UseFlipCardProps {
  frontDeps: Array<React.ComponentState>;
  backDeps: Array<React.ComponentState>;
}
export default function useFlipCard({ frontDeps, backDeps }: UseFlipCardProps) {
  const [isFrontSide, setFrontSide] = useState(true);

  const flipCard = () => {
    setFrontSide((prev) => !prev);
  };

  // TODO: JSON.stringify 써도 되는지 물어보기
  useEffect(() => {
    setFrontSide(false);
  }, [JSON.stringify(backDeps)]);

  useEffect(() => {
    setFrontSide(true);
  }, [JSON.stringify(frontDeps)]);

  return { isFrontSide, flipCard };
}
