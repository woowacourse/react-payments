import { useEffect, useState } from 'react';

const useLetterRepeatAnimation = (letter: string, length = 2, delay = 200) => {
  const [letterSpace, setLetterSpace] = useState(letter);

  useEffect(() => {
    setTimeout(() => {
      if (letterSpace.length < length) {
        setLetterSpace(prev => prev + letter);
      } else {
        setLetterSpace('');
      }
    }, delay);
  }, [letter, length, delay, setLetterSpace, letterSpace]);

  return letterSpace;
};

export default useLetterRepeatAnimation;
