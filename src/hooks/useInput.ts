import { useState } from 'react';
import { REGEX } from '../constants';
import { matchKeyWithId } from '../utils/infoKey';

export const useInput = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setValue(value);

    const key = matchKeyWithId(id);
    setError(!REGEX[key].test(value));
  }

  return { value, error, handleChange };
};
