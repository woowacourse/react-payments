import { useEffect, useState } from 'react';

const useShowCase = (showOrder: string[], isValidList: Record<string, boolean>) => {
  // 첫 번째 값만 true
  const initialShowCase = showOrder.reduce(
    (acc, item, index) => {
      acc[item] = index === 0;
      return acc;
    },
    {} as Record<string, boolean>,
  );
  const [showCase, setShowCase] = useState(initialShowCase);

  useEffect(() => {
    Object.values(isValidList).forEach((value, index) => {
      if (value === true && index !== showOrder.length - 1) {
        addItemToShowCase(index + 1);
      }
    });
  }, [isValidList]);

  const addItemToShowCase = (index: number) => {
    if (showCase[showOrder[index]]) return;

    setShowCase({ ...showCase, [showOrder[index]]: true });
  };

  return { showCase };
};

export default useShowCase;
