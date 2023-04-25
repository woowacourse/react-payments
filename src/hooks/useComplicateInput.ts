import React, { useCallback, useState } from 'react';

const useComplicateInput = <T>(initialState: T) => {
  const [value, setValue] = useState(initialState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue({
        ...value,
        [e.target.name]: e.target.value,
      });
    },
    [value]
  );

  return [value, onChange] as const;
};

export default useComplicateInput;
