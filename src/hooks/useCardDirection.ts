import { useState } from 'react';

const useCardDirection = () => {
  const [isFront, setIsFront] = useState(true);

  const changeCardDirection = () => {
    setIsFront((prev) => !prev);
  };

  return { isFront, changeCardDirection };
};

export default useCardDirection;
