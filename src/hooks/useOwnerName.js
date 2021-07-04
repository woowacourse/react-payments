import { useState } from 'react';

export const useOwnerName = () => {
  const initialState = '';
  const [ownerName, setOwnerName] = useState(initialState);

  const handleOwnerNameInput = ({ target: { value } }) => {
    setOwnerName(value.trimStart());
  };

  return {
    ownerName: {
      value: ownerName,
      handleChange: handleOwnerNameInput,
      reset: () => setOwnerName(initialState),
    },
  };
};
