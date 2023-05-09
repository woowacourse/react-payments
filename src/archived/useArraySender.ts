import { useState } from 'react';

type useArrayProps = {
  valueCount: number;
  sendingFunction: CallableFunction;
};

/**
 * 《useArraySender》
 * 배열 형태로 값을 관리하고, 값이 업데이트될 때마다 원하는 다른 함수, 예를 들어 다른 hooks의 업데이트 함수로
 * 이 업데이트된 값을 보내줄 수 있습니다.
 *
 * @param valueCount - 값을 저장할 배열의 크기
 * @param sendingFunction - 값을 업데이트하고, 추가로 이 값을 수신받을 함수
 */
const useArray = ({ valueCount, sendingFunction }: useArrayProps) => {
  const [values, setValues] = useState<string[]>(Array(valueCount).fill(''));

  const setValueByIndex = (index: number, newValue: string) => {
    const newValues = [...values];
    newValues[index] = newValue;

    setValues(() => {
      if (sendingFunction) {
        sendingFunction(newValues);
      }

      return newValues;
    });
  };

  return { values, setValueByIndex };
};

export default useArray;
