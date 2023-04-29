import { useState } from 'react';

const useSwitch = (initValue: boolean) => {
  const [state, setState] = useState(initValue);

  const turnOn = () => {
    setState(true);
  };

  const turnOff = () => {
    setState(false);
  };

  return { state, turnOn, turnOff };
};

export default useSwitch;
