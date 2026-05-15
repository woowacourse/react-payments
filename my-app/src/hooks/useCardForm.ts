import type { CardDisplayInfo } from "../types";

import { getCardCompletion } from "../utils/cardCompletion";
import { useCardInfo } from "./useCardInfo";

export const useCardForm = () => {
  const { cardInfo, handlers } = useCardInfo();
  const { network, maxLength, isSupportedNetwork, completion } = getCardCompletion(cardInfo);

  const displayCardInfo: CardDisplayInfo = { ...cardInfo, network };

  return {
    cardInfo: displayCardInfo,
    maxLength,
    isSupportedNetwork,
    completion,
    handlers,
  };
};
