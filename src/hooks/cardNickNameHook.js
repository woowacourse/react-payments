import { useCallback } from "react";
import { STATE_KEY } from "../constants";

const useCardNickName = (cardState, setCardStateByKey) => {
  const cardNickName = cardState[STATE_KEY.CARD_NICK_NAME];

  const setCardNickNameState = useCallback(
    (cardNickName) => {
      setCardStateByKey(STATE_KEY.CARD_NICK_NAME, cardNickName);
    },
    [setCardStateByKey]
  );

  const onCardNickNameInputChange = useCallback(
    (event) => {
      const { value } = event.target;
      setCardNickNameState(value);
    },
    [setCardNickNameState]
  );

  return {
    cardNickName,
    onCardNickNameInputChange,
  };
};

export default useCardNickName;
