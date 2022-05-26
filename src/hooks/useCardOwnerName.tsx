import { useCallback, useState } from 'react';

import { isValidOwnerName } from 'utils/regExp';

export default function useCardOwnerName(initialValue: string) {
  const [cardOwnerName, setCardOwnerName] = useState(initialValue);

  const handler = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      if (!isValidOwnerName(value)) return;

      setCardOwnerName(value.toUpperCase());
    },
    []
  );

  return { cardOwnerName, setCardOwnerName: handler };
}
