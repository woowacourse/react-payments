import { useState } from 'react';

export const useExpiration = () => {
  const [expiration, setExpiration] = useState({ month: '', year: '' });

  const handleExpirationInput = ({ target: { value } }, category) => {
    const valueAsString = String(value);

    if (valueAsString.length > 2) {
      return;
    }

    setExpiration((prevExpiration) => ({ ...prevExpiration, [category]: valueAsString.replace(/[^0-9]s/g, '') }));
  };

  return {
    expiration: {
      value: expiration,
      handleChange: handleExpirationInput,
    },
  };
};
