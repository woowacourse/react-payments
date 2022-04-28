import { useState } from "react";
import { cardInfos, defaultCardInfo } from "../constants";

const useCardTypeInfo = () => {
  const [cardTypeInfo, setCardTypeInfo] = useState(defaultCardInfo);

  const onClickCardType = (idx) => {
    setCardTypeInfo(cardInfos[idx]);
  };

  return [cardTypeInfo, onClickCardType];
};

export default useCardTypeInfo;
