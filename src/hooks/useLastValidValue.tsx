import { useEffect, useRef, useState } from 'react';

interface props<
  T extends number | string | boolean | null | undefined | bigint | symbol,
> {
  checkValues: T[];
  invalidValues: T[];
}

export default function useLastValidValue<
  T extends number | string | boolean | null | undefined | bigint | symbol,
>({ checkValues, invalidValues }: props<T>) {
  const [lastValidValue, setLastValidValue] = useState<T | undefined>(
    undefined
  );

  const lastValueObjects = useRef(
    checkValues.map(value => {
      return { lastValue: value, updateTime: Date.now() };
    })
  );

  const updateLastValue = () => {
    checkValues.forEach((value, index) => {
      if (value !== lastValueObjects.current[index].lastValue) {
        lastValueObjects.current[index].lastValue = value;
        lastValueObjects.current[index].updateTime = Date.now();
      }
    });
  };

  useEffect(updateLastValue, [
    ...lastValueObjects.current.map(entry => entry.lastValue),
    checkValues,
    lastValueObjects,
  ]);

  useEffect(() => {
    const sortedLastValueObjects = [...lastValueObjects.current].sort(
      (a, b) => b.updateTime - a.updateTime
    );

    const nextLastValue = sortedLastValueObjects.find(
      object => !invalidValues.includes(object.lastValue)
    )?.lastValue;

    setLastValidValue(nextLastValue);
  }, [
    ...lastValueObjects.current.map(entry => entry.updateTime),
    invalidValues,
    lastValueObjects,
  ]);

  return lastValidValue;
}
