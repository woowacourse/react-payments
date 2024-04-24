import { useEffect, useState } from 'react';

type FlagsState = boolean[];

const useCheckFlag = (targets: FlagsState) => {
  const [flags, setFlags] = useState<boolean[]>(targets.map(() => false));

  useEffect(() => {
    setFlags((prev) => {
      return targets.map((target, index) => (prev[index] || target ? true : false));
    });
  }, [JSON.stringify(targets)]);

  return flags;
};

export default useCheckFlag;
