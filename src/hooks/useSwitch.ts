import { useState } from 'react';

const useSwitch = (initValue: boolean) => {
  const [state, setState] = useState(initValue);

  const turnOn = () => {
    setState((prev) => !prev);
  };

  const turnOff = () => {
    setState((prev) => !prev);
  };

  return { state, turnOn, turnOff };
};

export default useSwitch;
