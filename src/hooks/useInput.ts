import React, { ChangeEvent, useState } from 'react';

const useInput = (
  initialState: string,
  prevConditionCallback: (e: React.ChangeEvent<HTMLInputElement>) => boolean,
  formatCallback: (data: string) => string
) => {
  const [value, setValue] = useState(initialState);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nextCallback?: (dataId: number, e: ChangeEvent) => void
  ) => {
    if (!prevConditionCallback(e)) return;

    setValue(formatCallback(e.target.value));
  };

  return {
    value,
    onChange,
  };
};

export default useInput;
