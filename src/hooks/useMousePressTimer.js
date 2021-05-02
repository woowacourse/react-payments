import { useState } from 'react';

export default (defaultDelay) => {
  const [delay, setDelay] = useState(defaultDelay);
  const [timer, setTimer] = useState(null);

  const onMouseDown = (cb) => {
    setTimer(
      setTimeout(() => {
        cb();
      }, delay)
    );
  };

  const onMouseUp = () => {
    if (timer) {
      clearTimeout();
    }
  };

  const clearTimer = () => {
    setTimer(null);
  };

  return { delay, onMouseDown, onMouseUp, setDelay, clearTimer };
};
