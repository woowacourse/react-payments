import { useState } from 'react';

export const useOwnerName = () => {
  const [ownerName, setOwnerName] = useState('');

  const handleOwnerNameInput = ({ target: { value } }) => {
    setOwnerName(value.trimStart());
  };

  return {
    ownerName: {
      value: ownerName,
      handleChange: handleOwnerNameInput,
    },
  };
};
