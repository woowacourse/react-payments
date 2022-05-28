import { useState, useEffect, useCallback } from 'react';
import { checkFullFilled } from 'page/cardAdd/validator';
import { isObject } from 'utils';
import { v4 as uuid } from 'uuid';

const useCardInfo = (initialCardInfo) => {
  const [cardInfo, setCardInfo] = useState(() => ({ ...initialCardInfo, id: uuid() }));
  const [isFullFilled, setIsFullFilled] = useState(false);

  useEffect(() => {
    if (checkFullFilled(cardInfo)) {
      setIsFullFilled(true);
      return;
    }

    setIsFullFilled(false);
  }, [cardInfo]);

  const handleCardInfo = useCallback(({ item, name, value }) => {
    setCardInfo((prevCardInfo) => {
      if (isObject(prevCardInfo[item])) {
        return {
          ...prevCardInfo,
          [item]: {
            ...prevCardInfo[item],
            [name]: value,
          },
        };
      }

      return {
        ...prevCardInfo,
        [item]: value,
      };
    });
  }, []);

  return [cardInfo, isFullFilled, handleCardInfo];
};

export default useCardInfo;
