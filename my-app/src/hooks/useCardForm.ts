import { getCardCompletion } from "../utils/cardCompletion";
import { useCardInfo } from "./useCardInfo";

export const useCardForm = () => {
  const { cardInfo, handlers } = useCardInfo();
  const { network, maxLength, isSupportedNetwork, completion } = getCardCompletion(cardInfo);

  return {
    cardInfo,
    network,
    maxLength,
    isSupportedNetwork,
    completion,
    handlers,
  };
};
