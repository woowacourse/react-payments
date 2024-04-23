import { useRef } from 'react';

interface props<
  T extends number | string | boolean | null | undefined | bigint | symbol,
> {
  checkValues: T[];
  invalidValues: T[];
}

// 마지막으로 업데이트 된 값을 갖는 Custom Hook
// checkValues: 확인할 값
// invalidValues: 확인할 값이 이 값을 가지면 업데이트 된 것으로 보지 않음
export default function useLastValidValue<
  T extends number | string | boolean | null | undefined | bigint | symbol,
>({ checkValues, invalidValues }: props<T>) {
  const lastValidValue = useRef<T | undefined>(undefined);

  // 함수 호출 이전에 사용하고 있던 데이터를{lastValue:마지막으로 기록된 값, updateTime: 마지막으로 업데이트된 시간}로 저장
  const timeStampedDatas = useRef(
    checkValues.map(value => {
      return { lastValue: value, updateTime: Date.now() };
    })
  );

  // 확인할 목록을 순회하며, 변경된 값이 있으면 업데이트
  checkValues.forEach((checkValue, index) => {
    const timeStampedData = timeStampedDatas.current[index];
    if (timeStampedData.lastValue !== checkValue) {
      timeStampedData.lastValue = checkValue;
      timeStampedData.updateTime = Date.now();
    }
  });

  // 시간순으로 정렬
  const sortedTimeStampedDatas = [...timeStampedDatas.current].sort(
    (a, b) => b.updateTime - a.updateTime
  );

  // 가장 최근에 업데이트 된 유효한 값 찾음
  const nextLastValue = sortedTimeStampedDatas.find(
    object => !invalidValues.includes(object.lastValue)
  )?.lastValue;

  lastValidValue.current = nextLastValue;

  return lastValidValue.current;
}
