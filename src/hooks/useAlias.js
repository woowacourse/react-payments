import { useState, useEffect } from 'react';

const useAlias = () => {
  const [alias, setAlias] = useState('');
  const [isFullFilled, setIsFullFilled] = useState(false);

  useEffect(() => {
    if (alias.length >= 2) {
      setIsFullFilled(true);
      return;
    }

    setIsFullFilled(false);
  }, [alias]);

  return [alias, isFullFilled, setAlias];
};

export default useAlias;
