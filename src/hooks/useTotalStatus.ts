import { useEffect, useState } from 'react';
import { InputStatus } from '../type';

const useTotalStatus = (statusList: InputStatus[]): boolean => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(statusList.every((status) => status === 'VALID'));
  }, [statusList]);

  return isActive;
};

export default useTotalStatus;
