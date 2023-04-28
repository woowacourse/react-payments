import { useState } from 'react';

export function useCompany() {
  const [value, setValue] = useState('');

  function handleClick(e: React.MouseEvent<HTMLImageElement>) {
    if (e.target instanceof HTMLImageElement) {
      setValue(e.target.id);
    }
  }

  return { value, handleClick };
}
