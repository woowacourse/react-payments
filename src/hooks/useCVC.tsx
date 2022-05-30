import { useCallback, useState } from 'react';

import { isValidCVC } from 'utils/regExp';

export default function useCVC(initialValue: string) {
  const [CVC, setCVC] = useState(initialValue);

  const handler = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      if (!isValidCVC(value)) return;

      setCVC(value);
    },
    []
  );

  return { CVC, setCVC: handler };
}
