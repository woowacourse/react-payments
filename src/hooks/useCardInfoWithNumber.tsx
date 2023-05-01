import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

// interface CardInfosType {
//   cardInfo: string[];
//   validateCardInfo: (order: number, value: string) => void;
// }

// interface CardInfoType {
//   cardInfo: string;
//   validateCardInfo: (order: number, value: string) => void;
// }

const useCardInfoWithNumber = (initState: string | Array<string>) => {
  const [cardInfo, setCardInfo] = useState<Array<string> | string>(initState);

  const validateCardInfo = (order: number, value: string) => {
    if (REG_EXP.cardNumberLimit.test(value)) return;

    setValidatedCardInfo(order, value);
  };

  const setValidatedCardInfo = (order: number, value: string) => {
    cardInfo instanceof Object
      ? setCardInfo({ ...cardInfo, [order]: value })
      : setCardInfo(value);
  };

  return { cardInfo, validateCardInfo };

  // if (cardInfo instanceof Object) {
  //   return { cardInfo, validateCardInfo } as CardInfosType;
  // }
  // return { cardInfo, validateCardInfo } as CardInfoType;
};

export default useCardInfoWithNumber;
