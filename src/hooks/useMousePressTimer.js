import { useState } from 'react';

let timer = null;

export default (defaultDelay) => {
  const [delay, setDelay] = useState(defaultDelay);

  const onMouseDown = (cb) => {
    timer = setTimeout(() => {
      cb();
    }, delay);
  };

  const onMouseUp = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  const clearTimer = () => {
    clearTimeout(timer);
  };

  return { delay, onMouseDown, onMouseUp, setDelay, clearTimer };
};
