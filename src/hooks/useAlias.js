import { useState, useEffect } from 'react';
import { INPUT_MIN_LENGTH } from 'constants';

const useAlias = () => {
  const [alias, setAlias] = useState('');
  const [isFullFilled, setIsFullFilled] = useState(false);

  useEffect(() => {
    if (alias.length >= INPUT_MIN_LENGTH.ALIAS) {
      setIsFullFilled(true);
      return;
    }

    setIsFullFilled(false);
  }, [alias]);

  return [alias, isFullFilled, setAlias];
};

export default useAlias;
