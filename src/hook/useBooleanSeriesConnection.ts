import { useState, useEffect } from 'react';

const useBooleanSeriesConnection = (connectionLength: number) => {
  const [booleans, setBooleans] = useState(0);
  const [isAllTrue, setIsAllTrue] = useState(false);

  const getSetBooleanHandler = (stateIndex: number) => (value: boolean) => {
    if (stateIndex >= connectionLength) throw new Error('Use stateIndex smaller than connectionLength')

    if (value) {
      const singleTrueFlag = 1 << stateIndex
      setBooleans(booleans | singleTrueFlag);
    } else {
      const singleFalseFlag = ((1 << connectionLength) - 1) - (1 << stateIndex);
      setBooleans(booleans & singleFalseFlag);
    }
  }

  const getCurrentBooleanStates = () => {
    const binary = booleans.toString(2).slice(2);
    const formattedBinary = '0'.repeat(connectionLength - binary.length) + binary;
    return  formattedBinary.split('').map((value) => Boolean(Number(value))).reverse();
  }

  useEffect(() => {
    setIsAllTrue(booleans === (1 << connectionLength) - 1)
  }, [booleans, connectionLength]);

  return { isAllTrue, getSetBooleanHandler, getCurrentBooleanStates };
}

export default useBooleanSeriesConnection;
