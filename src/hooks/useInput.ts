import { useState } from 'react';
import { REGEX } from '../constants';
import { matchKeyWithId } from '../utils/infoKey';

export function useInput() {
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setValue(value);

    const key = matchKeyWithId(id);
    setIsError(!REGEX[key].test(value));
  }

  return { value, isError, handleChange };
}
