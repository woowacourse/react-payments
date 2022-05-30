import { useCallback, useState } from 'react';

export default function useInput(initialState: string) {
  const [value, setValue] = useState(initialState);

  const handler = useCallback(
    ({ target: { value: text } }: React.ChangeEvent<HTMLInputElement>) => {
      setValue(text);
    },
    []
  );

  return { value, setValue: handler };
}
