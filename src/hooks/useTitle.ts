import { useEffect, useState } from 'react';

export const useTitle = (titleValue: string) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(titleValue);
  }, []);

  return title;
};
