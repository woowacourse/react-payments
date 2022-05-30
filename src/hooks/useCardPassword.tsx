import { useCallback, useState } from 'react';

import { isValidPassword } from 'utils/regExp';

export default function useCardPassword(initialValue: string) {
  const [password, setPassword] = useState(initialValue);

  const handler = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      if (!isValidPassword(value)) return;

      setPassword(value);
    },
    []
  );

  return { password, setPassword: handler };
}
