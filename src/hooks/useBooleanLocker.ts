import { useState, useCallback } from 'react';

/**
 * useBooleanLocker
 * 여러 종류의 값들을 저장해 두고, 모든 값들이 포함되어있는지의 여부를 반환합니다.
 * 여러 조건에 해당하는 boolean 값들을 업데이트 하면서 모든 조건이 일치하는지의 여부를 알 수 있습니다.
 *
 * @param valueCount - Hooks를 사용할 시 지정할 값의 개수
 */
const useBooleanLocker = (valueCount: number) => {
  const [booleanValues, setBooleanValues] = useState<boolean[]>(Array(valueCount).fill(false));

  const setBooleanValueByIndex = useCallback((index: number, value: boolean) => {
    setBooleanValues(booleanValues => {
      const newBooleanValues = [...booleanValues];
      newBooleanValues[index] = value;
      return newBooleanValues;
    });
  }, []);

  const isUnlocked = booleanValues.every(booleanValue => booleanValue);

  return { isUnlocked, setBooleanValueByIndex };
};

export default useBooleanLocker;
